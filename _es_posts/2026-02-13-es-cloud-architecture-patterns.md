---
layout: post
title: "Patrones de arquitectura cloud: bloques fundamentales para sistemas escalables"
date: 2026-02-13
slug: cloud-architecture-patterns
categories: [cloud, architecture]
tags: [cloud-architecture, architecture-patterns, distributed-systems, system-design]
author: "Alberto Ruiz"
excerpt: "Los patrones de arquitectura cloud recogen soluciones probadas para problemas recurrentes en el diseño de sistemas y ayudan a construir aplicaciones escalables, resilientes y mantenibles."
image: /assets/images/posts/cloud-architecture-patterns/header.webp
image_alt: "Ilustración de una arquitecta analizando patrones de arquitectura cloud para diseñar sistemas distribuidos escalables y resilientes."
published: true
---

Las plataformas cloud modernas ofrecen una enorme cantidad de servicios,
capacidades y modelos de despliegue. Sin embargo, construir sistemas
escalables y fiables en la nube no consiste únicamente en elegir los
servicios adecuados. Depende, sobre todo, de **cómo se combinan dentro de
una arquitectura coherente**.

Aquí entran en juego los **patrones de arquitectura cloud**: soluciones
reutilizables para problemas recurrentes en sistemas distribuidos. Ayudan a
estructurar aplicaciones, gestionar datos, tolerar fallos y absorber cambios
en la carga. No sustituyen al diseño ni garantizan que una solución sea
correcta, pero ofrecen un vocabulario y unos puntos de partida contrastados.

En la práctica, un sistema no aplica un único patrón de forma aislada. Lo
habitual es combinarlos para resolver problemas distintos de resiliencia,
rendimiento o escalabilidad.

<pre class="mermaid">
flowchart LR
    Client[Clientes] --> API[Servicio API]

    API --> Cache[(Caché)]
    API --> Circuit[Interruptor de circuito]

    Circuit --> Service[Servicio backend]
    Service --> Queue[Cola de mensajes]

    Queue --> Worker1[Worker]
    Queue --> Worker2[Worker]

    Worker1 --> DB[(Base de datos)]
    Worker2 --> DB
</pre>

## Por qué importan en cloud

Diseñar en la nube implica asumir condiciones propias de los sistemas
distribuidos: comunicación por red, fallos parciales, latencia variable,
escalado independiente y, en muchos flujos asíncronos, consistencia eventual.
Un patrón no elimina esas propiedades; hace explícita una forma de tratarlas.

También aporta un lenguaje común. Cuando un equipo habla de *Circuit
Breaker*, *Retry* o *Queue-Based Load Leveling*, puede discutir decisiones y
límites concretos sin empezar cada vez desde cero.

## Patrones habituales

### Retry Pattern

Los servicios remotos pueden sufrir fallos transitorios: una pérdida puntual
de conectividad, una indisponibilidad breve o una respuesta de limitación de
capacidad. El patrón *Retry* vuelve a intentar una operación que es razonable
esperar que tenga éxito tras una espera.

Un reintento no debe ser automático ni infinito. Conviene limitar el número de
intentos, aplicar *backoff* —a menudo exponencial con aleatoriedad— y respetar
los tiempos de espera y las señales de limitación del servicio. Además, la
operación debe ser idempotente, o disponer de una clave de idempotencia: si el
servidor completó la primera solicitud pero se perdió la respuesta, repetirla
no debe duplicar un pago, un pedido o un registro.

Para errores permanentes o de validación, reintentar solo añade latencia. Una
política agresiva también puede sobrecargar una dependencia que ya está bajo
presión; por eso los reintentos se combinan habitualmente con presupuestos de
reintento y con *Circuit Breaker*.

### Circuit Breaker

Si una dependencia empieza a fallar de forma persistente, seguir enviándole
peticiones —o reintentándolas— puede agotar conexiones e hilos y propagar el
problema al resto del sistema. El patrón **Circuit Breaker** deja de invocar
temporalmente esa dependencia y falla rápido, o devuelve una respuesta de
degradación controlada cuando el caso de uso lo permite.

Su comportamiento suele modelarse con tres estados: *closed* permite las
llamadas y mide los fallos; *open* las rechaza durante un intervalo; y
*half-open* deja pasar un número limitado de comprobaciones antes de cerrar el
circuito o abrirlo de nuevo. Los umbrales, ventanas de tiempo y *timeouts*
deben ajustarse a la dependencia y observarse en producción.

<pre class="mermaid">
stateDiagram-v2
    [*] --> Cerrado
    Cerrado --> Abierto: Umbral de fallos alcanzado
    Abierto --> Semiabierto: Finaliza el intervalo de apertura
    Semiabierto --> Cerrado: Comprobaciones correctas
    Semiabierto --> Abierto: Falla una comprobación
</pre>

No es un sustituto del manejo de errores de negocio ni de unos *timeouts*
razonables. Su objetivo es proteger llamadas remotas que probablemente fallen
y dar margen a la dependencia para recuperarse.

### Queue-Based Load Leveling

Las cargas no llegan siempre de forma uniforme. *Queue-Based Load Leveling*
coloca una cola duradera entre quien produce trabajo y quien lo procesa, de
modo que el consumidor puede hacerlo a un ritmo seguro. Así se absorben picos,
se desacopla la recepción del procesamiento y los *workers* pueden escalar de
forma independiente.

<pre class="mermaid">
flowchart LR
    A[Clientes] --> B[Servicio API]

    B --> C[Cola de mensajes]

    C --> D[Worker 1]
    C --> E[Worker 2]
    C --> F[Worker N]

    D --> G[(Base de datos)]
    E --> G
    F --> G
</pre>

La cola no crea capacidad ilimitada: si la tasa media de entrada supera a la
de consumo, crecen tanto la profundidad como la latencia. Hay que monitorizar
ambas, definir límites y escalar consumidores sin trasladar la sobrecarga a la
siguiente dependencia. Muchas colas ofrecen entrega *al menos una vez*, por lo
que los consumidores deben ser idempotentes; también conviene prever reintentos
y una cola de mensajes no procesables para los fallos persistentes. El orden
no debe darse por supuesto cuando hay varios consumidores.

### Cache-Aside

El patrón **Cache-Aside** reduce lecturas frecuentes del almacén de datos. La
aplicación consulta primero la caché; ante un fallo de caché, lee del origen,
devuelve el dato y lo incorpora a la caché para peticiones posteriores.

<pre class="mermaid">
flowchart TD
    A[Aplicación] --> B{¿Dato en caché?}

    B -->|Sí| C[Devolver dato en caché]

    B -->|No| D[Leer de la base de datos]

    D --> E[Guardar en caché]

    E --> C
</pre>

Es especialmente útil para datos leídos con frecuencia y tolerantes a cierta
desactualización. A cambio, introduce una copia adicional y obliga a decidir
cómo invalidar o actualizar datos tras una escritura, cuánto tiempo conservarlos
y cómo evitar que muchos fallos de caché simultáneos sobrecarguen el origen.
No es una sustitución transparente de la base de datos ni garantiza
consistencia fuerte.

### Bulkhead Pattern

El patrón **Bulkhead** aísla recursos para que un fallo o una carga excesiva en
una parte del sistema no consuma la capacidad de las demás. Puede materializarse
en *pools* de conexiones o hilos separados, límites de concurrencia, colas
independientes o instancias y despliegues aislados.

El nombre procede de los compartimentos estancos de un barco: una inundación en
uno de ellos no debería hundir toda la embarcación. El coste es una utilización
potencialmente menor de recursos y más límites que operar. Por eso las fronteras
de aislamiento deben responder a dependencias, prioridades y requisitos de
disponibilidad reales, no a una partición arbitraria.

### Arquitectura dirigida por eventos

La **arquitectura dirigida por eventos** no es un patrón puntual, sino un
estilo arquitectónico. Los productores publican hechos que ya han ocurrido y
los consumidores interesados reaccionan de forma asíncrona, normalmente a
través de un *broker* o canal de eventos. En un modelo de publicación y
suscripción, el productor no necesita conocer a sus consumidores.

Este estilo facilita integrar y escalar componentes de manera independiente,
pero desplaza parte de la complejidad: contratos y versiones de eventos,
observabilidad de flujos asíncronos, reintentos, procesamiento duplicado y
consistencia eventual. No conviene confundir un evento con un comando: el
primero comunica un hecho; el segundo solicita que otro componente haga algo.
Para una interacción sencilla que exige respuesta inmediata, una llamada
síncrona puede ser más adecuada.

## Los patrones como herramienta de diseño

Los patrones no se aplican de forma mecánica. Son herramientas para razonar
sobre decisiones y sus consecuencias. Un diseño puede combinar *Retry* y
*Circuit Breaker* para tratar fallos transitorios sin insistir ante una caída
persistente; una cola con consumidores competidores para desacoplar trabajo; o
caché y eventos para propagar invalidaciones o actualizaciones.

La combinación correcta depende de los requisitos: latencia aceptable,
consistencia, coste, semántica de entrega, tolerancia a fallos y capacidad de
operación. Nombrar un patrón no resuelve esos compromisos; obliga a hacerlos
explícitos.

## Reflexión final

Los servicios cloud evolucionan, pero los problemas de distribución, fallos y
capacidad permanecen. Comprender estos patrones y estilos ayuda a abordarlos
con decisiones conscientes, y a construir sistemas que puedan escalar,
recuperarse y mantenerse con el tiempo.
