---
layout: default
title: Opinion
---
---

## Opinion

Technical reflections: trends, common mistakes and judgement.

<ul>
{% assign posts_en = site.en_posts | where_exp: "post", "post.categories contains 'opinion'" %}
{% for post in posts_en %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>

---

[Back](/en)
