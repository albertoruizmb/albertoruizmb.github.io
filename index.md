---
layout: default
title: Inicio
---

# Alberto Ruiz

Arquitectura de soluciones, **Cloud** e **Inteligencia Artificial**.

Este sitio es un **cuaderno técnico y de criterio**:  
decisiones, arquitectura y experiencia real en sistemas complejos.

---

## Explora por tema

- [Arquitectura](/arquitectura) — Diseño, decisiones y trade-offs  
- [Cloud](/cloud) — Plataformas, gobierno y operación  
- [IA](/ia) — RAG, agentes y sistemas en producción  
- [Opinión](/opinion) — Reflexión técnica y liderazgo  

---

## Últimos artículos

<ul>
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} — {{ post.title }}</a>
  </li>
{% endfor %}
</ul>
