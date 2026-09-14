# Version de node

## node --version
    v24.19.0

# Bloque 1: La primera interacción (Salir del Navegador)

## Ejercicio 1: Mi primer script en el servidor (01-hola.js)

    - ¿Qué es Node.js? ¿Es un lenguaje, un framework o un entorno de ejecución? 
      + Node.js es un entorno de ejecucion que nos permite ejecutar codigos de JavaScript, todo desde la terminal sin utilizar otro tipo de entorno. 

    - ¿Qué diferencia hay entre ejecutar JavaScript en el navegador y ejecutarlo con Node.js?
      + La diferencia entre ejecutarlo es que el entorno del navegador web trabaja menos eficientemente que el de node ya que el mismo es asincrono, permitiendo que puede gestionar muchas mas conexciones mas rapidamente.

    - ¿Por qué window y document no existen en Node.js? ¿Qué objeto global tiene Node en su lugar?
      + Ya que no estan en una instancia de navegador, en cambio estan siendo ejecutadas entorno de node, el  cual no cuenta con un documento, ni con una ventana solamente ejecuta el archivo js.