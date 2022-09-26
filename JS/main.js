// Juego de acertijos 

//Mediante prompt se presenta el acertijo y se ingresa la posible respuesta
let acertijo = prompt('¿Quién es el ser, el único ser de entre todos los habitantes de la tierra, las aguas, el aire, que tiene una única naturaleza, pero posee dos pies, tres pies y cuatro pies, y es más débil cuntos más pies posee?');

function jugar(){
    //Con el condicional nos aseguramos que la respuesta tenga 3 o más caracteres para luego ser evaluada como correcta o incorrecta con el loop anidado dentro del mismo. En caso de que la respuesta no posea la cantidad de caracteres requerida se generará otro prompt para ingresar una respuesta válida.
    if (acertijo.length >= 3){
        while (acertijo != 'el hombre'){
            alert ('INCORRECTO');
            acertijo= prompt('Intentalo de nuevo');
        } alert ('MUY BIEN!');
    } else {
        prompt ('Ingresa una respuesta válida');
    }
}

jugar();