---
layout: default
title: Home
---
---

## Explore

- [Blog](/en/blog)
- [Architecture](/en/architecture)
- [Cloud](/en/cloud)
- [AI](/en/ai)
- [Opinion](/en/opinion)
- [About](/en/about)

  or

- [Search...](/en/search)
  
---

## Latest articles

<ul>
{% assign posts_en = site.en_posts | sort: "date" | reverse %}
{% assign now_ts = site.time | date: "%s" %}
{% assign shown = 0 %}

{% for post in posts_en %}
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

  <li>
    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>
