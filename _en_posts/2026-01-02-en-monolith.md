---
layout: post
title: "Monoliths, microservices and the false dichotomy"
date: 2026-01-02
slug: monolith-vs-microservices
categories: [arquitectura]
tags: [monolith, microservices, architecture, decisions]
author: "Alberto Ruiz"
excerpt: 'In almost every architecture discussion the same question appears:  
"Monolith or microservices?"'
---

## Context

In almost every architecture discussion the same question appears: “Monolith or microservices?”

The way the question is framed already contains the mistake.

Over the last decade, the industry has turned a **design decision** into a **technological identity**.  

Microservices have been sold as a synonym for modernity, while monoliths have been portrayed as something obsolete that must be eliminated as soon as possible.

In practice, most organisations do not fail because they chose the wrong architecture.  

They fail because they do not understand **what the architecture they adopt really implies**.

---

## The real problem

I have seen teams adopt microservices not because their domain required them, but because:

- That’s what “big companies do”
- That’s what reference architects recommend
- That’s what looks more professional

What is almost never evaluated is the real cost of that decision:

- More deployments  
- More points of failure  
- More dependencies  
- More need for observability  
- More need for automation  
- More coordination between teams  

A distributed system is not simply a system split into pieces. It is a system that is **exponentially more complex to operate**.

Most organisations do not fail because they use monoliths. They fail because they create a level of complexity they cannot manage.

---

## The criterion

Architecture should not start from technologies, but from **context**.

Three variables matter more than any pattern:

1. **Team maturity and size**  
2. **Business domain volatility**  
3. **Real operational capability** (CI/CD, observability, governance)

Microservices work when the **organisation** can operate as a distributed system — not when code is merely split into repositories.

This is deeply aligned with Conway’s Law:
> Systems reflect the structure of the organisations that build them.

If you have a small team, fast change cycles, and limited platform support, a distributed architecture is a very effective way to slow yourself down.

A well-modularised monolith can scale for years without becoming a problem.  
A poorly governed set of microservices becomes a problem from the very first month.

---

## Practical implications

In practice, the patterns that work best are usually:

- **Startups and small teams**  
  → Modular monolith with strong internal boundaries  

- **Mid-size companies**  
  → A small number of well-defined services around clear domains  

- **Large platforms and multiple teams**  
  → Real microservices, with platform, observability and governance  

Separating responsibilities **logically** is almost always a good idea. Separating them **physically** (independent deployments) only makes sense when the organisation can afford that cost.

A very common mistake is to separate deployments before separating domain models.

---

## The key idea

There is no such thing as a modern architecture.  
There is only an architecture that is **appropriate for a specific context**.

The architect’s job is not to choose between monoliths and microservices.  
It is to decide **how much complexity an organisation can absorb without breaking**.

That is real design.
