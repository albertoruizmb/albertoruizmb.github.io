---
layout: default
title: Inicio
---
---

## Explora

- [Blog](/es/blog)
- [Arquitectura](/es/architecture)
- [Cloud](/es/cloud)
- [IA](/es/ai)
- [Opinión](/es/opinion)
- [Engineering](/es/engineering)
- [Sobre mí](/es/about)
  
  o

- [Buscar...](/es/search)
  
---

## Últimos artículos

<ul>
{% assign posts_es = site.es_posts | sort: "date" | reverse %}

{% for post in posts_es %}
  {% if forloop.index > 5 %}{% break %}{% endif %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>
