---
layout: post
title: "Why a landing zone is more than just infrastructure"
date: 2026-01-04
slug: landing-zone-is-not-just-infrastructure
categories: [cloud]
tags: [landing-zone, azure, cloud, governance, architecture]
author: "Alberto Ruiz"
excerpt: "In many cloud projects, the landing zone is treated as a preliminary step."
---

## Context

In many cloud projects, the landing zone is treated as a preliminary step:  
something that has to be built before applications can start being deployed.

People talk about networks, subnets, firewalls and accounts.  
Once it is created, the team is expected to “start working”.

The problem is that when a landing zone is understood only as infrastructure,  
the most important part is being missed.

---

## The real problem

I have seen landing zones that were technically correct  
but failed as platforms.

They had:

- Well-segmented networks  
- Hybrid connectivity  
- Solid security practices  

But they did not have:

- Clear governance  
- Properly integrated identity  
- Cost controls  
- Defined responsibilities  

The result is always the same:  
a cloud environment that grows fast and becomes uncontrollable.

The infrastructure holds.  
The organisation does not.

---

## The criterion

A landing zone is not a set of resources.  
It is the **operating model of the cloud**.

It defines:

- Who can create what  
- How spending is controlled  
- How changes are audited  
- How teams are integrated  
- How incidents are handled  

It is the point where  
> architecture, security, finance and operations intersect.

If you only think in terms of subnets and firewalls,  
you are building a data centre, not a platform.

---

## Practical implications

A well-designed landing zone usually includes, from day one:

- Federated identity (Entra ID, IAM, etc.)  
- Subscription or account structure  
- Security policies  
- Cost and tagging policies  
- Baseline automation  
- Monitoring and logging  

It is not an “infrastructure project”.  
It is the **organisational foundation of the cloud**.

When this is clear,  
teams can deploy fast without losing control.

When it is not,  
every deployment adds operational debt.

---

## The key idea

A landing zone does not exist to run machines.  
It exists to **align an organisation with a platform**.

Those who design it as infrastructure end up managing chaos.  
Those who design it as architecture build sustainable speed.
