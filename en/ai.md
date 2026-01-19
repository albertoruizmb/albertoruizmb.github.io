---
layout: default
title: AI
---
---

## Artificial Intelligence

AI applied to products and architecture: RAG, agents, search, evaluation and real technical decisions.

<ul>
{% assign posts_en = site.en_posts
 | where_exp: "post", "post.categories contains 'ai'"
 | reverse
%}
{% assign now_ts = site.time | date: "%s" %}
{% assign shown = 0 %}

{% for post in posts_en %}
  {% if shown >= 5 %}{% break %}{% endif %}

  {% assign post_ts = post.date | date: "%s" %}
  {% assign show_post = true %}

  {% comment %}
  When show_show_future:false (site.show_future is falsy), hide posts dated in the future.
  When show_show_future:true, show them.
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

---

[Back](/en)
