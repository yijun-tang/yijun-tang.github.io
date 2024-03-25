---
layout: post
title: "Containers"
categories: container
---

### In the Beginning

If I want to run `run.sh` on a remote server. However, running arbitrary code on remote server is insecure and hard to manage and scale. So we invented **_virtual private servers_** and **_user permissions_**.

But little `run.sh` needs dependencies. It needs certain libraries to exist on the host. So **_AMIs_** (Amazon Machine Images), **_VMDKs_** (VMware Images), and **_Vagrantfiles_** were invented.

But the whole bundles were big and it was hard to ship them around effectively. And so, we invented **_Caching_**. Caching is what makes Docker images so much more effective than VMDKs or vagrantfiles. It let us ship the deltas over some common base images rather than moving whole images around.

So what containers are about? They're about bundling up dependencies so we can ship code around in a repeatable, secure way.

### Building a Container

To talk about containers at the low level, we have to talk about three things. These things are **_namespaces_**, **_cgroups_**, and **_layered filesystems_**.

**Namespaces**

Namespaces provide the isolation needed to run multiple containers on one machine while giving each what appears like it's own environment.

The namespaces are:
* PID: isolated process tree
* MNT: mount table
* NET: network stack
* UTS: hostname, and domain name
* IPC: inter-process communication
* USER: uid mapping

**cgroups**

Fundamentally cgroups collect a set of processes or task ids together and apply limits to them. cgroups are exposed by the kernel as a special filesystem you can mount.

**Layered Filesystems**

At a basic level, layered filesystems amount to optimising the call to create a copy of the root filesystem for each container.


