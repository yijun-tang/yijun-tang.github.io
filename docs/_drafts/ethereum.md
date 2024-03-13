---
layout: post
title: "Ethereum and Web3"
categories: blockchain
---

相较于比特币，以太坊的核心目标如下：（也是为了解决比特币上应用的一些局限性）
* 方便构建DApp
* 提供了一些tradeoffs，对DApp开发有帮助？？？
* 特别强调DApp开发速度、小型且不常用DApp的安全性保障、不同DApp间的互动方便性

### Ethereum Account

Ethereum Accounts contains four fields:
* nonce
* ether balance
* contract code, if present
* storage, empty by default

Two types of accounts:
* external owned accounts, controlled by private key
* contract accounts, controlled by their contract code

### Messages and Transactions

Transactions contain: (send from externally owned accounts)
* recipient of the message
* a signature identifying the sender
* the amount of ether to send
* an optional data field
* a STARTGAS value (execution steps maximum)
* a GASPRICE value (fee per computational step)

Messages contain: (send from contracts)
* sender
* recipient
* ether
* optional data field
* a STARTGAS value

### Ethereum State Transition Function


### Code Execution
low-level, stack-based bytecode language, refered to as "EVM code"

per byte, per operation

operation can access three types of places:
* stack
* memory, infinitely expandable byte array
* contract's long-term storage, a kv store

### Blockchain and Mining

contract code belongs to state transition function which is part of block validation algorithm, all the block will be downloaded by all nodes and verified, so code will be executed by all node.


***

以太坊的应用可以分为三类：financial, semi-financial, non-financial

### Token Systems

on-chain token systems



stake ETH?

DeFi