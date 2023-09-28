# README para Calculadora Simple

Este es un README para la calculadora simple que utiliza HTML, CSS y JavaScript.

## ¿Qué hace `document.querySelector(".display");`?

`document.querySelector(".display");` es una línea de código en JavaScript que busca y selecciona un elemento del documento HTML con la clase "display". En este caso, se utiliza para seleccionar el elemento HTML que muestra los números y resultados en la calculadora.

## ¿Qué hace `const buttons = document.querySelectorAll("button");`?

`const buttons = document.querySelectorAll("button");` es una línea de código en JavaScript que busca y selecciona todos los elementos HTML que son botones. Utiliza el selector `"button"` para seleccionar todos los elementos `<button>` en el documento.

## ¿Qué hace `buttonText = button.textContent;`?

`buttonText = button.textContent;` es una línea de código en JavaScript que obtiene el contenido de texto del botón actual que se ha hecho clic. Almacena el texto del botón en la variable `buttonText`, que se utiliza más adelante en el código para determinar la acción a tomar según el texto del botón.

## ¿Qué hace y cómo funciona `buttons.forEach((button) => { ... } )`?

`buttons.forEach((button) => { ... } )` es un bucle que recorre todos los botones seleccionados en `buttons` y aplica una función a cada botón. En este caso, la función se ejecuta cada vez que se hace clic en un botón y contiene la lógica para manejar la calculadora.

Dentro de esta función, se utiliza `button.addEventListener("click", () => { ... })` para agregar un "escuchador de eventos" a cada botón. Esto significa que la función dentro de `addEventListener` se ejecutará cuando se haga clic en un botón. Así es como se manejan las interacciones de clic en los botones de la calculadora.

## ¿Qué hace y cómo funciona `button.addEventListener("click", () => { ... } )`?

`button.addEventListener("click", () => { ... } )` es una línea de código que agrega un "escuchador de eventos" a un botón específico. Cuando el botón se hace clic, la función dentro de `addEventListener` se ejecuta.

Dentro de esta función, se realiza una serie de comprobaciones basadas en el texto del botón (`buttonText`) para determinar cómo debe responder la calculadora (por ejemplo, mostrar números en la pantalla, realizar cálculos, borrar la pantalla, etc.).
