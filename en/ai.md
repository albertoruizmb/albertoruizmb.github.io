---
layout: default
title: AI
---
---

## Artificial Intelligence

AI applied to products and architecture: RAG, agents, search,  
evaluation and real technical decisions.

<ul>
{% assign posts_en = site.en_posts | where_exp: "post", "post.categories contains 'ia'" %}
{% for post in posts_en %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>

---

[Back](/en)
