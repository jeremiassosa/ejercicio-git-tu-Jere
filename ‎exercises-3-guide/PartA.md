# Reto 1 — Ver tu propia request

### Objetivo: Lograr que el servidor te devuelva, en el body de la respuesta, exactamente los headers que vos le mandaste.

## Pista: el endpoint que necesitás es /headers.

    -  curl https://httpbin.org/headers \
        -H "X_Alumno: Jeremias Sosa"

        Respuesta :

        {
        "headers": {
            "Accept": "*/*", 
            "Host": "httpbin.org", 
            "User-Agent": "curl/8.7.1", 
            "X-Alumno": "Jeremias Sosa", 
            "X-Amzn-Trace-Id": "Root=1-6aa41796-6e9bf92f19f6aca766eb1ede"
        }
        }

## Extra: agregá un header personalizado tuyo (por ejemplo X-Alumno: tu-nombre) y confirmá que aparece en la respuesta.



# Reto 2 — Mandar Body y Content-Type, y verificar que llego bien
### Objetivo: Enviar una petición POST con un body en formato JSON (inventá los campos que quieras) al endpoint /post, y comprobar en la respuesta que el servidor recibió tanto tu body como el header que indica el tipo de contenido.

### Preguntas para responder con lo que veas en la respuesta:

## ¿En qué parte del JSON de respuesta aparece el body que mandaste?
    El JSON que mande aparece en el body llamado como "data".
## Qué pasa si mandás el body sin indicar el tipo de contenido? Probalo y compará.
    Si mandas sin especificar que es un JSON lo guarda en el apartado de "form".


# Reto 3 — Provocar un status code a pedido
### Objetivo: El endpoint /status/{codigo} responde con el código HTTP que le pidas, sin body. Conseguí que el servidor te devuelva un 404, y después un 500.
    - curl -I https://httpbin.org/status/404 
    - curl -I https://httpbin.org/status/500

### Preguntas para responder:

## ¿Cómo te das cuenta del código de status sin ver ningún body en la respuesta? ¿Qué flag o técnica usaste?
    Para saber el status del codigo use -I como flag  asi me da la informacion al llamar a la API, y la misma te devuelve HTTP/2 404 o 500 dependiendo de el error que se produzca

