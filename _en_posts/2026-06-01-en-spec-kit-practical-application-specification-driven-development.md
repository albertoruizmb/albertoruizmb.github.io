---
layout: post
title: "Spec Kit: a practical way to apply Specification-Driven Development"
date: 2026-06-01
slug: spec-kit-practical-application-specification-driven-development
image: /assets/images/posts/spec-kit-practical-application-specification-driven-development/header.webp
image_alt: "Spec Kit and Specification-Driven Development"
categories: [ai, architecture, engineering]
tags: [sdd, spec-driven-development, ai, agents, software-engineering, architecture, spec-kit, github-copilot, azure-devops, microsoft]
author: "Alberto Ruiz"
published: true
excerpt: "Spec Kit helps bring Specification-Driven Development into real projects by using specifications, technical plans and tasks to guide the work of AI agents."
---

Reading time: 4 min

In the [first article](https://albertoruizmb.github.io/en/blog/2026/05/21/specification-driven-development-ai-agents/) of this series, I wrote about **Specification-Driven Development** as a way to bring specifications back to the center of software engineering in an age increasingly shaped by AI-assisted development.

In this second article, I want to move directly into practice: **Spec Kit**.

Spec Kit is a tool designed to apply SDD in real projects. Its goal is not to make AI build software on its own, but to bring more structure to the work before writing code. Instead of asking an agent to implement a feature from a loose instruction, Spec Kit proposes a clearer sequence: specification, technical plan, tasks and implementation.

That difference matters. When we use AI agents without enough context, we can get code quickly, but we can also get implicit decisions that nobody has validated: how users authenticate, how errors are handled, which security constraints apply, what architecture must be respected, what data is stored, what traceability remains, or what it really means for a feature to be complete.

Spec Kit tries to reduce that problem by making the agent work from explicit artefacts.

## From specification to code

The basic Spec Kit flow starts with a specification. This specification should not be a long or bureaucratic document. It should explain what needs to be built, for whom, with what scope, which scenarios are out of scope, and which acceptance criteria will be used.

Then comes the technical plan. This is where implementation decisions are made explicit: architecture, technologies, data, integrations, security, observability, testing and deployment. It is not enough to say that “an API will be created”. The plan should explain how that API fits into the real system.

The next step is to break the work down into tasks. This is especially useful when working with AI agents. Smaller tasks are easier to review, reduce ambiguity and prevent the assistant from generating large blocks of code that are difficult to control.

Finally, implementation begins. The agent can help generate code, tests or documentation, but always against a previously defined specification and plan. If a question appears, the right approach is not to solve it only in the code, but also to update the corresponding artefact.

This is the core idea: code should not be the only place where the truth of the system lives.

## Applying it with Microsoft technologies

Spec Kit fits well in organizations already working with **GitHub, GitHub Copilot, Azure DevOps and Azure**.

With GitHub, specifications, plans and tasks can be versioned together with the code. This allows a pull request to review not only the implementation, but also whether the change respects the specification and the technical plan. GitHub Actions can add automated validations, tests, static analysis and security controls.

With GitHub Copilot, the team can use those artefacts as context. Instead of asking it to “implement this feature”, the team can ask it to work from a specific specification, detect ambiguities, propose a technical plan or implement a well-scoped task.

In organizations using Azure DevOps, Spec Kit should not be understood as an automatic replacement for the existing workflow. It can coexist with Azure Boards, Azure Repos and Azure Pipelines if the team decides to version specification artefacts together with the code and link the resulting tasks to the regular backlog.

For projects deployed on Azure, the technical plan can capture the architectural decisions that matter: compute services, identity, security, observability, integration, data and infrastructure as code.

The value is not in listing many technologies. The value is in making those decisions before generating code and making clear why they were chosen.

## The project constitution

One of the most interesting elements of Spec Kit is the project constitution. It is a set of rules that the agent must respect during the work.

In a Microsoft environment, this constitution may include decisions such as using Microsoft Entra ID for authentication, avoiding secrets in code, prioritizing Managed Identities, documenting APIs with OpenAPI, deploying through pipelines, defining infrastructure with Bicep or Terraform, and applying observability from the beginning.

It may also include architectural criteria: when to use Azure Functions instead of App Service, when AKS makes sense, how APIs should be versioned, which integration patterns are allowed, or which repository conventions must be followed.

This does not replace technical review, but it avoids starting from scratch for every feature. The agent works with clearer rules, and the team has a common basis for evaluating the result.

## Minimum governance

Spec Kit should be adopted with control. If every team defines its own templates, rules and criteria, the result may be more disorder, not less.

It is worth defining a minimum governance framework: which templates are official, what a specification must contain, which rules the constitution should include, how technical plans are reviewed, and which automated controls must run before accepting changes.

It is also important to define what an agent is allowed to do. It may generate code, tests, documentation or infrastructure proposals. But it should not approve its own changes, modify security policies or deploy directly to production without human review.

This is where Spec Kit must connect with the real governance of the organization: architecture, security, quality, DevOps and operations.

## Conclusion

Spec Kit is interesting because it turns Specification-Driven Development into something more operational.

It does not remove the complexity of software development. It does not turn AI agents into replacements for the team. But it helps us work better with them: first specify, then plan, then break the work down into tasks, and finally implement with context.

For organizations working with Microsoft technologies, the fit is natural. GitHub Copilot, GitHub, Azure DevOps and Azure provide a suitable environment to experiment with this approach.

The real value will come from using Spec Kit with judgement: not as a trend, but as a way to make AI-assisted development clearer, more traceable and better governed.
