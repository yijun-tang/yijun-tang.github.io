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
2. deref coercions
3. lifetime


core features:
1. data types: scalar (integer, float-point, boolean, char), compound (tuple, array)


Ownership:
1. similar to RAII in C++
2. object on heap (move, clone), or on stack (copy)
3. the scope of reference is defined by the declaration point and last time used point.

```rust
let mut s = String::from("hello");

let r1 = &s; // no problem
let r2 = &s; // no problem
println!("{} and {}", r1, r2);
// variables r1 and r2 will not be used after this point

let r3 = &mut s; // no problem
println!("{}", r3);
```

***
similar features:
1. `Struct` is very similar to Go.
