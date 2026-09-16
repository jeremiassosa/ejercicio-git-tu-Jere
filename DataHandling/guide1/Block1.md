# Ejercicio 1: Comparar bases de datos relacionales y no relacionales
## Objetivo: Investigar y explicar con tus propias palabras qué diferencia a una base de datos SQL de una NoSQL, y en qué casos elegirías cada una.

## Requerimientos:
 + Leé el material de la sección 3 del MATERIAL de esta clase, y las referencias que ahí se mencionan (documentación de IBM y de MongoDB).
 + Creá un archivo llamado respuestas-sql-nosql.md en tu repo, y respondé ahí las preguntas de abajo.

1. ¿Cuál es la diferencia principal entre una base de datos relacional (SQL) y una no relacional (NoSQL)?
    + La diferencia principal entre ambas es la forma de almacenar datos que una es que el SQL son relacionales y usan tablas con filas y columnas, mientras que los NoSQL no son relacionales y permiten que los datos no sean estructurados por tablas o columnas.

2. Nombrá al menos dos motores de base de datos relacionales, y dos no relacionales (de categorías distintas: documentos, clave-valor, o columnar).
    - SQL
        + Oracle
        + Microsoft SQL Server
    - NoSQL
        + MongoDB (Categoría: Documentos)
        + Redis (Categoría: Clave-valor)

3. Tomemos el ejemplo de biblioteca (authors, books, loans) que ya usaste en el MATERIAL. En una base relacional, esos datos viven en 3 tablas separadas, conectadas por claves foráneas. Si tuvieras que modelar ese mismo ejemplo como base de datos de documentos (tipo MongoDB), una opción posible sería tener un solo documento por libro, con los datos del autor "adentro" del documento (en vez de en otra tabla aparte). Con esa idea como referencia: elegí 2 o 3 entidades de tu propio proyecto (por ejemplo, personajes y su casa/facción) y describí brevemente cómo se verían como documentos, en vez de como tablas separadas.
{
    "Nombre": "Jeremias Sosa",
    "Email": "jeremias.sosa@gm2dev.com",
    "Direccion": {
        "Calle": "Burela 1102",
        "Ciudad": "Buenos Aires",
        "CodigoPostal": "1234"
    }
}

4. ¿En qué situación elegirías una base no relacional en vez de una relacional? Dame un ejemplo concreto (no tiene que ser de tu proyecto).
    Elegiria una base de datos no relacional cuando necesite ingresar muchos datos por segundo a gran velocidad y la estructura de esa información cambia constantemente o no es fija, uno de los ejemplo puede ser mercado libre las cuales reciben e envian miles de solucitudes por segundo a la vez.

