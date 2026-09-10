### Execise 2

## A.1 — Básico (método GET)

   # ¿Qué versión de TLS/protocolo aparece en el handshake?
        La version de TLS es la V1.3
        "SSL connection using TLSv1.3 / AEAD-AES256-GCM-SHA384 / [blank] / UNDEF"

   # ¿Cuál es el código de status de la respuesta?
        El codigo de estatus de la respuesta es 200
        "HTTP/2 200"


   # Anotá al menos 3 headers de la respuesta y qué creés que significa cada uno.
       - "content-type: application/json; charset=utf-8"
        + Identifica que el contenido de la aplicacion viene en un archivo de formato jso

       - "server: cloudflare"
        + Indica al servidor que se conecto

       - "content-length: 292"
        + Indica el tamaño del contenido, en este caso 292 bytes

## A.2 — GET con query params

   # ¿Cuántos resultados devolvió?
       - En este caso devolvio 5 objetos con resultados con postId 1.
   # ¿Cómo armaste la URL para filtrar?
       - "comments?postId=1"
        + La URL se se arma con el '?' entre el 'comments' para poder filtrar los comentarios que tienen los postId con valor a 1.

## A.3 — POST

   # ¿Qué código de status devolvió?
     - Me devolvio 201 Create.
   # ¿Qué id le asignó el servidor al nuevo recurso? ¿Por qué creés que pasa eso, sabiendo que la API no persiste datos? 
     - La ID que se le asigno al objeto que mande es la id 101. Crearia que API no almacena estas. 

## A.4 — PATCH o PUT

   # ¿Qué diferencia notás (o investigás) entre usar PUT y PATCH?
      - Segun lo que vi el PUT cambia todo el objeto por completo, a diferencia del PATCH que puede cambiar al obajeto que llamemos pero no necesariamente por completo, puede cambiarlo por partes o secciones.
   # ¿El body de la respuesta refleja el cambio que mandaste?
      - Si, por suerte
        + curl -X PUT https://jsonplaceholder.typicode.com/posts/1 \
            -H "Content-Type: application/json" \
            -d '{"userId": 1, "id": 9, "title": "koala", "body": "el koala es un animal"}'

        + Respuesta:
          {
            "userId": 1,
            "id": 1,
            "title": "koala",
            "body": "el koala es un animal"
          }%                   