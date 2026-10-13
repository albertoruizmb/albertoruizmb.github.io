---
layout: default
title: Architecture
---
---

## Architecture

Posts about **architectural judgement**, design, patterns, decisions and experiences.

<ul>
{% assign posts_en = site.en_posts
 | where_exp: "post", "post.categories contains 'architecture'"
 | reverse
%}
{% for post in posts_en %}
  {% if forloop.index > 5 %}{% break %}{% endif %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a></li>
{% endfor %}
</ul>

---

[Back](/en)
