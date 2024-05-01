---
layout: post
title: "Database Internals Reading Notes"
categories: database
---

### Preface

The most significant distinctions between database systems are concentrated around two aspects:
* how they **_store_**?
* how they **_distribute_** the data?

## Storage Engines

The database systems are applications built on top of storage engines, offering a schema, a query language, indexing, transactions, and many other useful features.

Some issues, especially when it comes to performance and scalability, start showing only after some time or as the capacity grows.

### Ch1: Introduction and Overview

Three dimensions to classify database systems:
* Memory or Disk based?
* Column or Row oriented?
* OLTP, OLAP, or HTAP?

![architecture of a database management system](/assets/2024-05-01-database_internals/figure1-1.png)

***
**Memory- VS. Disk-Based DBMS**

mem-based pros:
* hight performance
* access granularity
* easily programming

mem-based cons:
* lack of durability
* high costs

disk-based pros:
* easier to maintain
* low costs


durability in memory-based stores: **snapshot** + **log**, asynchronously apply log batch to previous snapshot for updating, this process is called **checkpointing**.

***
**Column- VS. Row-Oriented DBMS**



## Distributed Systems


