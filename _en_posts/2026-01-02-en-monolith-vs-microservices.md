---
layout: post
title: "Monoliths, microservices and the false dichotomy"
date: 2026-01-16
slug: monolith-vs-microservices
categories: [architecture]
tags: [monolith, microservices, architecture, decisions]
author: "Alberto Ruiz"
excerpt: "In almost every architecture conversation the same question comes up: “Monolith or microservices?”"
---

In almost every architecture conversation the same question comes up: “Monolith or microservices?”. The way it is framed already contains the mistake.

Over the last decade, the industry has turned a **design decision** into a **technological identity**. Microservices have been sold as a symbol of modernity, while the monolith has been portrayed as something obsolete that must be eliminated as soon as possible. In that narrative, choosing one or the other feels less like a technical decision and more like a declaration of values.

In practice, however, most organisations do not fail because they chose the wrong architecture. They fail because they do not understand **what the architecture they adopted actually implies**.

I have seen teams adopt microservices not because their domain required it, but because it was what “big companies did”, what influential architects recommended, or what seemed more professional. What is rarely evaluated is the real cost of that choice: more deployments, more points of failure, more dependencies, more need for observability, more automation, and above all, more coordination between teams.

A distributed system is not simply a system that has been split apart. It is a system that is **exponentially harder to operate**. Most organisations do not fail because they use monoliths; they fail because they introduce a level of complexity they cannot manage.

That is why architecture should not start with technologies, but with **context**. Three variables matter more than any pattern: the maturity and size of the team, the volatility of the business domain, and the organisation’s real operational capability (CI/CD, observability and governance). Microservices work when the **organisation** can operate like a distributed system, not when code is merely split across repositories.

This aligns perfectly with Conway’s Law: systems reflect the structure of the organisations that build them. If you have a small team, fast change cycles and little platform support, a distributed architecture is a very effective way to slow everything down.

A well-modularised monolith can scale for years without becoming a problem. A poorly governed set of microservices becomes a problem from the very first month.

In practice, the patterns that work best follow a fairly clear gradient. For startups and small teams, a modular monolith with strong internal boundaries is usually the most effective option. For mid-sized organisations, a small number of well-defined services around clear domains can provide flexibility without exploding complexity. For large platforms with many teams, real microservices — with platform, observability and governance — start to make sense.

Separating responsibilities **logically** is almost always a good idea. Separating them **physically**, into independent deployments, only makes sense when the organisation can afford that cost. A very common mistake is to separate deployments before separating domain models.

There is no such thing as a modern architecture. There is only an architecture that is **appropriate for a specific context**. The architect’s job is not to choose between monoliths and microservices, but to decide **how much complexity an organisation can absorb without breaking**.

That is real design.
