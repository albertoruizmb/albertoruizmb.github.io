---
layout: post
title: "Qué es realmente un DSA (y por qué muchas veces no se usa bien)"
date: 2026-01-03
slug: what-is-a-dsa
categories: [arquitectura]
tags: [dsa, documentacion, arquitectura, decisiones]
author: "Alberto Ruiz"
excerpt: "En muchos proyectos se habla de “hacer un DSA” como si fuera un trámite más."
---

En muchos proyectos se habla de “hacer un DSA” como si fuera un trámite más. Un documento que hay que entregar, firmar y archivar. El resultado suele ser predecible: un conjunto de diagramas, algo de texto genérico y muy poca utilidad real una vez empieza el desarrollo.

El problema no es el DSA. El problema es **para qué se crea y cómo se usa**.

En la práctica, muchos DSA fallan por motivos que se repiten. Se centran en **describir** la solución, no en justificarla. Documentan el *qué*, pero no el *por qué*. Se escriben al final, cuando las decisiones ya están tomadas. Y, cuando se entrega el PDF, nadie vuelve a consultarlo.

Así el DSA se convierte en un artefacto contractual, en un documento de compliance, en un archivo que “hay que tener”. Pero cuando aparecen problemas en producción, el DSA no ayuda, porque **no explica las decisiones** que llevaron hasta allí.

Un DSA bien entendido no es un catálogo de diagramas. Es un **registro estructurado de decisiones arquitectónicas**. Su función principal no es “explicar el sistema”, sino dejar trazabilidad de preguntas incómodas: ¿por qué se eligió esta arquitectura y no otra?, ¿qué alternativas se descartaron?, ¿qué trade-offs se aceptaron conscientemente?, ¿qué supuestos se dieron por válidos en ese momento?

Un buen DSA actúa como un contrato de entendimiento entre negocio, tecnología y operación. No evita los cambios. Evita que los cambios se hagan sin memoria.

Por eso, en proyectos reales, un DSA útil suele ser iterativo. Evoluciona con el sistema. Referencia decisiones explícitas (ADR) y prioriza claridad sobre exhaustividad. No necesita decenas de diagramas, texto genérico reutilizado o jerga innecesaria. Necesita contexto, decisiones y consecuencias.

Un DSA que no se consulta cuando algo falla no está cumpliendo su función.

Un DSA no es un documento para justificar el pasado. Es una herramienta para **entender el presente y decidir mejor el futuro**. Cuando se usa bien, reduce fricción, acelera decisiones y evita debates circulares. Cuando se usa mal, es solo otro PDF olvidado.

La diferencia no está en la plantilla. Está en el criterio.
