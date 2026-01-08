---
layout: default
title: Opinión
---

# Opinión

Reflexiones técnicas: tendencias, errores comunes y criterio.

<ul>
{% for post in site.categories.opinion %}
  <li>
    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
  </li>
{% endfor %}
</ul>
