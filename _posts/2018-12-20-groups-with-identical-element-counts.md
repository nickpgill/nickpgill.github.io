---
title: 'Groups with identical element counts'
date: 2018-12-20
author: nickgill
layout: post
categories:
  - research
---

Some time ago I heard an interesting story about a remarkable mathematical fact. I can't locate the source right now, so here is the story as I understand it.

If one consults the *Atlas of Finite Groups* and looks at the maximal subgroups of the Mathieu group M_23, one will observe that it has two rather different maximal subgroups, both of which have order 40320. The first is of form PSL_3(4):2; the second has form 2^4:A_7.

It's important to note how **very different** these two groups are, despite their shared order: in particular, they have different non-abelian composition factors.

John G. Thompson investigated these groups a little further and observed the following remarkable fact: they have **exactly the same element count, by order**. By which I mean that they have the same number of elements of order 2; the same number of elements of order 3; and so on. (How he realised this, I really don't know -- but I guess geniuses tend to realise more things than the rest of us...)

Thompson's observation led him to make the following conjecture: *Suppose that two groups, G and H, have exactly the same element count, by order. Suppose, moreover, that G is solvable. Then H is solvable.*

This conjecture is saying, effectively, that it is, in principle, possible to recognition whether or not a group is solvable simply by knowing the number of elements in the group of each different order. Note, that I say "in principle", as it is not proposing an algorithm for recognising solvability in this way -- that is a harder question.

By way of comparison, it is easy to see that there is an algorithm to recognise *nilpotency* by knowing the number of elements in the group of each different order -- one simply tests whether, for each prime *p* dividing the order of the group, the number of elements of order a power of *p* is equal to the highest power of *p* dividing the order of the group. If this is true for all *p*, then the group has a unique Sylow *p*-subgroup for each prime *p* dividing its order, and this property characterises nilpotency.

As I understand it, Thompson's conjecture has been proved... but I'm not sure by whom. If anyone could point me to a source, I'd like to give appropriate credit! I don't know if an algorithm for recognising solvability in this way has ever been written down. I'm also unable to point to the place where Thompson first made the observation about these subgroups of M_23 and where he first stated this conjecture; again any help with sources would be appreciated.

