# Bloque 4: Levantar un Servidor HTTP y peticiones con curl

## Ejercicio 6: Servidor Mínimo (06-servidor.js)

    - ¿Qué es un servidor HTTP y qué hace el módulo http de Node?
        + Es un programa que recibe peticiones y devuelve respuestas, mientras que el modulo http de Node es la herramienta que te permite ejecutar un servidor.
    - ¿Qué representan req y res en un servidor de Node?
        + El req y el res vendrian a representar las peticiones (req/request) que se le ahcer al servidory por otro lado las respuestas (res/response) del mismo.
    - ¿Qué es un puerto y qué significa que un servidor "escuche" en el 3000?
        + El puerto vendria a ser la forma de identificar al servidor dentro de la red y la forma de enviar o recibir informacion del mismo, al decir que escuche en el 3000 esta indicando que por asi que queda reservado ese canal exclusivamente para el.
    - ¿Qué es localhost?
        + El localhost es el nombre de dominio que se le implementa por defecto a la misma computadora donde se corrio el servidor localmente,la dirección IP numérica estándar es 127.0.0.1.
    - ¿Qué hace curl y por qué es útil para probar un servidor sin usar el navegador?
        + Es un programa para la terminal que ejecuta al igual que los de navegador, pero sin algun tipo de apartado visual y es util porque te muestra la respuesta directa y cruda del servidor al instante

## Ejercicio 7: Servidor con Rutas (07-rutas.js)

    - curl http://localhost:3000/
      + Inicio
        Indica 200 OK

    - curl http://localhost:3000/alumnos
      + Barua, Tobi y Gio
        Indica 200 OK
        
    - curl http://localhost:3000/otra-ruta
      + No encontrado
        Indica error 404 Not Found