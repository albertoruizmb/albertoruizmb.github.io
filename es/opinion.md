---
layout: default
title: Opinión
---
---

## Opinión

Reflexiones técnicas: tendencias, errores comunes y criterio.

<ul>
{% assign posts_es = site.es_posts
  | where_exp: "post", "post.categories contains 'opinion'"
  | reverse
%}
{% assign now_ts = site.time | date: "%s" %}
{% assign shown = 0 %}

{% for post in posts_es %}
  {% if shown >= 5 %}{% break %}{% endif %}

  {% assign post_ts = post.date | date: "%s" %}
  {% assign show_post = true %}

  {% comment %}
  When future:false (site.future is falsy), hide posts dated in the future.
  When future:true, show them.
  {% endcomment %}
  {% unless site.future %}
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

---

[Volver](/es)
