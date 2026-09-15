# Ejercicio 2: Por qué separamos los datos en varias tablas
## Objetivo: Entender el problem solved by normalization

## Requerimientos:

 + Leé el material de la sección 8 del MATERIAL de esta clase, y las referencias que ahí se mencionan.
 + Creá un archivo llamado respuestas-normalizacion.md en tu repo, y respondé ahí las preguntas de abajo.

1. ¿Qué problema concreto tiene una tabla única que repite datos de un mismo autor en cada fila de libro (en vez de separar autores y libros en dos tablas)?
    + El problema que hay es cuando se actualiza y se desperdicia ese espacio. Si un autor escribe diez libros, su nombre, fecha de nacimiento y pais se repiten diez veces y si te equivocas al escribir su apellido en un libro, los datos no van a funcionar, si se borra el único libro que un autor tiene registrado se terminaria borrando todos sus otros libros 

2. ¿Qué es la normalización, con tus propias palabras?
    + Es el proceso de organizar las tablas de una base de datos para que todo se guarde en un solo lugar, el objetivo es eliminar la información repetida, evitar errores al actualizar los datos y estructurar todo de forma lógica y eficiente.

3. La normalización tiene niveles formales llamados 1FN, 2FN y 3FN, cada uno más estricto que el anterior. Investigá qué es la 1FN (Primera Forma Normal). Explicá con tus propias palabras qué regla exige.
    + La 1FN le exige a cada celda de una tabla contenga un único valor atómico y que no existan grupos ni listas de datos repetidos en una misma fila. 

4. Entidad es el nombre que le damos a cada "cosa" distinta que modelamos como su propia tabla (por ejemplo, en el ejemplo de biblioteca, "autor" es una entidad y "libro" es otra entidad). Pensá en el dominio de tu propio proyecto de React: nombrá 2 entidades distintas que tenga tu dominio, y para cada una, un dato que le pertenece SOLO a esa entidad (por ejemplo: la nacionalidad le pertenece al autor, no al libro).
    + En una app de musica las dos entidades son:
        - Canción con su dato exclusivo duracionSegundos
        - Artista con su dato exclusivo biografiaAutor