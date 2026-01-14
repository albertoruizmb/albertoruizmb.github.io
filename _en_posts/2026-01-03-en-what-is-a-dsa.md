---
layout: post
title: "What a DSA really is (and why it’s often used poorly)"
date: 2026-01-03
slug: what-is-a-dsa
categories: [architecture]
tags: [dsa, documentation, architecture, decisions]
author: "Alberto Ruiz"
excerpt: "In many projects people talk about “doing a DSA” as if it were just another formality."
---

In many projects people talk about “doing a DSA” as if it were just another formality. A document to deliver, sign off, and file away. The outcome is usually predictable: a handful of diagrams, some generic text, and very little real value once development starts.

The problem is not the DSA. The problem is **why it is created and how it is used**.

In practice, many DSAs fail for the same recurring reasons. They focus on **describing** the solution rather than justifying it. They document the *what* but not the *why*. They are written at the end, when decisions have already been made. And once the PDF is delivered, nobody looks at it again.

That is how a DSA becomes a contractual artefact, a compliance document, a file you “need to have”. But when production issues show up, the DSA does not help — because it does not explain the decisions that led there.

A properly understood DSA is not a catalogue of diagrams. It is a **structured record of architectural decisions**. Its main purpose is not to “explain the system”, but to preserve answers to uncomfortable questions: why this architecture and not another one? What alternatives were rejected? Which trade-offs were consciously accepted? Which assumptions were considered valid at the time?

A good DSA acts as a shared contract of understanding between business, engineering, and operations. It does not prevent change. It prevents change without memory.

That is why, in real projects, a useful DSA is usually iterative. It evolves with the system. It references explicit decisions (ADRs) and prioritises clarity over exhaustiveness. It does not need dozens of diagrams, reused generic text, or unnecessary jargon. It needs context, decisions, and consequences.

A DSA that is never consulted when something breaks is not doing its job.

A DSA is not a document to justify the past. It is a tool to **understand the present and make better decisions for the future**. Used well, it reduces friction, speeds up decision-making, and avoids circular debates. Used poorly, it is just another forgotten PDF.

The difference is not the template. It is judgement.
