---
layout: post
title: "The Journey to OS Kernel in Rust"
categories: os, rust
---

### A Freestanding Rust Binary

We can't use most of the Rust standary library, but there is a lot of Rust features that we can use:
* iterators
* closures
* pattern matching
* option and result
* string formatting
* ownership system

In order to create an OS kernel in Rust, we need to create an executable that can be run without an underlying operating system. Such an executable is often called a **_freestanding_** or **_bare-metal_** executable.

### A Minimal Rust Kernel

Two firmwire standards:
* BIOS (Basic Input/Output System)
* UEFI (Unified Extensible Firmware Interface)

The Booting Steps:
* load BIOS from some special flash memory located on the motherboard
* bootloader is loaded by BIOS, which often contains several stages
* kernel image is loaded by bootloader and switch from _real mode_ to _protected mode_, and then _long mode_ 

The Multiboot Standard: (the interface between bootloader and OS)
* The reference implementation is **_GNU GRUB_**, which is the most popular bootloader for Linux systems.

### VGA Text Mode

To print a character to the screen in VGA text mode, one has to write it to the text buffer of the VGA hardware. The VGA text buffer is accessible via **_memory-mapped I/O_** to the address `0xb8000`. This means that reads and writes to that address don't access the RAM but directly access the text buffer on the VGA hardware.

[Code page 437](https://en.wikipedia.org/wiki/Code_page_437)

### Testing

For `no_std` applications such as our kernel, Rust's build-in test framework which depend on standard library is no longer useful.

The unstable [custom test frameworks](https://doc.rust-lang.org/unstable-book/language-features/custom-test-frameworks.html) feature comes in.

The test runner entry is mixed with kernel logic, so conditional compilation is used to run the tests only for `cargo test`. But we need to use device `isa-debug-exit` to exit qemu guest system.

If we want our tests running by a script without showing qemu window and redirect the test results to host system, we need to use the UART serial port.

### CPU Exceptions

On x86, there are about 20 different CPU exception types. The most important are:
* **Page Fault**: A page fault occurs on illegal memory accesses.
* **Invalid Opcode**: This exception occurs when the current instruction is invalid.
* **General Protection Fault**: This is the exception with the broadest range of causes. For example, trying to execute a privileged instruction in user-level code or writing reserved fields in configuration registers.
* **Double Fault**: When an exception occurs, the CPU tries to call the corresponding handler funcion. If another exception occurs while calling the exception handler, the CPU raises a double fault exception. This exception also occurs when there is no handler function registered for an exception.
* **Triple Fault**: If an exception occurs while the CPU tries to call the double fault handler function, it raises a fatal triple fault. We can't catch or handle a triple fault. Most processors react by resetting themselves and rebooting the OS.

[Full list of exceptions](https://wiki.osdev.org/Exceptions)

When an exception occurs, the CPU roughly does the following:
1. Push some registers on the stack, including the instruction pointer and the FLAGS registers.
2. Read the corresponding entry fromt the Interrupt Descriptor Table (IDT). For example, the CPU reads the 14th entry when a page fault occurs.
3. Check if the entry is present and, if not, raise a double fault.
4. Disable hardware interrupts if the entry is an interrupt gate (bit 40 not set).
5. Load the specified GDT selector into the CS (code segment).
6. Jump to the specified handler function.

**_Calling conventions_** specify the details of a function call. For example, they specify where function parameters are placed (e.g. in registers or on the stack) and how results are returned. On x86_64 Linux, the following rules apply for C functions: (specified in the [System V ABI](https://refspecs.linuxbase.org/elf/x86_64-abi-0.99.pdf))
* the first six integer arguments are passed in registers `rdi`, `rsi`, `rdx`, `rcx`, `r8`, `r9`
* additional arguments are passed on the stack
* results are returned in `rax` and `rdx`

Note: Rust doesn't follow the C ABI (in fact, there isn't even a Rust ABI yet), so these rules apply only to functions declared as `extern "C" fn`.

**_preserved register_** is also referred to as **_callee-saved register_**:
* `rbp`, `rbx`, `rsp`, `r12`, `r13`, `r14`, `r15`

**_scratch register_** is also referred to as **_caller-saved register_**
* `rax`, `rcx`, `rdx`, `rsi`, `rdi`, `r8`, `r9`, `r10`, `r11`

Since we don't know when an exception occurs, we can't backup any registers before. Instead, we need a calling convention that preserves all registers. The _x86-interrupt calling convention_ is such a calling convention.

### Double Faults

A guard page is a special memory page at the bottom of a stack that makes it possible to detect stack overflows. The page is not mapped to any physical frame, so accessing it causes a page fault instead of silently corruptting other memory. The bootloader sets up a guard page for our kernel stack, so a stack overflow causes a page fault.

The x86_64 architecture is able to switch to a predefined, known-good stack when an exception occurs. This switch happens at hardware level, so it can be performed before the CPU pushes the exception stack frame (interrupt stack frame). The switching mechanism is implemented as an _Interrupt Stack Table_(IST). The IST is part of an old legacy structure called _Task State Segment_(TSS). The TSS used to hold various pieces of information (e.g. processor register state) about a task in 32-bit mode and was, for example, used for hardware context switching. However, hardware context switching is no longer supported in 64-bit mode.

The Global Descriptor Table (GDT) is a relic that was used for memory segmentation before paging became the de facto standard. While segmentation is no longer supported in 64-bit mode, the GDT still exists. It's mostly used for two things: Switching between kernel space and user space, and loading a TSS structure.

### Hardware Interrupts

Collecting all hardware devices directly to the CPU is not possible. Instead, a separate _interrupt controller_ aggregates the interrupts from all devices and then notifies the CPU.

### Paging

One main task of an operating system is to isolate programs from each other. To achieve this goal, operating systems utilize hardware functionality to ensure that memory areas of one process are not accessible by other processes. There are different approaches depending on the hardware and the OS implementation. On x86, the hardware supports two different approaches to memory protection: **_segmentation_** and **_paging_**.

The fragmentation problem is one of the reasons that segmentation is no longer used by most systems. In fact, segmentation is not even supported in 64-bit mode on x86 anymore.

The x86_64 architecture uses a 4-level page table and a page size of 4KiB. Each page table, independent of the level, has a fixed size of 512 entries. Each entry has a size of 8 bytes, so each table is 512 * 8B = 4KiB large and thus fits exactly into one page.

The x86_64 architecture only support 52-bit physical addresses and 48-bit virtual addresses.

A 4-level page table makes the translation of virtual addresses expensive because each translation requires four memory accesses. To improve performance, the x86_64 architecture caches the last few translations in the so-called _translation lookaside buffer_(TLB). Unlike the other CPU caches, the TLB is not fully transparent and doesn't update or remove translations when the contents of page tables change.

OS is responsible for page table updating and flush the TLB, and CPU would translate virtual address to physical address automatically.
