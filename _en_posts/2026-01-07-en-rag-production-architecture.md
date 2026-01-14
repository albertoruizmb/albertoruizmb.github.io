---
layout: post
title: "The real architecture of a production RAG system"
date: 2026-01-16
slug: rag-production-architecture
categories: [ia]
tags: [rag, ai, architecture, llm, production]
author: "Alberto Ruiz"
excerpt: "Today it is trivial to build a RAG demo: a PDF, a vector store and a call to an LLM."
---

Today it is trivial to build a RAG demo: a PDF, a vector store and a call to an LLM. The hard part is not making it work, but making it **keep working when there are users, changes and real costs**. That is where most systems break.

A production RAG system does not fail because of the model. It fails because of everything around it. It fails because of how documents are ingested, how data is versioned, how updates are applied, how answers are evaluated, how inference costs are controlled and how the system is observed. When those pieces are not designed, the system starts to degrade without anyone really knowing why.

That is why a real RAG system is not a call to an LLM. It is a **pipeline of data and decisions**. It includes ingestion processes, cleaning and chunking, vector indexing, hybrid retrieval, model calls, automated evaluation, monitoring and cost governance. The model is just one component in that whole. It is not the architecture.

The difference becomes obvious as soon as the system is used in the real world. What happens when a document changes? How do you detect incorrect or biased answers? How do you limit the cost per user? How can you know which version of the index was used to generate a specific answer? If you cannot answer those questions, you do not have a production AI system. You have a demo that has not been unlucky yet.

That is the line between a proof of concept and a system that can survive over time. In a prototype, it is enough for the model to “respond well”. In production, everything that happens before and after that response matters.

The difference between a proof of concept and a real AI system is not in the model. It is in the architecture that surrounds it.
