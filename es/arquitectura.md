---
layout: default
title: Arquitectura
---
---

## Arquitectura

Posts sobre **criterio arquitectónico**, diseño,
patrones, decisiones y experiencia real.

<ul>
{% assign posts_es = site.es_posts | where_exp: "post", "post.categories contains 'arquitectura'" %}
{% for post in posts_es %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>

---

[Volver](/es)