1. ¿Qué sucedio al usar async y await?
El programa espera a que las opciones de 'add', 'remove' y 'complete' se completen antes de seguir ejecutándose.

2. ¿Qué sucedio al usar el método then()?
Funciona igual que con el await pero se anidan más promesas, entonces el código se hizo más largo.

3. ¿Qué diferencias encontraste entre async, await y el método then()?
con 'async' y 'await' se entiende más el códido por la semántica de los términos utilizados. Igual pasa con la lectura de los errores, para poder leer un error con then() hay que usar catch(), eso hace al código más robusto.