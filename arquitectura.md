---
layout: default
title: Arquitectura
---

# Arquitectura

Posts sobre **criterio arquitectónico**, diseño,
patrones, decisiones y experiencia real.

<ul>
{% for post in site.categories.arquitectura %}
  <li>
    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
  </li>
{% endfor %}
</ul>
