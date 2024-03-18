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


