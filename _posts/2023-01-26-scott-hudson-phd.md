---
title: 'Congratulations to Scott Hudson'
date: 2023-01-26
author: nickgill
layout: post
categories:
  - supervision
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

Congratulations to Scott Hudson who has successfully defended his PhD thesis entitled *Calculating the height and relational complexity of the primitive actions of $PSL_2(q)$ and $PGL_2(q)$*. I supervised Scott with Pablo Spiga from Milan; Scott's PhD examiners were Gareth Tracey and Derek Holt, both of Warwick University.

Scott's main result gives the first complete computation of the relational complexity of the primitive actions of an infinite family of finite simple groups. The family in the question are the groups $PSL_2(q)$. Thanks to a result of Martin Liebeck and I, we know that the relational complexity of the primitive actions of these groups must be bounded above by an absolute constant, however this bound is, in general, not likely to be close to the true value.

Indeed, for the family $PSL_2(q)$, Martin and I proved that the relational complexity is at most 175, whereas Scott's main result implies that it cannot exceed 4! His main result is this:

**Theorem** 
Let $G=PSL_2(q)$ with $q\geq 11$, and consider the action of $G$ on the cosets of a maximal subgroup $H$. The height and relational complexity of this action are as follows:

| Structure of $H$| Height | Relational Complexity|
|------|-------|------|
|Borel| 3 | 4 |
|Dihedral | 3 | 3 |
|$A_4$| 2 | 3 |
|$S_4$| 3 | 3 or 4 |
|$A_5$| 3 | 4 |
|Subfield | 3 | 4 |

Scott was able to extend this result to $PGL_2(q)$.

**Theorem** 
Let $G=PGL_2(q)$ with $q\geq 11$, and consider the action of $G$ on the cosets of a maximal subgroup $H$. The height and relational complexity of this action are as follows:

| Structure of $H$| Height | Relational Complexity|
|------|-------|------|
|PSL_2(q)| 1 | 2 |
|Borel| 3 | 4 |
|Dihedral | 3 | 3 |
|$S_4$| 3 | 3 or 4 |
|Subfield | 3 | 4 |

The case when $q<11$ is easy to deal with using a computer. It is not included in the statement because there are some strange anomalies there, typically due to isomorphisms with other simple groups. For instance $PGL_2(5)$ acts on the cosets of a maximal $S_4$ subgroup with relational complexity equal to $2$ (you might say that this is due to the fact that $PGL_2(5)\cong S_5$).
 
## Extensions

Given Scott's beautiful results for the relational complexity of the primitive actions of $PSL_2(q)$ and $PGL_2(q)$, one might ask to what extent these can be extended. Two natural questions occur to me:
 - Is there an absolute upper bound for the relational complexity of the primitive actions of all almost simple groups with socle $PSL_2(q)$?
 - Is there an absolute upper bound for the relational complexity of the **transitive** actions of the simple group $PSL_2(q)$

A nice example shows that the answer to the second question is **No**. To explain it, a little notation: for a group $G$ acting on a set $\Omega$, we write $RC(G,\Omega)$ for the relational complexity of the action. For a subgroup $H$ in $G$, we write $(G:H)$ for the set of right cosets of $H$ in $G$, so $RC(G,(G:H))$ is the relational complexity of the group $G$ acting naturally on the set of right cosets of $H$ in $G$.

Now let $G=SL_2(2^a)$, let $B$ be a Borel subgroup of $G$ and let $U=O_2(B)$. We know that $RC(G,(G:U))=2$ -- I mention this just because it contrasts with what is to follow... Now define $H$ to be an index 2-subgroup of $U$. We will see that if $a\geq 2$, then $RC(G, (G:H))=a+1$.

I will use a bunch of standard results about relational complexity, all of which can be found in Chapter 1 of (this book)[https://arxiv.org/abs/2106.05154]. One particularly useful result is that if $H < B < G$, then we have $RC(G:(G,H))\geq RC(B, (B:H))$. In what follows we write $\Omega$ for $(G:H)$ and $\Gamma$ for $(B:H)$. so we have $RC(G,\Omega)\geq RC(B,\Gamma)$. First, a lemma that will allow us to work inside $B$.

**Lemma 1**. Either $RC(G,\Omega)=RC(B,\Gamma)$ or else $RC(B,\Gamma)=2$ and $RC(G,\Omega)=3$.

**Proof** Assume, first that $RC(B,\Gamma)\geq 3$. If the result is false, then, proceeding for a contradiction, we can find tuples $I=(I_1,\dots, I_{k+1})$ and $J=(I_1,\dots,I_k, J_{k+1})$ with entries in $(G:H)$ that are $k$-equivalent in $G$ but not $(k+1)$-equivalent in $G$ and $k\geq RC(B,\Gamma)$. 
 
 We can assume that $I_1$ is stabilized by $H$ and we must have a $j\in\{1,\dots, k\}$ such that $I_j$ stabilized by some conjugate of $H$ that does not lie in $B$ (otherwise we would have $I_1,\dots, I_{k+1}$ all in $B$ which would mean that $J_{k+1}\subset B$ and this is a contradiction. We might as well take $j=2$.
 
But now, distinct Sylow $p$-subgroups of $G$ intersect trivially, hence the pointwise stabilizer of $\{I_1, I_2\}$ is trivial. Now the fact that $I$ and $J$ are $k$-equivalent with $k\geq 3$ implies that $I_{k+1}=J_{k+1}$, a contradiction.
 
We are left with the case when $RC(B,\Gamma)=2$. The same argument works here since assuming the result is false allows us to take $k\geq 3$. **QED**


 We can describe the action of $B$ on $(B:H)$ in a particularly easy way. We think of $U$ as an $a$-dimensional vector space over $\mathbb{F}_2$. Notice that $H$ is a hyperplane in $U$ and notice that there are $q-1$ of these. We let $\Delta$ be the set of all **affine hyperplanes** -- these are the usual linear hyperplanes as well as their translates. Since we are working over $\mathbb{F}_2$, each hyperplane has 2 cosets (itself and one other) thus $|\Delta|=2q$. It is easy enough to see that $B$ acts transitively on $\Delta$ with stabilizers conjugates of $H$. Thus the action of $B$ on $\Gamma$ is isomorphic to the action of $B$ on $\Delta$.

For the action of $G$ on $\Omega$ we write $I(G,\Omega)$ for the maximum length of an irredundant base; we write $B(G,\Omega)$ for the maximum size of a minimal base. The definitions imply that $B(G,\Omega)\leq I(G,\Omega)$.


**Lemma 2**. $B(B,\Delta)=B(G,\Omega)=\Height(G,\Omega)=I(G,\Omega)=a$.
 
 **Proof**. Since $|H|=2^{a-1}$, the longest possible stabilizer chain is of length $a$. Thus $I(G,\Omega)\leq a$. Since $B(B,\Delta)=B(B,\Gamma)$ and, clearly, $B(B,\Gamma)\leq B(G,\Omega)$ it is sufficient to show that $B(B,\Delta)\geq a$. To do this we let $e_1,\dots, e_a$ be the usual vectors in the natural basis of $U$ (so $e_i$ has $0$'s in all places except the $i$-th where the entry is $1$). Now, for $i=1,\dots, a$, define
\[
 I_i:=\langle e_1,\dots, e_{i-1}, e_{i+1},\dots, e_a\rangle.
\]
Here $I_1,\dots, I_a$ are hyperplanes in $U$ hence are elements of $\Delta$. 
It is clear that $\{I_1,\dots, I_a\}$ is an independent set (intersections just decrease by a dimension each time) and the stabilizer is trivial. Thus $\{I_1,\dots, I_a\}$ is a minimal base of size $a$ and $B(B,\Delta)=a$ as required.**QED**

 
**Lemma 3**. If $a \geq 2$, then $RC(G,\Omega)=a+1$.

**Proof**. Lemma 1 implies that it is sufficient to prove that $RC(B,\Gamma)=a+1$. Since $B(B,\Delta)=a$ we know that $B(B,\Gamma)=a$ and so $RC(B,\Gamma)\leq a+1$. 

Thus, to show that $RC(B,\Gamma)=a+1$ we need to find $I=(I_1,\dots, I_{a+1})$ and $J=(I_1,\dots, I_a, J_{a+1})$ such that $I\stb{a} J$ and $I\nstb{a+1} J$.

To do this take $I_1,\dots, I_a$ as above. Take $I_{a+1}$ to be the hyperplane whose vectors contain an even number of $1$'s; let $J_{a+1}$ be the other coset of this hyperplane, so $J_{a+1}$ is the affine hyperplane whose vectors contain an odd number of $1$'s.

The intersection of $I_1,\dots, I_a$ is trival. Since $I_{a+1}\neq J_{a+1}$ it is therefore clear that $I$ is not $(a+1)$-equivalent to $J$.

On the other hand, for $i=1,\dots, a$, the intersection of $I_1,\dots, I_{i-1}, I_{i+1},\dots, I_a$ is $\langle e_i\rangle$. But note that $I_{a+1}+e_i=J_{i+1}$ (since $e_i$ has an odd number of 1's). Thus $I$ is $a$-equivalent to $J$. We are done. **QED**
