---
layout: default
title: IA
---

# Inteligencia Artificial

IA aplicada a producto y arquitectura: RAG, agentes, búsqueda,
evaluación y decisiones técnicas reales.

<ul>
{% for post in site.categories.ia %}
  <li>
    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
  </li>
{% endfor %}
</ul>
