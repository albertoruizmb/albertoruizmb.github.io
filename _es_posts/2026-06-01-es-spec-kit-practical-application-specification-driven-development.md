---
layout: post
title: "Spec Kit: una forma práctica de aplicar Specification-Driven Development"
date: 2026-06-01
slug: spec-kit-practical-application-specification-driven-development
image: /assets/images/posts/spec-kit-practical-application-specification-driven-development/header.webp
image_alt: "Ilustración de Spec Kit: una persona supervisa agentes de IA que convierten especificaciones, planes y tareas en código y servicios en la nube."
categories: [ai, architecture]
tags: [sdd, spec-driven-development, ai, agents, software-engineering, architecture, spec-kit, github-copilot, azure-devops, microsoft]
author: "Alberto Ruiz"
published: true
excerpt: "Spec Kit ayuda a llevar Specification-Driven Development a proyectos reales mediante especificaciones, planes técnicos y tareas que guían el trabajo con agentes de IA."
---

Tiempo de lectura: 4 min

En el [primer artículo](https://albertoruizmb.github.io/es/blog/2026/05/21/specification-driven-development-ai-agents/) de esta serie hablaba de **Specification-Driven Development** como una forma de recuperar el valor de las especificaciones en el desarrollo asistido por agentes de IA.

En esta segunda entrega quiero ir directamente a la práctica: **Spec Kit**.

Spec Kit es una herramienta pensada para aplicar SDD en proyectos reales. Su objetivo no es que la IA construya software sola, sino ordenar mejor el trabajo antes de llegar al código. En lugar de pedir a un agente que implemente una funcionalidad a partir de una instrucción suelta, Spec Kit propone trabajar con una secuencia más clara: especificación, plan técnico, tareas e implementación.

La diferencia es importante. Cuando usamos agentes de IA sin suficiente contexto, podemos obtener código rápido, pero también decisiones implícitas que nadie ha validado: cómo se autentican los usuarios, cómo se gestionan errores, qué restricciones de seguridad existen, qué arquitectura debe respetarse, qué datos se almacenan, qué trazabilidad queda o qué significa que una funcionalidad esté terminada.

Spec Kit intenta reducir ese problema haciendo que el agente trabaje sobre artefactos explícitos.

## De la especificación al código

El flujo básico de Spec Kit parte de una especificación. Esta especificación no debería ser un documento largo ni burocrático. Debe explicar qué se quiere construir, para quién, con qué alcance, qué escenarios quedan fuera y qué criterios de aceptación se utilizarán.

Después llega el plan técnico. Aquí se aterrizan las decisiones de implementación: arquitectura, tecnologías, datos, integraciones, seguridad, observabilidad, pruebas y despliegue. No se trata solo de decir “se creará una API”, sino de explicar cómo encaja esa API en el sistema real.

El siguiente paso es dividir el trabajo en tareas. Este punto es especialmente útil cuando trabajamos con agentes de IA. Las tareas pequeñas son más fáciles de revisar, reducen ambigüedades y evitan que el asistente genere grandes bloques de código difíciles de controlar.

Finalmente llega la implementación. El agente puede ayudar a generar código, pruebas o documentación, pero siempre contra una especificación y un plan previamente definidos. Si aparece una duda, lo correcto no es resolverla solo en el código, sino actualizar también el artefacto correspondiente.

Esta es la idea central: el código no debe ser el único lugar donde vive la verdad del sistema.

## Aplicación con tecnologías Microsoft

Spec Kit encaja bien en organizaciones que ya trabajan con **GitHub, GitHub Copilot, Azure DevOps y Azure**.

Con GitHub, las especificaciones, planes y tareas pueden vivir versionados junto al código. Esto permite que una pull request no revise solo la implementación, sino también si el cambio respeta la especificación y el plan técnico. GitHub Actions puede añadir validaciones automáticas, pruebas, análisis estático y controles de seguridad.

Con GitHub Copilot, el equipo puede usar esos artefactos como contexto. En lugar de pedirle “implementa esta funcionalidad”, se le puede pedir que trabaje sobre una especificación concreta, que detecte ambigüedades, que proponga un plan técnico o que implemente una tarea delimitada.

En organizaciones que usan Azure DevOps, Spec Kit no debería interpretarse como un sustituto automático del flujo existente. Puede convivir con Azure Boards, Azure Repos y Azure Pipelines si el equipo decide versionar los artefactos de especificación junto al código y vincular las tareas resultantes al backlog habitual.

En proyectos desplegados sobre Azure, el plan técnico puede recoger las decisiones propias de la arquitectura elegida: servicios de cómputo, identidad, seguridad, observabilidad, integración, datos e infraestructura como código.

El valor no está en mencionar muchas tecnologías. Está en decidirlas antes de generar código y dejar claro por qué se usan.

## La constitución del proyecto

Uno de los elementos más interesantes de Spec Kit es la constitución del proyecto. Es un conjunto de reglas que el agente debe respetar durante el trabajo.

En un entorno Microsoft, esta constitución puede incluir decisiones como usar Microsoft Entra ID para autenticación, evitar secretos en código, priorizar Managed Identities, documentar APIs con OpenAPI, desplegar mediante pipelines, definir infraestructura con Bicep o Terraform y aplicar observabilidad desde el inicio.

También puede recoger criterios de arquitectura: cuándo usar Azure Functions frente a App Service, cuándo tiene sentido AKS, cómo versionar APIs, qué patrones de integración están permitidos o qué convenciones deben seguir los repositorios.

Esto no sustituye la revisión técnica, pero evita partir de cero en cada funcionalidad. El agente trabaja con reglas más claras y el equipo tiene una base común para evaluar el resultado.

## Gobierno mínimo

Spec Kit debe adoptarse con control. Si cada equipo define sus propias plantillas, reglas y criterios, el resultado puede ser más desorden, no menos.

Conviene definir un marco mínimo: qué plantillas son oficiales, qué debe contener una especificación, qué reglas debe incluir la constitución, cómo se revisan los planes técnicos y qué controles automáticos deben ejecutarse antes de aceptar cambios.

También hay que delimitar qué puede hacer un agente. Puede generar código, pruebas, documentación o propuestas de infraestructura. Pero no debería aprobar sus propios cambios, modificar políticas de seguridad ni desplegar directamente en producción sin revisión humana.

Aquí es donde Spec Kit debe conectarse con el gobierno real de la organización: arquitectura, seguridad, calidad, DevOps y operación.

## Conclusión

Spec Kit es interesante porque convierte Specification-Driven Development en algo más operativo.

No elimina la complejidad del desarrollo de software. No convierte a los agentes de IA en sustitutos del equipo. Pero ayuda a trabajar mejor con ellos: primero especificar, después planificar, luego dividir en tareas y finalmente implementar con contexto.

Para organizaciones que trabajan con tecnologías Microsoft, el encaje es natural. GitHub Copilot, GitHub, Azure DevOps y Azure ofrecen un entorno adecuado para probar este enfoque.

El valor real estará en usar Spec Kit con criterio: no como una moda, sino como una forma de hacer que el desarrollo asistido por IA sea más claro, más trazable y más gobernable.
