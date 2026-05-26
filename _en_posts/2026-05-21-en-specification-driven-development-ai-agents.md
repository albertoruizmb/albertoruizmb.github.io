---
layout: post
title: "Specification-Driven Development: bringing specifications back in the age of AI agents"
date: 2026-05-21
slug: "specification-driven-development-ai-agents"
categories: [ai, architecture, engineering]
tags: [sdd, spec-driven-development, ai, agents, software-engineering, architecture, openspec, spec-kit]
author: Alberto Ruiz
excerpt: "Specification-Driven Development is bringing specifications back into modern software engineering, especially in scenarios involving AI-assisted and agent-driven development."
---

Reading time: 5 min

AI-assisted software development is forcing us to revisit an idea that seemed to have lost prominence: the specification.

In recent years, much of the conversation has focused on the ability of models to generate code. However, as agents begin to take on broader tasks —analyzing, planning, modifying, validating, or coordinating changes— the real challenge is no longer just productivity. The question becomes how to express intent in a way that is clear, persistent, and verifiable enough to be understood by both people and automated systems.

That is where Specification-Driven Development, or SDD, becomes especially relevant.

## Specifying before building

Specification-Driven Development is not simply about writing more documentation. Its main idea is to change the starting point of development: before asking a tool or an agent to implement a solution, we define in a structured way what we want to build, why, under which constraints, and with which validation criteria.

In an [article published on Martin Fowler’s website about recent SDD tools](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html), Birgitta Böckeler describes it very clearly: the specification is written before the code and becomes a shared source of truth between the human and the AI. It is a simple definition, but it helps separate SDD from a much more informal practice based only on successive prompts or ephemeral conversations with an assistant.

In a traditional model, code tends to become the main source of truth very quickly. The initial specification guides the work, but soon becomes subordinate to the implementation. In an SDD approach, the specification aims to remain alive at least throughout the lifecycle of the change being developed. In more ambitious models, it may even act as a permanent reference for the later evolution of a feature or system.

This shift is especially relevant in AI contexts. When development relies on agents, a conversation or a series of loose prompts is not enough to govern the work properly. Context gets lost, decisions become scattered, and it becomes difficult to know whether the final implementation really respects the original intent.

SDD tries to solve precisely that problem: turning intent into an explicit, reviewable artifact that can be used throughout the construction process.

## From prompts to governed context

One of the clearest lessons from AI-assisted development is that isolated prompts do not scale well. They may work for a quick test, a small utility, or an experiment, but they start to show limitations when the software grows, when several decisions accumulate, or when different team members are involved.

The problem is not only the quality of the model. It is the lack of persistent context.

SDD approaches try to address that limitation by turning specifications into a source of structured context. Instead of depending on what the agent remembers in a specific session, the relevant knowledge is expressed in artifacts that are part of the project.

This changes the conversation. It is no longer just about asking AI to write code, but about giving it a working frame of reference on which it can reason, propose, implement, and validate with greater consistency.

That nuance matters. The specification is not just a functional description; it starts to behave as a coordination interface between human intent and automated execution.

## An open ecosystem of tools

SDD is not materializing through a single tool or a closed standard. On the contrary, the ecosystem is still forming, with different approaches and varying levels of ambition coexisting.

Birgitta Böckeler analyzes, for example, three tools that present themselves or can be understood within this conversation —Kiro, Spec Kit, and Tessl— and distinguishes between approaches where the specification appears at the beginning of the work, others where it remains an anchor throughout the evolution of the change, and more ambitious ones where the specification aims to become the main source from which code is derived.

OpenSpec also fits within this broader movement as a lightweight approach to introducing a specification layer in projects that work with AI assistants or agents. Its proposal is interesting precisely because it tries to prevent requirements from living only in the chat history: before touching the code, the team makes explicit what needs to be built, with what intent, and under which constraints.

Spec Kit, for its part, represents a more operational attempt to bring SDD into workflows with coding agents. It is no coincidence that these tools start organizing work around artifacts such as specifications, plans, and tasks. What matters is not only the specific tool, but the pattern that is beginning to repeat itself: the specification becomes a control point in the development process again.

## Beyond code generation

Reducing SDD to automatic code generation would mean focusing on the most visible part, but not necessarily the most important one.

The real value appears when the specification influences the entire lifecycle of a change: analysis, design, planning, implementation, review, testing, and later evolution. In that scenario, code remains essential, but it is no longer the only control point.

The specification helps maintain traceability between need, decision, and implementation. It helps human teams review more clearly what is being built. And it gives agents a more stable context than a temporary conversation.

This does not eliminate engineering. Quite the opposite: it makes engineering more important. The more capable agents become at executing tasks, the more important it is to define the problem well, set the right scope, express constraints, and critically review the results.

## From experimentation to controlled adoption

SDD is not yet a closed standard, and there is no single universal way to apply it. Current tools are evolving quickly, and approaches with different levels of maturity coexist, from lightweight models based on versioned specifications to more ambitious ones where the specification aims to become the main axis of the development lifecycle.

Everything seems to suggest that we are at a point where adopting SDD with judgment becomes especially important: scoping use cases carefully, defining how specifications are written and reviewed, integrating the approach with existing workflows, and always maintaining technical oversight over relevant decisions.

In that sense, SDD should not be understood as a promise of total automation, but as an engineering practice to improve the way intent is expressed, governed, and validated during software development.

Its value appears precisely in the space between improvised prompts and traditional documentation: more structure, more traceability, and a clearer relationship between people, agents, and code.