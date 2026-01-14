---
layout: post
title: "Why a landing zone is not just infrastructure"
date: 2026-01-16
slug: landing-zone-is-not-just-infrastructure
categories: [cloud]
tags: [landing-zone, azure, cloud, governance, architecture]
author: "Alberto Ruiz"
excerpt: "In many cloud projects, the landing zone is treated as just a preliminary step."
---

In many cloud projects, the *landing zone* is treated as a preliminary step: something you set up before you start deploying applications. People talk about networks, subnets, firewalls and accounts. And once it is in place, the team “starts working”.

The problem is that when a *landing zone* is understood only as infrastructure, the most important part is being ignored.

I have seen *landing zones* that were technically correct yet failed as platforms. They had well-segmented networks, hybrid connectivity and good security practices. But they lacked clear governance, properly integrated identity, cost policies and defined responsibilities. The outcome is always the same: a cloud that grows fast and becomes unmanageable.

The infrastructure holds.  
The organisation does not.

A *landing zone* is not a set of resources. It is the **operating model of the cloud**. It defines who can create what, how spending is controlled, how changes are audited, how teams are integrated and how incidents are handled. It is the point where architecture, security, finance and operations intersect.

If you only think in terms of subnets and firewalls, you are building a data centre, not a platform.

That is why a well-designed *landing zone* includes, from day one, federated identity (Entra ID, IAM, and so on), a clear account or subscription structure, security policies, cost and tagging policies, base automation, and monitoring and logging. Not as layers added later, but as part of the system itself.

It is not an “infrastructure project”. It is the **organisational foundation of the cloud**. When this is in place, teams can move fast without losing control. When it is not, every deployment adds operational debt that someone will eventually have to pay.

A *landing zone* is not there to run machines. It exists to **align an organisation with a platform**. Those who design it as infrastructure end up managing chaos. Those who design it as architecture build sustainable speed.
