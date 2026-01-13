---
layout: default
title: Blog
---
---

## Blog

- [Buscar...](/es/search)

<ul>
{% assign posts_es = site.es_posts | reverse %}
{% for post in posts_es %}
  <li>
    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
    {% if post.excerpt %}
      <br />
      <small>{{ post.excerpt | strip_html }}</small>
    {% endif %}
  </li>
{% endfor %}
</ul>

---

[Volver](/es)
