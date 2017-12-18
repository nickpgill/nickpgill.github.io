---
id: 112
title: Background literature on growth and expanders
date: 2014-03-11T20:53:26+00:00
author: nickgill
layout: post
guid: http://boolesrings.org/nickgill/?p=112
permalink: /2014/03/11/background-literature-on-growth-and-expanders/
categories:
  - Teaching
---
The material in here is fairly comprehensive. Comments in <font color="#FF0000">red</font> describe the sources that I suggest you start with. [Back to main seminars page](australia.html).

Background on **expanders**:

  * Hoory, Linial, Wigderson, [Expander graphs and their applications](http://www.cs.huji.ac.il/~nati/PAPERS/expander_survey.pdf). 120 pages. 
  * Linial, Wigderson, [Lecture notes](http://www.math.ias.edu/~boaz/ExpanderCourse/). I belive the previous link is a more up-to-date version of these notes. 
  * Nielsen, [Notes on expander graphs](http://www.qinfo.org/people/nielsen/blog/archive/notes/expander_graphs.pdf). Also in [blog format](http://michaelnielsen.org/blog/expander-graphs-i-introduction/). 
  * Davidoff, Sarnak, Valette, _Elementary Number Theory, Group Theory, and Ramanujan Graphs_. <font color="#FF0000">The Overview and Chapter 1 of this book give a good grounding in the basics of expanders.</font> </ul> </p> 

On the **sum-product** phenomenon. The basic text is Tao and Vu &#8220;Additive Combinatorics&#8221;. Here are a few other links:
                
  * Green, [Sum-product over F_p](http://arxiv.org/abs/0904.2075). This is a survey article. 
  * Green, [Sum-product over the complexes](http://www.dpmms.cam.ac.uk/~bjg23/AddCombinatorics/notes7.pdf). This focusses on Solymosi&#8217;s result. 
  * Bourgain, Katz, Tao, [Sum-product over F_p](http://arxiv.org/abs/math/0301343). This is the first proof of sum-product over F_p. However it is difficult so I wouldn&#8217;t recommend it as a first read. Plus it is not completely general (it doesn&#8217;t work for very small sets). On the plus side it very clearly demonstrates the connection between sum-product phenomena and Szemeredi-Trotter theorems. So it&#8217;s worth looking at for this reason. 
  * Helfgott, [Growth in SL_3](http://arxiv.org/abs/0807.2027). Section 3 of this paper is devoted to a generalization of _the idea of_ the sum-product theorem. It is based on the Glibichuk-Konyagin sum-product theorem over F_p (which works for small sets so improves the work of BKT mentioned above), but is couched in much more general terms; the statement involves one group acting upon another. <font color="#FF0000">This is the key statement of the sum-product phenomenon for our purposes; the exposition is excellent.</font> 
  * Tao and Vu, _Additive Combinatorics_. <font color="#FF0000">To get a taste of how incidence theorems are related to the sum-product phenomenon read Sections 8.1-8.3.</font> </ul> 

On **growth in non-abelian groups**:
                                    
  * Helfgott, [Growth in SL_3](http://arxiv.org/abs/0807.2027). This paper is central. It includes a discussion of key ideas including escape, non-singularity, sticking subgroups in different directions, bounds on torus intersection, bounds on conjugacy classes, use of incidence theorems etc. The statement of Theorem 1.1 is &#8220;ideal&#8221; (as this is currently understood); it reduces questions of growth to the nilpotent setting. <font color="#FF0000">Sections 4 and 5 of this paper are particularly vital. Subsequent sections of the paper use incidence theorems; we will be able to go to the full result more directly.</font>
  * Breuillard, Green, Tao, [Growth in Chevalley groups](http://arxiv.org/abs/1001.4570). This is an announcement of the general result which focusses on the pivot argument. <font color="#FF0000">A full proof of this result does not yet exist in the literature. So for now the best exposition of the result is <a href="http://terrytao.wordpress.com/2010/01/27/linear-approximate-groups/">this blog entry of Tao</a> (see also the subsequent discussion, especially the simplifications described by Helfgott).</font> 
 * Pyber, Szabo, [Growth in groups of Lie type](http://arxiv.org/abs/1001.4556). The methods in this paper are similar to those of the previous link. However the statement is more general (it holds for twisted groups). In addition examples are given that justify the dependency of the constant epsilon on the rank. 
 * Larsen, Pink, [Subgroups of algebraic groups](http://www.math.ethz.ch/~pink/ftp/LP5.pdf). This paper contains material that was central to adapting Helfgott&#8217;s work to the general setting (a la the previous two points). </ul> </p> 

 **Expanders from groups**: 
                                                    
  * Bourgain, Gamburd, [Expanders in SL_2(p)](http://annals.princeton.edu/annals/2008/167-2/p07.xhtml). This uses Helfgott&#8217;s result on growth in SL_2(p) to generate expanders. These two clever people have a couple of other papers that are also of interest: 
   * J. Bourgain and A. Gamburd, Expansion and random walks in SLd (Z/pn Z):I, J. Eur. Math. Soc. 10 (2008), 987-1011.
  * J. Bourgain and A. Gamburd, SLd (Z/pn Z):II, preprint 
   * Varju, [Expansion in SL_d](http://arxiv.org/abs/1001.3664) This generalizes some of the work of Bourgain and Gamburd. 
   * Kassabov, Nikolov, Lubotzky, [Finite simple groups as expanders](http://arxiv.org/abs/math/0510562). An entirely different set of techniques. 
   * Kassabov, [Symmetric groups as expanders](http://arxiv.org/abs/math/0505624). Another entirely different set of techniques.

 **Sieving**:
  * Bourgain, Gamburd, Sarnak, [Affine linear sieve, expanders, and sum-product](www.math.princeton.edu/sarnak/sespM8.pdf). Using expansion results to _sieve_. The latter activity being something number theorists are particularly fond of. 
  * Green, [Linear approximate groups and connections](http://arxiv.org/abs/0911.3354). A survey article which, amongst other things, discusses the the work of BGS on the sieve. </ul> 
                     

  **Property T**: The first construction of expander graphs was by Margulis and used property T, a representation theoretic property that holds for certain discrete groups (SL_d(Z) with d>2 for instance).
  * [Wikipedia](http://en.wikipedia.org/wiki/Kazhdan's_property_(T)) gives a definition of Property T. 
  * A. Lubotzky. _Discrete groups, expanding graphs and invariant measures_, volume 125 of Progress in Mathematics. This book outlines (amongst other things) the connection between Property T and expansion properties. </ul>
