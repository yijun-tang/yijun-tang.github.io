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

