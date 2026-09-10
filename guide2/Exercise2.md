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