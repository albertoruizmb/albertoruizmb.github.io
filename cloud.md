---
layout: default
title: Cloud
---

# Cloud

Arquitectura cloud, plataformas, gobierno, costes y operación.

<ul>
{% for post in site.categories.cloud %}
  <li>
    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
  </li>
{% endfor %}
</ul>
