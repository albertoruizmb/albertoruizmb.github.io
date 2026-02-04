---
layout: post
title: "Why most important technical decisions are not made in code"
date: 2026-02-04
slug: most-important-technical-decisions-are-not-in-code
categories: [architecture]
tags: [software-architecture, technical-decisions, architectural-judgment]
author: "Alberto Ruiz"
excerpt: "Code materializes decisions, but it is rarely the place where the most important ones are made."
---

When technical decisions are discussed, the conversation usually ends up revolving around code. Which language to use, which framework to choose, how to structure modules or which pattern to apply. These decisions are visible, tangible and relatively easy to debate. Over time, however, it becomes clear that while they matter, they are rarely the ones that truly determine the success or failure of a system.

Most important technical decisions are made before a single line of code is written. In many cases, without touching code at all.

Code is where decisions are expressed, not where they usually originate. By the time someone opens an editor, key questions have already been answered: what problem is being solved, how far the solution goes, and which trade-offs are acceptable. Explicitly or implicitly, it has already been decided what kind of system is being built and for whom.

Many of these decisions never appear in the repository. They are not found in a function or a class. They live in conversations, in half-written documents, in tacit agreements or sometimes in simple omissions. Yet they shape everything that follows.

A clear example is the definition of system boundaries. Where a system starts and ends, which responsibilities it assumes and which it delegates. Poor boundaries rarely cause immediate errors, but they introduce constant friction. Every new feature costs more than it should, every change feels risky, and the system slowly resists its own evolution. No local refactor can fix that.

The same happens with ownership. Who is responsible for which part of the system, and with what level of autonomy. When ownership is unclear, code can be clean and well structured, and the system will still be fragile. Decisions are postponed, changes are avoided and problems accumulate. The result is not usually a bug, but a gradual decay.

Decisions around identity, access and permissions tend to live even further away from code. They are uncomfortable, require thinking about scenarios nobody wants to face and rarely provide visible short-term benefits. Until something goes wrong. Then it becomes clear that those decisions, often made by inertia or under pressure, mattered far more than the choice of any library.

Operational decisions follow the same pattern. How a system is deployed, how it is observed, how it recovers from failure. These are technical decisions in every sense, but they are often absent from the main development narrative. Still, they define the real experience of the system in production, where users —and failures— actually exist.

There is also a particularly silent type of decision: the decision not to do something. Which exceptional scenarios are not considered, which ones are assumed to be unlikely, which complexity is deliberately excluded. These decisions are rarely documented, but they deeply influence the design. When left implicit, they tend to reappear later as misunderstandings.

All of this explains why less experienced profiles often associate technical impact with visible code. It is understandable: code is what can be reviewed, measured and compared. The problem arises when organizations reinforce that view and end up valuing only what shows up in a commit. At that point, the most important decisions are made without the rigor they deserve, simply because they do not fit well into a diff.

Architecture, in its most practical sense, is about making those invisible decisions visible. About deciding while there is still room to change direction without dramatic consequences. About accepting that many decisions have no universally correct answer, only one that fits a specific context.

Over time, technical work stops being only about writing good code and becomes about reducing ambiguity before it reaches the code. About creating a framework where development can evolve without rewriting everything every few months. About accepting that not every decision can be automated or wrapped in a neat abstraction.

Code remains essential. But when it truly matters, the decisions that carry the most weight have usually been made long before anyone pressed “save”.
