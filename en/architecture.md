---
layout: default
title: Architecture
---
---

## Architecture

Posts about **architectural judgement**, design, patterns, decisions and real-world experience.

<ul>
{% assign posts_en = site.en_posts | where_exp: "post", "post.categories contains 'arquitectura'" %}
{% for post in posts_en %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>

---

[Back](/en)
