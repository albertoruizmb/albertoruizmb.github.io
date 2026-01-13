---
layout: post
title: "La arquitectura real de un sistema RAG en producción"
date: 2026-01-07
slug: rag-production-architecture
categories: [ia]
tags: [rag, ia, arquitectura, llm, produccion]
author: "Alberto Ruiz"
excerpt: "Hoy es trivial construir una demo de RAG: un PDF, un vector store y una llamada a un LLM."
---

## Contexto

Hoy es trivial construir una demo de RAG:
un PDF, un vector store y una llamada a un LLM.

Lo difícil no es que funcione.
Lo difícil es que **siga funcionando cuando hay usuarios, cambios y costes reales**.

Ahí es donde la mayoría de sistemas se rompen.

---

## El problema real

Un sistema RAG en producción no falla por el modelo.
Falla por todo lo que lo rodea:

- Ingesta de documentos
- Versionado de datos
- Actualizaciones
- Evaluación de respuestas
- Costes de inferencia
- Observabilidad

Cuando eso no está diseñado,
el sistema empieza a degradarse sin que nadie sepa por qué.

---

## El criterio

Un sistema RAG real es una **pipeline de datos y decisiones**, no una llamada a un LLM.

Incluye al menos:

- Proceso de ingestión
- Limpieza y chunking
- Indexado vectorial
- Recuperación híbrida
- Llamadas al modelo
- Evaluación automática
- Monitorización
- Gobierno de costes

El LLM es solo una pieza más.
No la arquitectura.

---

## Implicaciones prácticas

Si no puedes responder a estas preguntas, no tienes un sistema RAG en producción:

- ¿Qué pasa cuando cambia un documento?
- ¿Cómo detectas respuestas incorrectas?
- ¿Cómo limitas el coste por usuario?
- ¿Cómo sabes qué versión del índice usó una respuesta?

Sin eso, lo que tienes es una demo con suerte.

---

## La idea clave

La diferencia entre una prueba de concepto y un sistema de IA en producción
no está en el modelo.

Está en la arquitectura que lo rodea.
