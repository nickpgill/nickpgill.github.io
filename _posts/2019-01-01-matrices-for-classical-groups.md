---
title: 'Matrices for classical groups'
date: 2019-01-01
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

A finite classical groups is best thought of as a group of linear operators on some vector space defined over a finite field. Which means, of course, that I can take a basis for this vector space and then represent the elements of my group as matrices.

However, I have almost **never** seen anyone do this in the literature. "Taking a basis" is thought of as a rather crude thing to do when doing linear algebra -- one generally tries to write general arguments that do not refer to any particular basis. However, speaking for myself, when I'm trying to work out what the hell is going on inside a finite matrix group, I often end up trying to write down individual elements as matrices... And then hiding all this when it comes to writing up the paper!


This means that I have never publicly written down any of these calculations, despite using many of them over and over again. So this page is designed to be a little repository for me to note down interesting observations about such calculations... And perhaps they'll be useful for someone else some time...

## Working with $\Omega_4^+(q)$

This family of groups has some weird behaviour, especially when $q$ is even. For instance, let us write $\mathcal{U}_m$ for the set of maximal totally singular subspaces. If $q$ is even and $q>2$, then $\Omega_4^+(q)$ is defined to be the group inducing odd permutations on $\mathcal{U}_m$.... If $q=2$, however, the group so defined is **not** $\Omega_4^+(2)$, and one needs to define it in a completely different way (see Kleidman and Liebeck, p.31).

# Finding some elements in $\Omega_4^+(q)$.

Let $(e_1,f_1)$ and $(e_2, f_2)$ be hyperbolic pairs, and let $\mathcal{B}=\{e_1, e_2, f_2, f_1\}$ maintaining order. Then, one can calculate directly that $O_4^+(q)$ contains elements of the form

$$
\begin{pmatrix}
1 & a & b & ab \\ & 1 & & b \\ & & 1 & a \\ & & & 1
\end{pmatrix};
$$

these elements form a subgroup $S$ of size $q^2$; indeed, for $q$ odd, they form a Sylow $p$-subgroup of $O_4^+(q)$. 

When $q$ is odd, one can look at orders to see directly that $S$ is actually a subgroup of $\Omega_4^+(q)$. Indeed, the same is true when $q$ is even, but to see this it is easiest to observe that $S$ is normalized by the element

$$
g=\begin{pmatrix}
1 & & & \\ &  & 1 & \\ & 1 & & \\ & & & 1
\end{pmatrix}.
$$

This element clearly takes one element $U=\langle e_1, e_2\rangle \in \mathcal{U}_2$ to another element $W=\langle e_1, f_2\rangle\in \mathcal{U}_2$. What is more $U\cap W$ has codimension $1$ in both $U$ and $W$. This allows us to conclude that $g\in SO_4^+(q)\setminus \Omega_4^+(q)$ (see Kleidman and Liebeck, p. 30). Now order considerations imply that $S$ must be a subgroup of $\Omega_4^+(q)$.

# Finding all elements in $\Omega_4^+(q)$.

Let $R$ be the set of elements whose transpose is in $S$. One sees immediately that both $R$ and $S$ lie in $\Omega_4^+(q)$ and hence so does $\langle R,S\rangle$.

If one sets $a$ to equal $0$, while $b$ ranges across $\mathbb{F}_q$, in both $R$ and $S$, then one immediately observes a copy of $SL_2(q)$ in $\Omega_4^+(q)$. The same is true setting $b$ to equal $0$. Since these two copies effectively "avoid interaction" one immediately obtains a copy of $SL_2(q)\circ SL_2(q)$ inside $\Omega_4^+(q)$. (The central product is due to the fact that both copies of $SL_2(q)$ share $-I$ as an element.)

Now one can observe that $\Omega_4^+(q)$ also contains the element

$$
\begin{pmatrix}
& & & 1\\ & & 1 & \\ & 1 & & \\ 1 & & & 
\end{pmatrix}
$$

Now order considerations allow us to conclude that $\Omega_4^+(q)\cong (SL_2(q)\circ SL_2(q)):2$, and we have written down all elements of the group.

## $Sp_{n_2}(2^a) < \Omega_n^+(2^a)$

When $q$ is even, $\Omega_n^+(q)$ has a maximal subgroup -- the stabilizer of a non-degenerate $1$-space -- isomorphic to $Sp_{n-2}(q)$. I will write down the element of this subgroup for $n=4$; the general case follows similarly.

First, we adjust our basis from before to be $\mathcal{C}=\{z_1, x_1, x_2, y_2\}$ where $z_1=x_1+y_1$. 

With respect to this basis, our quadratic form becomes

$$Q(a,b,c,d) = ab+a^2+cd$$

and we see that $z_1$ is non-singular. Now simply observe that the following elements stabilize $z_1$:

$$
\begin{pmatrix}
1 & & & c \\ & 1 & & \\ & c & 1 & c^2 \\ & & & 1
\end{pmatrix}.
$$

Doing the "transpose trick" like before, one immediately obtains a copy of $SL_2(q)$ in this stabilizer and (using the perfectness of $SL_2(q)$ for $q>3$ if necessary), one obtains that the stabilizer of $z_1$ in $\Omega_4^+(q)$ is isomorphic to $SL_2(q)\cont Sp_{2}(q)$.

One can do this more generally for $n>2$ -- one simply has to exhibit the root groups of $\Sp_{n-2}(q)$ inside the stabilizer of $z_1$ in $\Omega_4^+(q)$, and these all take the form given above.
