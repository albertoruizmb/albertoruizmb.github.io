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
{% assign now_ts = site.time | date: "%s" %}
{% assign posts_es = site.es_posts | reverse %}
{% for post in posts_es limit:5 %}
  {% assign post_visible = true %}
  {% if site.config.future != true %}
    {% assign post_ts = post.date | date: "%s" %}
      {% if post_ts > now_ts %}
        {% assign post_visible = false %}
      {% endif %}
  {% endif %}
  {% if post_visible %}
    <li>
      <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
