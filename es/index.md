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
{% assign posts_es = site.es_posts | sort: "date" | reverse %}
{% assign now_ts = site.time | date: "%s" %}
{% assign shown = 0 %}

{% for post in posts_es %}
  {% if shown >= 5 %}{% break %}{% endif %}

  {% assign post_ts = post.date | date: "%s" %}
  {% assign show_post = true %}

  {% comment %}
  When future:false (site.show_future is falsy), hide posts dated in the future.
  When future:true, show them.
  {% endcomment %}
  {% unless site.show_future %}
    {% if post_ts > now_ts %}
      {% assign show_post = false %}
    {% endif %}
  {% endunless %}

  {% if show_post %}
    {% assign shown = shown | plus: 1 %}
    <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
