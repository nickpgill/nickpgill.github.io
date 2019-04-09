---
title: 'A Rodgers-Saxl type conjecture for characters'
date: 2019-04-05
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


This is a follow-up to my <a href = "https://nickpgill.github.io/a-rodgers-saxl-theorem">previous post on a generalization of a theorem of Rodgers and Saxl</a>.

 
The story starts with a beautiful talk I heard by Martin Liebeck in which he outlined a result due to him, Shalev & Tiep:

**Theorem**: Let $f$ be a faithful irreducible of $Sym(n)$. Then $f^{*4n}$ (i.e.tensor product $4n$ times) contains every irreducible as a constituent.

This theorem can be interpreted as giving an upper bound on the diameter of the <a href = "https://en.wikipedia.org/wiki/McKay_graph">McKay graphs</a> of the symmetric group. I won't pursue this point of view, but it was within this context that the LST-team were working when they proved the theorem. I'm just stating the symmetric group version of their result -- they had more general statements for finite (almost) simple groups.

Notice that the LPT-bound is pretty much as good as one could hope for: if $f^{*c}$ is to contain every irreducible as a constituent (for some positive integer $c$), then one needs $(\dim(f))^c > \sum \dim(f_i)$ where the sum on the right hand side ranges over all irreducibles of $Sym(n)$. Now the theory of Frobenius-Schur indicators tells us that, since all complex reps of $Sym(n)$ are defined over the reals, then $\sum \dim(f_i)$ is equal to 1+ the number of elements of order $2$. Writing $I_n$ for this quantity, <a href = "https://projecteuclid.org/download/pdf_1/euclid.bams/1183553478">a result of Moser and Wyman</a> asserts that

$$I_n \sim\frac{1}{\sqrt{2}} n^{n/2} \exp(-n/2-1/4+\sqrt{n}).$$

Now, using the fact that there exists an irreducible of dimension $n-1$, we obtain that

$$ c>= \log (\sum \dim(f_i))/ \log(\dim(f) = \log (I_n+1)/ \log (\dim(n-1),$$

and we conclude that $c$ must be at least linear in $n$.

A well-known heuristic in finite group theory says that whenever one proves statements about (ordinary) characters, there is probably a statement about conjugacy classes lurking nearby (and vice versa). This heuristic sounds very wooly, but it can be made rigorous in very many different contexts, and in very many different ways.

Sure enough, there is a "conjugacy class version" of the theorem above -- it was proved by Liebeck and Shalev:

**Theorem**: There exists a constant $d$ such that if $C$ is a conjugacy class of $G$, a finite non-abelian simple group and if
$$k >= d \log|G|/ \log|C|,$$
then $C^k = G$.

Here we are taking products of conjugacy classes instead of tensor products of characters. But, again, the result is of the same kind -- it says that by taking a product $d$ times, then you will obtain all conjugacy classes, and $d$ is as small as one could possibly ask for, up to a multiplicative constant.

So, now, recall that in the previous post, I made the following conjecture: 

**Conjecture**: There exists a constant $c$ such that if $G$ is a finite simple group, and $S_1,\dots, S_k$ are  subsets of $G$ satisfying 
$\Pi_{i=1}^k|S_i|\geq|G|^c$, then there exist elements $g_1,\dots, g_k$ such that $G=(S_1)^{g_1}\cdots (S_k)^{g_k}$.

A special case of this conjecture occurs when our sets $S_1,\dots, S_k$ are conjugacy classes of $G$. In this case, we obtain the following statement:

**Conjecture**: There exists a constant $c$ such that if $G$ is a finite simple group, and $C_1,\dots, C_k$ are conjugacy classes of $G$ satisfying 
$\Pi_{i=1}^k|S_i|\geq|G|^c$, then $G=C_1\cdot C_2\cdots C_k$.

I don't know how to prove this theorem, but it's possible that it's not out of reach. The Rodgers--Saxl theorem that started all this off implies that the conjecture is true for the family $PSL(n,q)$ with the constant $c=12$. The theorem I proved with Pyber and Szabo implies it for groups of Lie type of bounded rank, so one is left with (some of) the classicals of unbounded rank, and the alternating groups.

But back to chacters. What would be the character--theoretic version of the previous two conjectures? The first has, if I recall correctly, been stated by the LST-team:

**Conjecture** There exists $C>0$ such that if $\chi$ is a non-trivial character of a finite simple group $G$ and if
$$c>C \log(\textrm{sum of dimensions of all irreducibles of }G)/ \log(\textrm{dimension of }\chi),$$ 
then $\chi^{*c}$ contains every irreducible of $G$ as a constituent.

The Rodgers-Saxl analogue of this would be:

**Conjecture** There exists $C>0$ such that if $\chi_1,..., \chi_t$ are non-trivial characters of a finite simple group $G$ and if

$$\dim(\chi_1)*\dim(\chi_2)*...*\dim(\chi_t) > (\textrm{sum of dimensions of all irreducibles of }G)^C$$

then $\chi_{1}*\cdots *\chi_{t}$ contains every irreducible of $G$ as a constituent.

Let's think about whether proving something like this might be possible just for the special case of $G=Sym(n)$ (OK, it's not simple, but almost).

First let me note that LST prove their result by showing that if $f$ is a faithful character of $Sym(n)$, then $f * f$ or $f *f *f *f$ always contains $\chi_{1,n-1}$, from which the result follows (one just calculates how many tensor products of $\chi_{1,n-1}$ one needs to obtain all irreducibles as constituents).

My go-to man for symmetric group rep theory is Mark Wildon. I dropped him an email with the following question.

**Question**: Does there exist a positive integer $N$ such that if $k> N$ and $f_1, ..., f_k$ are irreducible characters of Sym(n), then the tensor product of $f_1,..., f_k$ (in that order) contains an irreducible constituent isomorphic to $\chi_{1,n-1}$? 

Mark was immediately able to shed light. This question can be answered affirmatively. Indeed the following argument (which is Mark's) shows that something much stronger is true:

Let $k$ be a field and let $G$ be a finite group. On page 45 of Alperin, *Local Representation Theory*, it's shown that if $V$ is a faithful $k$G-module then there exists $N$ such that the $N$-fold tensor product $V \otimes ... \otimes V$ contains a free submodule. Since $V \otimes F \cong F \oplus ... \oplus F$ (with $\dim(V)$ summands) for any free $kG$-module $F$, it follows that any product with more factors (which may be arbitrary kG-modules) also contains a free submodule.

In the language of characters: if $\chi$ is the character of $V$, and $\psi$ is any other character, then any character $\chi^N \times \psi$ contains the regular character.

**Corollary**: there exists $M$ such that any product of any $M$ faithful irreducible characters of $Sym(n)$ contains the regular character as a constituent.

**Proof**: let $P$ be the number of faithful irreducible characters of $Sym(n)$. (So $P$ is 2 less than the number of partitions of $n$, unless $n = 4$.) For each faithful character, let $N(\chi)$ be the $N$ given by Alperin's result, and let $N = \max_\chi N(\chi)$. Take $M = NP$. Then in any product of $M$ faithful characters, some character appears at least $N$ times, and so the product contains the regular character. QED

That's a brilliant start, but it doesn't give us any information about what $M$ can be. The same argument as I gave at the top of this post implies that $M$ must be bounded below by some linear function in $n$: so, then, it it possible that one can choose $M$ to be linear in $n$?

Here's what Mark had to say on the subject:

> *Some experiments in MAGMA suggest rather intriguingly that one can take 
> $M = n - 1$ for $Sym(n)$. This bound is sharp for $n = 3,\dots, 10$.*

Is this enough evidence to make a conjecture? Hell, yeah!

**Conjecture**: Suppose that $f_1,\dots, f_{n-1}$ are faithful irreducible characters of $Sym(n)$. Then $f_1* \cdots* f_{n-1}$  contains the regular character as a constituent.

I think of this as a "Rodgers-Saxl type conjecture for characters". Now, the challenge is to turn it into a theorem....

