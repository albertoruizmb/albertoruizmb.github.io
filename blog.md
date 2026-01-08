---
layout: default
title: Blog
---

# 📝 Blog

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">
        {{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}
      </a>
      {% if post.excerpt %}
        <br />
        <small>{{ post.excerpt | strip_html }}</small>
      {% endif %}
    </li>
  {% endfor %}
</ul>
