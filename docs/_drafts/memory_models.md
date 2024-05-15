---
layout: post
title: "Memory Models"
categories: architecture
---

## 硬件内存模型 (Hardware Memory Models)

### 简介

在很久以前，计算机程序还不支持多线程的时候，对于如何优化程序性能，人们可以做的事情很少。但是，随着更新一代的硬件以及编译器的出现，许多在硬件以及编译器层面的优化，能够使得我们的程序执行的更快。如何判断一个来自这些方面的优化是否有效呢？一个标准是**该优化能否保证一个有效程序的行为在优化前后不发生变化**。(_Valid optimations do not change the behavior of valid programs_)

CPU由单核跨入多核时代，操作系统通过**线程**这一抽象将硬件层面的并行化暴露给程序员。但是，这给语言设计者，编译器实现者以及程序员带来了麻烦。这使得之前在单线程环境中，对于应用程序而言透明的（硬件、编译器层面的）优化，在多线程环境中不在适用。下面通过例子说明: (类C语言的伪代码)

```c
// all variables are initially set to zero

// Thread 1
x = 1;
done = 1;

// Thread 2
while(done == 0) { /* loop */ }
print(x);
```
如果这两个线程分别在不同的处理器上执行，直到程序执行完毕，那么线程2可能会打印出`0`吗？答案是取决于硬件、编译器。如果逐行翻译成汇编代码，并在多核x86 CPU上执行的话，会打印出`1`；但是对于ARM, POWER多核处理器而言，则是打印出`0`。另外从编译器的角度来看，许多标准的优化会使得程序打印出`0`，或者进入死循环。

因此，程序员需要一个清晰的答案告诉他们，是否一个程序能否在新的硬件、编译器上正确运行。这里主要的问题是：内存中数据变更的可见性与一致性。这一程序员与硬件设计者、编译器实现者之间的约定被称为**内存一致性模型**或者简单称为**内存模型**。(_The main issue here is the visibility and consistency of changes to data stored in memory, that contract is called the **memory consistency model** or just **memory model**_)

起初，内存模型这一名词是用来定义**硬件**提供了哪些保证(_guarantee_)来方便程序员编写汇编代码。随后，人们开始使用该名词定义**高级编程语言**提供了哪些保证来方便程序员编写高级语言程序。将编译器包含到其中，使得定义一个合理的模型变得更加复杂。

### 线性一致性 (Sequential Consistency)

Lesilie Lamport在论文[How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs](https://www.microsoft.com/en-us/research/publication/make-multiprocessor-computer-correctly-executes-multiprocess-programs/)中提出了**线性一致性**:

> The customary approach to designing and proving the correctness of multiprocess algorithms for such a computer assumes that the following condition is satisfied: the result of any execution is the same as if the operations of all the processors were executed in some sequential order, and the operations of each individual processor appear in this sequence in the order specified by its program. A multiprocessor satisfying this condition will be called sequentially consistent.

> 对于多核处理器，如何设计多线程算法，并且证明算法的正确性，惯常的做法是假设如下条件满足：


