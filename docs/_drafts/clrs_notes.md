---
layout: post
title: "Reading Notes of CLRS"
categories: algorithm
---

***
How to prove the correctness of an algorithm?
* A loop-invariant proof is a form of mathematical induction, where to prove that a property holds, you prove a base case and an inductive step.

***
How to analyze the performance of an algorithm? What model it's based on?

Most of this book assumes a generic one-processor, random-access machine (RAM) model of computation:
* sequential instructions execution, no concurrent operations
* each instruction or data access takes a constant amount of time
* instructions: arithmetic (such as add, subtract, multiply, divide, remainder, üoor, ceiling), data movement (load, store, copy), and control (conditional and unconditional branch, subroutine call and return)
* data types: integer, foating point (for storing real number approximations), and character

The _running time_ is the function of _input size_. We often use the big theta notation to represent the order of growth of the running time.

***
Notations for characterizing the performance:

Three kinds of notations:
* big O: the _upper bound_ of asymptotic efficiency of algorithms
* big omega: the _lower bound_ of ...
* big theta: the _tight bound_ of ...

> If you can show that a function is both `big O(f(n))` and `big Omega(f(n))` for some function `f(n)`, then you have shown that the function is `big Theta(f(n))`.

***
This book is so proof-heavy, so the nexting reading will be practical oriented.
