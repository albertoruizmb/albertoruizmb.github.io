---
layout: post
title: "The real architecture of a production RAG system"
date: 2026-01-07
slug: rag-production-architecture
categories: [ia]
tags: [rag, ai, architecture, llm, production]
author: "Alberto Ruiz"
excerpt: "Today it is trivial to build a RAG demo: a PDF, a vector store and a call to an LLM."
---

## Context

Today it is trivial to build a RAG demo:  
a PDF, a vector store and a call to an LLM.

What is hard is not making it work.  
What is hard is making it **keep working when there are users, changes and real costs**.

That is where most systems break.

---

## The real problem

A production RAG system does not fail because of the model.  
It fails because of everything around it:

- Document ingestion  
- Data versioning  
- Updates  
- Answer evaluation  
- Inference costs  
- Observability  

When those things are not designed,  
the system starts degrading and nobody knows why.

---

## The criterion

A real RAG system is a **pipeline of data and decisions**, not a call to an LLM.

It includes at least:

- Ingestion processes  
- Cleaning and chunking  
- Vector indexing  
- Hybrid retrieval  
- Model calls  
- Automated evaluation  
- Monitoring  
- Cost governance  

The LLM is just one component.  
Not the architecture.

---

## Practical implications

If you cannot answer these questions, you do not have a production RAG system:

- What happens when a document changes?  
- How do you detect incorrect answers?  
- How do you limit cost per user?  
- How do you know which index version was used for a given answer?

Without that, what you have is a lucky demo.

---

## The key idea

The difference between a proof of concept and a production AI system  
is not the model.

It is the architecture around it.
