---
layout: post
title: "Por qué la mayoría de las decisiones técnicas importantes no están en el código"
date: 2026-02-04
slug: most-important-technical-decisions-are-not-in-code
categories: [arquitectura]
tags: [arquitectura-de-software, decisiones-tecnicas, criterio-arquitectonico]
author: "Alberto Ruiz"
excerpt: "El código materializa decisiones, pero rara vez es el lugar donde se toman las más importantes."
---

Cuando se habla de decisiones técnicas, la conversación suele acabar girando alrededor del código. Qué lenguaje usar, qué framework elegir, cómo estructurar los módulos o qué patrón aplicar. Son decisiones visibles, tangibles y relativamente fáciles de discutir. Sin embargo, con el tiempo, uno empieza a notar que esas decisiones, siendo relevantes, no suelen ser las que determinan de verdad el éxito o el fracaso de un sistema.

La mayoría de las decisiones técnicas importantes se toman antes de escribir una sola línea de código. O, en muchos casos, sin tocarlo en absoluto.

El código es el lugar donde las decisiones se concretan, no donde suelen nacer. Para cuando alguien abre el editor, ya se ha decidido qué problema se va a resolver, qué alcance tendrá la solución y qué compromisos se están dispuestos a asumir. Se ha decidido, explícita o implícitamente, qué tipo de sistema se está construyendo y para quién.

Muchas de esas decisiones no aparecen en el repositorio. No están en una función ni en una clase. Están en conversaciones, en documentos incompletos, en acuerdos tácitos o, a veces, en simples silencios. Y aun así condicionan todo lo que viene después.

Uno de los ejemplos más claros es la definición de límites. Dónde empieza y termina un sistema, qué responsabilidades asume y cuáles delega. Un mal límite no suele generar errores inmediatos, pero introduce fricción constante. Cada nueva funcionalidad cuesta más de lo que debería, cada cambio parece más arriesgado y el sistema empieza a resistirse a su propia evolución. Ninguna refactorización local arregla eso.

Algo parecido ocurre con el ownership. Quién es responsable de qué parte del sistema y con qué grado de autonomía. Cuando esa responsabilidad no está clara, el código puede ser impecable y aun así el sistema se vuelve frágil. Nadie se siente legitimado para tomar decisiones, los cambios se posponen y los problemas se enquistan. El resultado no suele ser un bug, sino una degradación progresiva.

Las decisiones sobre identidad, acceso y permisos suelen vivir todavía más lejos del código. Son incómodas, requieren pensar en escenarios que nadie quiere imaginar y rara vez generan una recompensa visible a corto plazo. Hasta que algo falla. Entonces se descubre que esas decisiones, tomadas con prisa o por inercia, eran mucho más importantes que la elección de cualquier librería.

También están las decisiones operativas. Cómo se despliega, cómo se observa, cómo se recupera un sistema cuando algo va mal. Son decisiones técnicas en toda regla, pero no suelen formar parte del relato principal del desarrollo. Sin embargo, determinan la experiencia real del sistema en producción, que es donde los usuarios —y los problemas— existen de verdad.

Hay, además, un tipo de decisión especialmente silenciosa: la decisión de no hacer. Qué escenarios excepcionales no se contemplan, cuáles se asumen improbables, qué complejidad se decide no incorporar. Estas decisiones casi nunca se documentan, pero condicionan profundamente el diseño. Cuando no son explícitas, reaparecen más tarde en forma de malentendidos.

Todo esto explica por qué muchos perfiles menos experimentados asocian impacto técnico con código visible. Es lógico: es lo que se puede revisar, medir y comparar. El problema aparece cuando una organización refuerza esa visión y acaba valorando únicamente lo que se ve en un commit. En ese punto, las decisiones más importantes se toman sin el rigor que merecen, simplemente porque no encajan bien en un diff.

La arquitectura, en su sentido más práctico, consiste precisamente en hacer visibles esas decisiones invisibles. En tomar decisiones cuando todavía hay margen para equivocarse sin consecuencias graves. En aceptar que muchas de ellas no tienen una respuesta correcta universal, sino una respuesta adecuada a un contexto concreto.

Con el tiempo, el trabajo técnico deja de consistir solo en escribir buen código y pasa a centrarse en reducir ambigüedad antes de que llegue al código. En crear un marco donde el desarrollo pueda avanzar sin necesidad de reescribirlo todo cada pocos meses. En asumir que no todas las decisiones se pueden automatizar ni encapsular en una abstracción elegante.

El código sigue siendo fundamental. Pero cuando realmente importa, las decisiones que más pesan suelen haberse tomado mucho antes de que alguien pulsara “guardar”.
