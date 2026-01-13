---
layout: default
title: Blog
---
---

## Blog

- [Search...](/en/search)

<ul>
{% assign posts_en = site.en_posts | reverse %}
{% for post in posts_en %}
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

[Back](/en)
