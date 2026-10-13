---
layout: default
title: Cloud
---
---

## Cloud

Arquitectura cloud, plataformas, gobierno, costes y operación.

<ul>
{% assign posts_es = site.es_posts
  | where_exp: "post", "post.categories contains 'cloud'"
  | reverse
%}
{% for post in posts_es %}
  {% if forloop.index > 5 %}{% break %}{% endif %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>

---

[Volver](/es)
