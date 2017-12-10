---
id: 154
title: Blog
date: 2014-03-17T18:48:20+00:00
author: nickgill
layout: page
guid: http://boolesrings.org/nickgill/?page_id=154
---

---

{% for post in site.posts %}

[{{ post.title }}]({{ post.url }})

Posted on {{ post.date | date: "%b %-d, %Y" }}

---

{% endfor %}

subscribe via [rss]({{ site.baseurl }}/feed.xml)
