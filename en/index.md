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
{% assign posts_en = site.en_posts | reverse %}
{% for post in posts_en limit:5 %}
  <li>
    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
  </li>
{% endfor %}
</ul>
