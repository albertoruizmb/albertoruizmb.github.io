---
layout: default
title: Cloud
---
---

## Cloud

Cloud architecture, platforms, governance, costs and operations.

<ul>
{% assign posts_en = site.en_posts
 | where_exp: "post", "post.categories contains 'cloud'"
 | reverse
%}
{% for post in posts_en %}
  {% if forloop.index > 5 %}{% break %}{% endif %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>

---

[Back](/en)
