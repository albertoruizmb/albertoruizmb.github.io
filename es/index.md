---
layout: default
title: Inicio
---
---

## Explora

- [Blog](/es/blog)
- [Arquitectura](/es/arquitectura)
- [Cloud](/es/cloud)
- [IA](/es/ia)
- [Opinión](/es/opinion)
- [Sobre mí](/es/about)
  
  o

- [Buscar...](/es/search)
  
---

## Últimos artículos

<ul>
{% assign posts_es = site.es_posts | reverse %}
{% for post in posts_es limit:5 %}
  <li>
    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
  </li>
{% endfor %}
</ul>
