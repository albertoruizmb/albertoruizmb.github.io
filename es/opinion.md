---
layout: default
title: Opinión
---
---

## Opinión

Reflexiones técnicas: tendencias, errores comunes y criterio.

<ul>
{% assign posts_es = site.es_posts | where_exp: "post", "post.categories contains 'opinion'" %}
{% for post in posts_es %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>

---

[Volver](/es)
