---
layout: post
title: "Monolito, microservicios y la falsa dicotomía"
date: 2026-01-02
slug: monolith-vs-microservices
categories: [arquitectura]
tags: [monolito, microservicios, arquitectura, decisiones]
author: "Alberto Ruiz"
excerpt: 'En casi todas las conversaciones sobre arquitectura aparece la misma pregunta:  
"¿Monolito o microservicios?"'
---

## Contexto

En casi todas las conversaciones sobre arquitectura aparece la misma pregunta: “¿Monolito o microservicios?”

La forma en que se plantea ya contiene el error.

Durante la última década, la industria ha convertido una **decisión de diseño** en una **identidad tecnológica**.

Los microservicios se han vendido como sinónimo de modernidad, mientras que el monolito se ha presentado como algo obsoleto que hay que eliminar cuanto antes.

En la práctica, la mayoría de organizaciones no fracasan por haber elegido mal una arquitectura.  

Fracasan por no entender **qué implica realmente** la arquitectura que adoptan.

---

## El problema real

He visto equipos adoptar microservicios no porque su dominio lo necesitara, sino porque:

- Era lo que “hacían las empresas grandes”
- Era lo que pedían los arquitectos de referencia
- Era lo que parecía más profesional

Lo que casi nunca se evalúa es el coste real de esa decisión:

- Más despliegues
- Más puntos de fallo
- Más dependencias
- Más necesidad de observabilidad
- Más necesidad de automatización
- Más coordinación entre equipos

Un sistema distribuido no es simplemente un sistema dividido. Es un sistema **exponencialmente más complejo de operar**.

La mayoría de organizaciones no fracasan por usar monolitos. Fracasan por crear una complejidad que no saben cómo gestionar.

---

## El criterio

La arquitectura no debería empezar por tecnologías, sino por **contexto**.

Hay tres variables que importan más que cualquier patrón:

1. **Madurez y tamaño del equipo**  
2. **Volatilidad del dominio de negocio**  
3. **Capacidad real de operación** (CI/CD, observabilidad, gobierno)

Los microservicios funcionan cuando la **organización** es capaz de operar como un sistema distribuido. No cuando simplemente divide el código en repositorios.

Esto está profundamente alineado con la Ley de Conway:
> Los sistemas reflejan la estructura de la organización que los construye.

Si tienes un equipo pequeño, con ciclos de cambio rápidos y poco soporte de plataforma, una arquitectura distribuida es una forma muy eficaz de ralentizarlo.

Un monolito bien modularizado puede escalar durante años sin convertirse en un problema.
Un conjunto de microservicios mal gobernados se convierte en un problema desde el primer mes.

---

## Implicaciones prácticas

En la práctica, los patrones que mejor funcionan suelen ser:

- **Startups y equipos pequeños**  
  → Monolito modular con buenas fronteras internas

- **Empresas medianas**  
  → Pocos servicios bien definidos alrededor de dominios claros

- **Plataformas grandes y equipos múltiples**  
  → Microservicios reales, con plataforma, observabilidad y gobierno

Separar responsabilidades **lógicamente** es casi siempre una buena idea. Separarlas **físicamente** (en despliegues independientes) solo tiene sentido cuando el equipo puede asumir ese coste.

Un error muy común es separar despliegues antes de separar modelos de dominio.

---

## La idea clave

No existe una arquitectura moderna.  
Existe una arquitectura **adecuada para un contexto concreto**.

El trabajo del arquitecto no es elegir entre monolito o microservicios.  
Es decidir **cuánta complejidad puede absorber una organización sin romperse**.

Ese es el verdadero diseño.
