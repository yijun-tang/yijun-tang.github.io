---
layout: post
title: "What's New in Rust?"
categories: language
---

key features:
1. fast (without runtime, GC; high level feature compiled to efficient code, known as zero-cost abstraction)
2. reliable

Rust强调fast和safe两方面，不仅仅是对于系统级编程来说。

***

bad features:
1. symbols shadow within same block (close to the dynamic type???)
2. mutable variable vs. constants
3. what's the purpose of scalar type `isize` and `usize`


good features:
1. immutable by default
2. rich integer literal formats
3. no implicit conversion from non-boolean to boolean
4. distinction between expression and statement


enhanced features:
1. `loop` with `break` (break the loop with an return value, break nested loops) and `continue` (continue nested loops)


unclear points:
1. integer overflow


core features:
1. data types: scalar (integer, float-point, boolean, char), compound (tuple, array)


