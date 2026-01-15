---
layout: post
title: "Monolito, microservicios y la falsa dicotomía"
date: 2026-01-02
slug: monolith-vs-microservices
categories: [arquitectura]
tags: [monolito, microservicios, arquitectura, decisiones]
author: "Alberto Ruiz"
excerpt: 'En casi todas las conversaciones sobre arquitectura aparece la misma pregunta: "¿Monolito o microservicios?"'
---

En casi todas las conversaciones sobre arquitectura aparece la misma pregunta: “¿Monolito o microservicios?”. La forma en que se plantea ya contiene el error.

Durante la última década, la industria ha convertido una **decisión de diseño** en una **identidad tecnológica**. Los microservicios se han vendido como sinónimo de modernidad, mientras que el monolito se ha presentado como algo obsoleto que hay que eliminar cuanto antes. En ese relato, elegir una u otra opción no parece una decisión técnica, sino una declaración de principios.

En la práctica, sin embargo, la mayoría de las organizaciones no fracasan por haber elegido mal una arquitectura. Fracasan por no entender **qué implica realmente** la arquitectura que adoptan.

He visto equipos adoptar microservicios no porque su dominio lo necesitara, sino porque era lo que “hacían las empresas grandes”, lo que recomendaban los arquitectos de referencia o lo que parecía más profesional. Lo que casi nunca se evalúa es el coste real de esa decisión: más despliegues, más puntos de fallo, más dependencias, más necesidad de observabilidad, más automatización y, sobre todo, más coordinación entre equipos.

Un sistema distribuido no es simplemente un sistema dividido. Es un sistema **exponencialmente más complejo de operar**. Y la mayoría de las organizaciones no fracasan por usar monolitos; fracasan por introducir una complejidad que no saben gestionar.

Por eso la arquitectura no debería empezar por tecnologías, sino por **contexto**. Hay tres variables que importan más que cualquier patrón: la madurez y el tamaño del equipo, la volatilidad del dominio de negocio y la capacidad real de operación (CI/CD, observabilidad y gobierno). Los microservicios funcionan cuando la **organización** es capaz de operar como un sistema distribuido, no cuando simplemente divide el código en repositorios.

Esto encaja perfectamente con la Ley de Conway:
> los sistemas reflejan la estructura de la organización que los construye.

Si tienes un equipo pequeño, con ciclos de cambio rápidos y poco soporte de plataforma, una arquitectura distribuida es una forma muy eficaz de ralentizarlo.

Un monolito bien modularizado puede escalar durante años sin convertirse en un problema. Un conjunto de microservicios mal gobernados se convierte en un problema desde el primer mes.

En la práctica, los patrones que mejor funcionan siguen un gradiente bastante claro. En startups y equipos pequeños, un monolito modular con buenas fronteras internas suele ser la opción más eficaz. En empresas medianas, unos pocos servicios bien definidos alrededor de dominios claros pueden aportar flexibilidad sin disparar la complejidad. En plataformas grandes, con muchos equipos, los microservicios reales —con plataforma, observabilidad y gobierno— empiezan a tener sentido.

Separar responsabilidades **lógicamente** es casi siempre una buena idea. Separarlas **físicamente**, en despliegues independientes, solo tiene sentido cuando el equipo puede asumir ese coste. Un error muy común es separar despliegues antes de separar modelos de dominio.

No existe una arquitectura moderna. Existe una arquitectura **adecuada para un contexto concreto**. El trabajo del arquitecto no es elegir entre monolito o microservicios, sino decidir **cuánta complejidad puede absorber una organización sin romperse**.

Ese es el verdadero diseño.
