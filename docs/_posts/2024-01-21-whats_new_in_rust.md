---
layout: post
title: "Rust Book Reading Notes"
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
4. `if let` syntax sugar


good features:
1. immutable by default
2. rich integer literal formats
3. no implicit conversion from non-boolean to boolean
4. distinction between expression and statement
5. `match` instead `switch` clause


enhanced features:
1. `loop` with `break` (break the loop with an return value, break nested loops) and `continue` (continue nested loops)
2. `enum` types can contain addtional data inside
3. `main` function could return any type as long as implementing `std::process::Termination` trait


unclear points:
1. integer overflow
2. deref coercions
3. lifetime
4. what's the role of macro? 


core features:
1. data types: scalar (integer, float-point, boolean, char), compound (tuple, array)


Ownership:
1. similar to RAII in C++
2. move (create new one and invalidate the previous one when assigning with `=`) or copy (create new one from the previous one, and need to implement `Copy` trait)
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
2. `Option` enum in std lib is similar to Scala


***
Module system:
* A _package_ is a bundle of one or more crates that provides a set of functionality. (Cargo.toml, multiple binary crates, and at most one library crate)
* A _crate_ is the smallest amount of code that the Rust compiler considers at a time.
* _Modules_ let us organize code within a crate for readability and easy reuse. (Notice that the entire module tree is rooted under the implicit module named `crate`.)

***
More about Cargo:
* Customizing Builds with Profiles: `dev` profile when you build with `cargo build`, `release` profile when you build with `cargo build --release`
* Publishing Crate to Crates.io
* Cargo Workspaces (multiple crates share the same `Cargo.lock` file and `target` directory)
* `cargo install` and extensions to cargo

***
What Is a String?
* Essentially, the `String` type is a vector of bytes `Vec<u8>`
* Rust has only one string type in the core language, which is the string slice `str` that is usually seen in its borrowed form `&str`.

***
Error Handling:
* No exceptions, it has type `Result<T, E>` for recoverable errors, and `panic!` macro for unrecoverable errors
* Two ways to panic: implictly (accessing an array past the end) or explicitly (`panic!`)
* Recoverable errors with `Result`: pattern match, methods of `Result<T, E>`, or `?`

***
Generics:
* functions, structs, enums, methods
* no additional runtime cost

***
Traits:
* similar to interface of other programming languages
* _orphan rule_ avoids the ambiguity
* Traits as Parameters: `impl Trait` syntax, `Trait bound` syntax, `+` syntax for multiple trait bounds, and `where` clause
* If the returning type is specified as trait, only one concrete type of instance could be return ??? (very interesting)
* Conditionally implementing trait by using trait bounds, and _blanket implemenations_
* associated types or generic type for trait???
* default concrete type for generic type
* _supertrait_ is the trait inheritance in a sense
* _newtype pattern_ gets around the _orphan rule_ to implement external traits on external types (no runtime cost)

***
Lifetimes: (a kind of generics)
* Ultimately, lifetime syntax is about connecting the lifetimes of various parameters and return values of functions.
* Three lifetime elision rules (increasing with time goes by)

***
Testing:
* Running test in parallel or in sequential, and other options
* Unit tests are placed with code tested, integration tests are in tests directory
* `#[cfg(test)]`, `#[test]` attributes

***
Closures:
* Captured variable could be immutable/mutable references or owning data
* If moving ownership, this action happens at definition of closure
* Automatically implement one, two, or all three of these `Fn` traits (`FnOnce`, `FnMut`, `Fn`)

***
Iterators: (zero-cost abstraction)
* All iterators should implement trait `Iterator`
* Three types of iterators: `into_iter`, `iter_mut`, `iter`

***
Smart Pointers: (single-threaded)
* the difference between references and smart pointers: while references only borrow data, in many cases, smart pointers own the data they point to

`Box<T>`:
* three use cases: recursive types, zero copy ownership transfer, trait object
* `Deref` trait (or `DerefMut` trait) and _deref coercion_
* `Drop` trait for automatic `drop` method call when variable is out of scope, and `std::mem::drop` for early dropping

`Rc<T>`: allows mutiple read-only owners

_Interior mutability_ is a design pattern in Rust that allows you to mutate data even when there are immutable references to that data; normally, this action is disallowed by the borrowing rules.

Unsafe code: the compiler doesn't check it, you should check it manually

`RefCell<T>`: allows immutable or mutable borrows checked at **runtime**, if borrow checking failed, would panic

Reference Cycle:
* `Rc<T>` inside `RefCell<T>`, or other combinations
* how to avoid it? refercence cycle is made up of ownership (`Rc<T>`) and non-ownership (`Weak<T>`) relationships

***
Fearless Concurrency:
* one OS thread per one language thread
* share memory by communication
* communication by sharing memory: `Arc<T>`
* extensible concurrency with `Sync` and `Send` traits

***
OOP features of Rust:
* class/objects: `struct`, `enum` with `impl`
* encapsulation: `pub`, private by default
* inheritance: default method impl of trait
* ploymorphism: _generics_ and _trait bounds_ (static dispatch without runtime cost), or _trait object_ (dynamic dispatch with runtime cost)

***
Patterns and Matching:
* refutable(only successful matching) or irrefutable (successful or failed matching)
* irrefutable only: function parameters, let statements, for loops
* refutable/irrefutable: if let, while let (warning against irrefutable patterns)

Note: The downside of _match guard_ is that the compiler doesn't try to check for exhaustiveness when _match guard_ expressions are involved.

***
Advanced Features:

Unsafe Rust: (programmers need to uphold the memory safety guarantees)
* unsafe superpowers: 
  * dereference a raw pointer
    - allow to have both mutable and immutable pointers or multiple mutable pointers to the same location
    - aren't guaranteed to point to valid memory
    - allowed to be null
    - don't implement any automatic cleanup

    ```rust
    // only allowed to create raw pointers outside of unsafe block
    let mut num = 5;
    // *const T, *mut T are raw pointers type of type T respectively
    let r1 = &num as *const i32;
    let r2 = &mut num as *mut i32;
    ```
    ```rust
    let mut num = 5;

    let r1 = &num as *const i32;
    let r2 = &mut num as *mut i32;
    // dereference of raw pointers should be placed within unsafe block
    unsafe {
        println!("r1 is: {}", *r1);
        println!("r2 is: {}", *r2);
    }
    ```
  * call an unsafe function or method
    ```rust
    unsafe fn dangerous() {}
    
    unsafe {
        dangerous();
    }
    ```
  * access or modify a mutable static variable
    ```rust
    static mut COUNTER: u32 = 0;

    fn add_to_count(inc: u32) {
        unsafe {
            COUNTER += inc;
        }
    }

    fn main() {
        add_to_count(3);

        unsafe {
            println!("COUNTER: {}", COUNTER);
        }
    }
    ```
  * implement an unsafe trait
  * access fields of `union`s
* should enclose unsafe code within a safe abstraction and provide a safe API
  ```rust
  use std::slice;
  
  fn split_at_mut(values: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
    let len = values.len();
    let ptr = values.as_mut_ptr();

    assert!(mid <= len);

    unsafe {
        (
            slice::from_raw_parts_mut(ptr, mid),
            slice::from_raw_parts_mut(ptr.add(mid), len - mid),
        )
    }
  }
  ```

***
Macros:

Why macros?
Fundamentally, macros are a way of writing code that writes other code, which is known as _metaprogramming_.

* declarative macros with `macro_rules!`
* procedural macros

***
Miscs:
* `!` the _never type_ represent the never return type
* `Sized` trait is a dirty corner with special syntax `?Sized`
* `fn` function pointer type which implements all three `Fn` traits
