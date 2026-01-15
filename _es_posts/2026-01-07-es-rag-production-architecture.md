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

Hoy es trivial construir una demo de RAG: un PDF, un vector store y una llamada a un LLM. Lo difícil no es que funcione, sino que **siga funcionando cuando hay usuarios, cambios y costes reales**. Ahí es donde la mayoría de sistemas se rompen.

Un sistema RAG en producción no falla por el modelo. Falla por todo lo que lo rodea. Falla por cómo se ingieren los documentos, cómo se versionan los datos, cómo se aplican las actualizaciones, cómo se evalúan las respuestas, cómo se controlan los costes de inferencia y cómo se observa lo que está ocurriendo. Cuando esas piezas no están diseñadas, el sistema empieza a degradarse sin que nadie sepa exactamente por qué.

Por eso un sistema RAG real no es una llamada a un LLM. Es una **pipeline de datos y decisiones**. Incluye procesos de ingestión, limpieza y *chunking*, indexado vectorial, recuperación híbrida, llamadas al modelo, evaluación automática, monitorización y gobierno de costes. El modelo es solo una pieza más dentro de ese conjunto. No es la arquitectura.

La diferencia se vuelve evidente en cuanto el sistema empieza a usarse de verdad. ¿Qué pasa cuando cambia un documento? ¿Cómo se detectan respuestas incorrectas o sesgadas? ¿Cómo se limita el coste por usuario? ¿Cómo se puede saber qué versión del índice se utilizó para generar una respuesta concreta? Si no puedes responder a esas preguntas, no tienes un sistema de IA en producción. Tienes una demo que todavía no ha tenido mala suerte.

Ese es el punto que separa las pruebas de concepto de los sistemas que pueden sostenerse en el tiempo. En un prototipo basta con que el modelo “responda bien”. En producción, importa todo lo que ocurre antes y después de esa respuesta.

La diferencia entre una prueba de concepto y un sistema de IA real no está en el modelo. Está en la arquitectura que lo rodea.
