---
layout: default
title: Inicio
---

# Arquitectura de soluciones, Cloud e Inteligencia Artificial

Este sitio es un **cuaderno técnico y de criterio**.

---

## Explora

- [Blog](/blog)
- [Arquitectura](/arquitectura)
- [Cloud](/cloud)
- [IA](/ia)
- [Opinión](/opinion)

---

## Últimos artículos

<ul>
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
  </li>
{% endfor %}
</ul>
