---
layout: default
title: IA
---
---

## Inteligencia Artificial

IA aplicada a producto y arquitectura: RAG, agentes, búsqueda,
evaluación y decisiones técnicas reales.

<ul>
{% assign posts_es = site.es_posts | where_exp: "post", "post.categories contains 'ia'" %}
{% for post in posts_es %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>

---

[Volver](/es)