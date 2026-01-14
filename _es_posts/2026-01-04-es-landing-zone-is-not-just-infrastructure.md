---
layout: post
title: "Por qué una landing zone no es solo infraestructura"
date: 2026-01-16
slug: landing-zone-is-not-just-infrastructure
categories: [cloud]
tags: [landing-zone, azure, cloud, gobierno, arquitectura]
author: "Alberto Ruiz"
excerpt: "En muchos proyectos cloud, la landing zone se trata como un paso previo."
---

En muchos proyectos cloud, la *landing zone* se trata como un paso previo: algo que hay que montar antes de empezar a desplegar aplicaciones. Se habla de redes, subredes, firewalls y cuentas. Y una vez creada, el equipo “empieza a trabajar”.

El problema es que, cuando una *landing zone* se entiende solo como infraestructura, se está ignorando precisamente la parte más importante.

He visto *landing zones* técnicamente correctas que fracasaban como plataforma. Tenían redes bien segmentadas, conectividad híbrida y buenas prácticas de seguridad. Pero no tenían gobierno claro, ni identidad bien integrada, ni políticas de coste, ni responsabilidades definidas. El resultado es siempre el mismo: una nube que crece rápido y se vuelve incontrolable.

La infraestructura aguanta.  
La organización no.

Una *landing zone* no es un conjunto de recursos. Es el **modelo operativo de la nube**. Define quién puede crear qué, cómo se controla el gasto, cómo se auditan los cambios, cómo se integran los equipos y cómo se responde a incidentes. Es el punto donde arquitectura, seguridad, finanzas y operación se cruzan.

Si solo piensas en subredes y firewalls, estás construyendo un datacenter. No una plataforma.

Por eso una *landing zone* bien diseñada suele incluir desde el primer día identidad federada (Entra ID, IAM, etc.), una estructura clara de suscripciones o cuentas, políticas de seguridad, políticas de coste y etiquetado, automatización base, y monitorización y logs. No como capas que se añaden después, sino como parte del sistema desde el principio.

No es un “proyecto de infraestructura”. Es la **fundación organizativa del cloud**. Cuando esto está claro, los equipos pueden desplegar rápido sin perder el control. Cuando no lo está, cada despliegue añade deuda operativa que alguien tendrá que pagar más adelante.

Una *landing zone* no sirve para ejecutar máquinas. Sirve para **alinear una organización con una plataforma**. Quien la diseña solo como infraestructura acaba gestionando caos. Quien la diseña como arquitectura construye velocidad sostenible.
