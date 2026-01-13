---
layout: post
title: "Por qué una landing zone no es solo infraestructura"
date: 2026-01-04
slug: landing-zone-is-not-just-infrastructure
categories: [cloud]
tags: [landing-zone, azure, cloud, gobierno, arquitectura]
author: "Alberto Ruiz"
excerpt: "En muchos proyectos cloud, la landing zone se trata como un paso previo"
---

## Contexto

En muchos proyectos cloud, la *landing zone* se trata como un paso previo:
algo que hay que montar antes de empezar a desplegar aplicaciones.

Se habla de redes, subredes, firewalls y cuentas.
Y una vez creada, el equipo “empieza a trabajar”.

El problema es que, si una *landing zone* se entiende solo como infraestructura,
en realidad se está perdiendo la parte más importante.

---

## El problema real

He visto *landing zones* técnicamente correctas
que fracasaban como plataforma.

Tenían:

- Redes bien segmentadas
- Conectividad híbrida
- Buenas prácticas de seguridad

Pero no tenían:

- Gobierno claro
- Identidad bien integrada
- Políticas de coste
- Responsabilidades definidas

El resultado es siempre el mismo:
una nube que crece rápido y se vuelve incontrolable.

La infraestructura aguanta.
La organización no.

---

## El criterio

Una *landing zone* no es un conjunto de recursos.
Es el **modelo operativo de la nube**.

Define:

- Quién puede crear qué
- Cómo se controla el gasto
- Cómo se auditan los cambios
- Cómo se integran los equipos
- Cómo se responde a incidentes

Es el punto donde:
> arquitectura, seguridad, finanzas y operación se cruzan.

Si solo piensas en subredes y firewalls,
estás construyendo un datacenter, no una plataforma.

---

## Implicaciones prácticas

Una *landing zone* bien diseñada suele incluir desde el primer día:

- Identidad federada (Entra ID, IAM, etc.)
- Estructura de suscripciones o cuentas
- Políticas de seguridad
- Políticas de coste y etiquetado
- Automatización base
- Monitorización y logs

No es un “proyecto de infraestructura”.
Es la **fundación organizativa del cloud**.

Cuando esto está claro,
los equipos pueden desplegar rápido sin perder control.

Cuando no lo está,
cada despliegue añade deuda operativa.

---

## La idea clave

Una *landing zone* no sirve para ejecutar máquinas.
Sirve para **alinear una organización con una plataforma**.

Quien la diseña solo como infraestructura,
termina gestionando caos.

Quien la diseña como arquitectura,
construye velocidad sostenible.
