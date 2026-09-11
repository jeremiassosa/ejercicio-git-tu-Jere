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

