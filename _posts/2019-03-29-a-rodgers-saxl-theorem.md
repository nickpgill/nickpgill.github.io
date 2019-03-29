---
title: 'A Rodgers-Saxl type theorem'
date: 2019-03-29
author: nickgill
layout: post
categories:
  - research
---

<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        inlineMath: [['$','$']]
      }
    });
  </script>
  <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

Pyber, Szabó and I have recently completed a paper entitled *A generalization of a theorem of Rodgers and Saxl for simple groups of bounded rank*. A copy of the paper can be found <a href = "https://arxiv.org/abs/1901.09255">on the arXiv</a>.

Our result was inspired by a result of Rodgers and Saxl which appeared in *Communications of Algebra* in 2003:

**Theorem**: Suppose that $\mathcal{C}_1,\dots, \mathcal{C}_k$ are conjugacy classes in $SL_n(q)$ such that $\Pi_{i=1}^k |\mathcal{C}_i|\geq |SL_n(q)|^{12}$. Then $\prod_{i=1}^k\mathcal{C}_i = SL_n(q)$.

Our result has a similar flavour.

**Theorem**: Let $G=G_r(q)$ be a finite simple group of Lie type of rank $r$. There exists $c=f(r)$ such that if $S_1,\dots, S_k$ are subsets of $G$ satisfying 
$\Pi_{i=1}^k|S_i|\geq|G|^c$, then there exist elements $g_1,\dots, g_k$ such that $G=(S_1)^{g_1}\cdots (S_k)^{g_k}$.

Our theorem differs to that of Rodgers and Saxl in three important respects, two good, one not so good: First, our result pertains to all finite simple groups $G$ of Lie type. Second, our result does not just pertain to conjugacy classes, but to subsets of the group, provided we are free to take conjugates.

The third difference is a weak point: our result replaces the constant ``12''  in their thereom with an unspecified constant that depends on the rank of the group $G$. We conjecture that we should be able to do better, and not just for finite simple groups of Lie type, but for alternating groups as well:

**Conjecture**: Let $G$ be a finite simple group. There exists $c$ such that if $S_1,\dots, S_k$ are  subsets of $G$ satisfying 
$\Pi_{i=1}^k|S_i|\geq|G|^c$, then there exist elements $g_1,\dots, g_k$ such that $G=(S_1)^{g_1}\cdots (S_k)^{g_k}$.

This conjecture seems hard! Our theorem has a rank-dependency because it makes use of the "Product Theorem" which was proved, independently by Pyber-Szabó and by Breuillard-Green-Tao. To prove the conjecture we would need to replace the Product Theorem in our argument with, um, something else... But what?!

One last remark: there is a fourth sense in which our theorem differs to that of Rodgers and Saxl -- we are interested in finite simple groups, while they consider $SL_n(q)$ which is, in general, only quasi-simple. 

It turns out that the distinction here is not significant: It is not hard to show that our theorem is true if and only if the analogous statement is true for quasi-simple groups... And the same is true of the conjecture stated above. So the stated conjecture would be a generalization of both our result and that of Rodgers and Saxl, albeit we don't specify the value of $c$ as Rodgers and Saxl did.

Let me finish this post by thanking my two co-authors, Laci and Bandi. I have worked with these two guys on a previous paper, and they are both brilliant and generous with their many ideas. I hope to have the privilege of working with them more in the future.


