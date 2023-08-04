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
|$S_4| 3 | 3 or 4 |
|$A_5| 3 | 4 |
|Subfield | 3 | 4 |

Scott was able to extend this result to $PSL_2(q)$.

**Theorem** 
Let $G=PGL_2(q)$ with $q\geq 11$, and consider the action of $G$ on the cosets of a maximal subgroup $H$. The height and relational complexity of this action are as follows:

| Structure of $H$| Height | Relational Complexity|
|------|-------|------|
|PSL_2(q)| 1 | 2 |
|Borel| 3 | 4 |
|Dihedral | 3 | 3 |
|$S_4| 3 | 3 or 4 |
|Subfield | 3 | 4 |

The case when $q<11$ is easy to deal with using a computer. It is not included in the statement because there are some strange anomalies there, typically due to isomorphisms with other simple groups. For instance $PGL_2(5)$ acts on its $S_4$ subgroup with relational complexity equal to $2$ (you might say that this is due to the fact that $PGL_2(5)\cong S_5$).
 
Scott had a number of other very interesting results pertaining to the group $P\Gamma L_2(q)$ and, indeed, to actions which were transitive but not primitive. It seems possible that one day it might be possible to completely understand the height and relational complexity of all of the transitive actions of a group with socle equal to $PSL_2(q)$... 
