---
layout: post
title: "Specification-Driven Development: el regreso de las especificaciones en la era de los agentes de IA"
date: 2026-05-21
slug: "specification-driven-development-ai-agents"
categories: [ia, architecture, engineering]
tags: [sdd, spec-driven-development, ai, agents, software-engineering, architecture, openspec, spec-kit]
author: Alberto Ruiz
excerpt: "Specification-Driven Development está devolviendo protagonismo a las especificaciones en la ingeniería de software moderna, especialmente en escenarios de desarrollo asistido por agentes de IA."
---

Tiempo de lectura: 5 min

El desarrollo asistido por inteligencia artificial está obligando a revisar una idea que parecía haber perdido protagonismo: la especificación.

Durante los últimos años, la conversación se ha centrado sobre todo en la capacidad de los modelos para generar código. Sin embargo, a medida que los agentes empiezan a asumir tareas más amplias —analizar, planificar, modificar, validar o coordinar cambios—, el verdadero problema deja de ser únicamente la productividad. La cuestión empieza a ser otra: cómo expresar la intención de forma suficientemente clara, persistente y verificable para que pueda ser entendida tanto por personas como por sistemas automatizados.

Ahí es donde Specification-Driven Development, o SDD, vuelve a poner las especificaciones en el centro.

## Especificar antes de construir

El Specification-Driven Development no consiste simplemente en escribir más documentación. Su idea principal es cambiar el punto de partida del desarrollo: antes de pedir a una herramienta o a un agente que implemente una solución, se define de forma estructurada qué se quiere construir, por qué, bajo qué restricciones y con qué criterios de validación.

En un [artículo publicado en el sitio de Martin Fowler sobre herramientas recientes de SDD](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html), Birgitta Böckeler lo formula de manera muy clara: la especificación se escribe antes del código y pasa a actuar como fuente de verdad compartida entre la persona y la IA. Esa definición es sencilla, pero ayuda a separar SDD de una práctica mucho más informal basada únicamente en prompts sucesivos o conversaciones efímeras con un asistente.

En un modelo tradicional, el código suele convertirse rápidamente en la fuente principal de verdad. La especificación inicial orienta el trabajo, pero pronto queda subordinada a la implementación. En un enfoque SDD, la especificación intenta mantenerse viva al menos durante el ciclo de vida del cambio que se está desarrollando. En los modelos más ambiciosos, puede incluso actuar como referencia permanente para la evolución posterior de una funcionalidad o del sistema.

Este cambio es especialmente relevante en contextos de IA. Cuando el desarrollo se apoya en agentes, una conversación o una serie de prompts sueltos no bastan para gobernar adecuadamente el trabajo. El contexto se pierde, las decisiones quedan dispersas y resulta difícil saber si la implementación final respeta realmente la intención original.

SDD intenta resolver precisamente ese problema: convertir la intención en un artefacto explícito, revisable y utilizable durante todo el proceso de construcción.

## De los prompts al contexto gobernado

Uno de los aprendizajes más claros del desarrollo asistido por IA es que el prompt aislado escala mal. Puede funcionar para una prueba rápida, una utilidad pequeña o un experimento, pero empieza a mostrar límites cuando el software crece, cuando hay varias decisiones acumuladas o cuando intervienen distintos miembros del equipo.

El problema no está solo en la calidad del modelo. Está en la falta de contexto persistente.

Los enfoques de SDD intentan responder a esa limitación convirtiendo las especificaciones en una fuente de contexto estructurado. En lugar de depender de lo que el agente recuerde en una sesión concreta, el conocimiento relevante queda expresado en artefactos que forman parte del proyecto.

Esto permite cambiar la conversación. Ya no se trata únicamente de pedirle a la IA que escriba código, sino de darle un marco de trabajo sobre el que pueda razonar, proponer, implementar y validar con mayor consistencia.

Ese matiz es importante. La especificación no es solo una descripción funcional; empieza a comportarse como una interfaz de coordinación entre intención humana y ejecución automatizada.

## Un ecosistema de herramientas todavía abierto

SDD no se está materializando a través de una única herramienta ni de un estándar cerrado. Al contrario, el ecosistema está todavía en formación y conviven aproximaciones con niveles de ambición diferentes.

Birgitta Böckeler analiza, por ejemplo, tres herramientas que se presentan o se entienden dentro de esta conversación —Kiro, Spec Kit y Tessl—, y distingue entre enfoques donde la especificación aparece al inicio del trabajo, otros donde permanece como ancla durante la evolución del cambio y otros más ambiciosos donde la especificación aspira a convertirse en la fuente principal desde la que se deriva el código.

OpenSpec encaja dentro de ese mismo movimiento como una aproximación ligera para introducir una capa de especificación en proyectos que trabajan con asistentes o agentes de IA. Su propuesta resulta interesante precisamente porque intenta evitar que los requisitos vivan solo en el historial de chat: antes de tocar el código, se explicita qué se quiere construir, con qué intención y bajo qué restricciones.

Spec Kit, por su parte, representa una apuesta más orientada a operacionalizar SDD en workflows con agentes de codificación. No es casualidad que este tipo de herramientas empiecen a organizar el trabajo en torno a artefactos como especificaciones, planes y tareas. Lo relevante no es solo la herramienta concreta, sino el patrón que empieza a repetirse: la especificación vuelve a convertirse en un punto de control del proceso de desarrollo.

## Más allá de generar código

Reducir SDD a generación automática de código sería quedarse en la parte más visible, pero no necesariamente en la más importante.

El verdadero valor aparece cuando la especificación influye en todo el ciclo de vida del cambio: análisis, diseño, planificación, implementación, revisión, testing y evolución posterior. En ese escenario, el código sigue siendo esencial, pero deja de ser el único punto de control.

La especificación permite mantener trazabilidad entre necesidad, decisión e implementación. Ayuda a que los equipos humanos revisen mejor qué se está construyendo. Y ofrece a los agentes un contexto más estable que una conversación temporal.

Esto no elimina la ingeniería. Al contrario, la hace más importante. Cuanto más capaces son los agentes de ejecutar tareas, más relevante se vuelve definir bien el problema, acotar el alcance, expresar restricciones y revisar críticamente los resultados.

## De la experimentación a la adopción controlada

SDD todavía no es un estándar cerrado ni existe una única forma universal de aplicarlo. Las herramientas actuales evolucionan rápido y conviven enfoques con distintos niveles de madurez, desde aproximaciones ligeras basadas en especificaciones versionadas hasta modelos más ambiciosos donde la especificación aspira a convertirse en el eje principal del ciclo de desarrollo.

Todo parece indicar que estamos en un momento en el que resulta especialmente importante adoptar SDD con criterio: acotando bien los casos de uso, definiendo cómo se escriben y revisan las especificaciones, integrándolo con los flujos de trabajo existentes y manteniendo siempre supervisión técnica sobre las decisiones relevantes.

En ese sentido, SDD no debería entenderse como una promesa de automatización total, sino como una práctica de ingeniería para mejorar la forma en que se expresa, gobierna y valida la intención durante el desarrollo de software.

Su valor aparece precisamente en ese espacio intermedio entre los prompts improvisados y la documentación tradicional: más estructura, más trazabilidad y una relación más clara entre personas, agentes y código.