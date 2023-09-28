# README para Calculadora Simple

Este es un README para la calculadora simple que utiliza HTML, CSS y JavaScript.
Creador: Julio Humberto Lopez Ortega 
Fecha: 27/09/2023

Descripcion breve:
Este proyecto crea una pagina web usando HTML y CSS, la implementacion de JS se hace para la logica aritmetica de la calculadora y display.

## ¿Qué hace "document.querySelector(".display");"?

Es una función en JavaScript que se utiliza para seleccionar y obtener una referencia a un elemento del documento HTML utilizando un selector CSS. Este método devuelve el primer elemento que coincide con el selector especificado o null si no se encuentra ningún elemento que coincida, en este caso la clase display.
En este caso, se utiliza para seleccionar el elemento HTML que muestra los números y resultados en la calculadora.

## ¿Qué hace "const buttons = document.querySelectorAll("button");"?

Busca en el documento HTML todos los elementos que coinciden con el selector especificado, que en este caso es "button". El selector "button" busca todos los elementos <button> en la página. Todos los elementos coincidentes en una lista o NodeList. Esto significa que si tienes varios botones en tu página, todos serán seleccionados y almacenados en la lista buttons

## ¿Qué hace "buttonText = button.textContent;"?

Accede al contenido de texto del elemento HTML al que hace referencia la variable button. Esto significa que obtiene el texto visible dentro del elemento HTML, como el texto que se muestra en un botón. Es una operación que extrae el texto visible de un elemento HTML y lo almacena en una variable para que puedas utilizarlo en tu código JavaScript. Esto es útil cuando deseas trabajar con el texto de un elemento específico en tu página web.

## ¿Qué hace y cómo funciona "buttons.forEach((button) => { ... } )"?

Es un bucle que recorre todos los botones seleccionados en `buttons` y aplica una función a cada botón. En este caso, la función se ejecuta cada vez que se hace clic en un botón y contiene la lógica para manejar la calculadora. Es un ciclo for que recorre todos los elementos que se le dan con el parametro, luego de eso ejecuta lo demas del cuerpo del for.
El método forEach() en JavaScript es una forma de iterar sobre cada elemento de un iterable, como un array o un NodeList, y aplicar una función a cada elemento, es una forma conveniente de iterar sobre elementos sin necesidad de un bucle .

## ¿Qué hace y cómo funciona "button.addEventListener("click", () => { ... } )"?
Dentro de esta función, se utiliza `button.addEventListener("click", () => { ... })` para agregar un escuchador de eventos a cada botón recorrido por el for. Esto significa que la función dentro de `addEventListener` se ejecutará cuando se haga clic en un botón. Así es como se manejan las interacciones de clic en los botones de la calculadora. El addEventListener hace que el codigo este pendiente de algun evento en este caso es el click al elemento. 
Dentro de esta función, se realiza una serie de comprobaciones basadas en el texto del botón (`buttonText`) para determinar cómo debe responder la calculadora (por ejemplo, mostrar números en la pantalla, realizar cálculos, borrar la pantalla, etc.). 
En terminos generales dentro del for tenemos esto que se aplica a todos lo items del for each, al hacer determinado evento ejecuta alguna funcion depenendiendo de lo programado en el codigo y en las condicionales. 
