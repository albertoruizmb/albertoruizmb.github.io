---
layout: default
title: Engineering
---

## Engineering

Posts about **hands-on engineering**: implementation, tooling, DevOps, cloud infrastructure, and system operations.

<ul>
{% assign posts_en = site.en_posts
   | where_exp: "post","post.categories contains 'engineering'"
   | reverse
%}
{% for post in posts_en %}
  {% if forloop.index > 5 %}{% break %}{% endif %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>

---

[Back](/en)
