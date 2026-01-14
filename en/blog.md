---
layout: default
title: Blog
---
---

## Blog

- [Search...](/en/search)

<ul>
{% assign posts_en = site.en_posts | reverse %}
{% assign now_ts = site.time | date: "%s" %}

{% for post in posts_en %}
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
    <li>
      <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
      {% if post.excerpt %}
        <br />
        <small>{{ post.excerpt | strip_html }}</small>
      {% endif %}
    </li>
  {% endif %}
{% endfor %}
</ul>

---

[Back](/en)
