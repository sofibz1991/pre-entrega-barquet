// Juego de acertijos 

//Array de Objetos que contiene los acertijos organizados por niveles
const arrayDeAcertijos = [
    {
        nivel:1,
        id: '1a',
        acertijo: 'Un hombre entra en un bar y pide al camarero un vaso de agua. El camarero saca una pistola y le apunta. El hombre dice "gracias" y se va. ¿Qué ha pasado?',
        respuesta: 'hipo'
    },
    {
        nivel: 1,
        id: '1b',
        acertijo: '¿Cuántos ladrillos se necesitan para completar un edificio hecho de ladrillos?',
        respuesta: 'uno'
    },
    {
        nivel: 2,
        id: '2a',
        acertijo: 'Un hombre vive en el décimo piso de un edificio. Todos los días coge el ascensor para bajar a la planta baja e ir a trabajar. Cuando vuelve, usa el mismo ascensor hasta la séptima planta y sube las escaleras para llegar a su apartamento en la décima. Odia caminar, ¿por qué lo hace?',
        respuesta: 'estatura'
    },
    {
        nivel: 2,
        id: '2b',
        acertijo: 'No muy lejos de donde vives tú, hay un enorme granero de madera. El granero está completamente vacío, excepto por un hombre muerto que cuelga de la mitad de la viga central. La cuerda que le rodea el cuello tiene tres metros de largo y sus pies están a tres metros del suelo. La pared más cercana está a 6 metros del hombre. No es posible trepar por las paredes ni por las vigas. El hombre se ha ahorcado. ¿Cómo lo hizo?',
        respuesta: 'hielo derretido'
    },
    {
        nivel: 2,
        id: '2c',
        acertijo: 'Una mujer tuvo dos hijos que nacieron a la misma hora del mismo día del mismo año, pero no son gemelos. ¿Cómo es posible?',
        respuesta: 'son más de dos hijos'
    },
    {
        nivel: 3,
        id: '3a',
        acertijo: 'Un hombre empuja su coche. Se detiene al llegar a un hotel y de pronto sabe que está arruinado. ¿Qué ha pasado?',
        respuesta: 'hielo derretido',
    },
    {
        nivel:3,
        id: '3b',
        acertijo: '¿Quién es el ser, el único ser de entre todos los habitantes de la tierra, las aguas, el aire, que tiene una única naturaleza, pero posee dos pies, tres pies y cuatro pies, y es más débil cuntos más pies posee?',
        respuesta: 'el hombres'
    },
    {
        nivel:3,
        id: '3c',
        acertijo: 'Hay dos patos delante de un pato, dos patos detrás de un pato y un pato en el centro. ¿Cuántos patos hay?',
        respuesta: 'tres'
    },
    {
        nivel:3,
        id: '3d',
        acertijo: 'El día anterior a dos días después del día anterior a mañana es sábado. ¿Qué día es hoy?',
        respuesta: 'viernes'
    },
    {
        nivel:3,
        id: '3e',
        acertijo: '¿Qué es lo que no está ni dentro ni fuera de la casa, pero que es necesario para cualquier hogar?',
        respuesta: 'ventanas'
    },
    {
        nivel:3,
        id: '3f',
        acertijo: 'El hombre que lo vendió no lo quería. El hombre que lo compró no lo necesitaba. El hombre que lo usó no lo conocía.',
        respuesta: 'ataúd'
    },
]

//Array vacío en el cual se almacenarán las respuestas correctas
let respuestasCorrectas = [];
let acertijoSeleccionado;

//Función para buscar un acertijo por nivel
function buscarNivel(){
    let nivelUsuario = Number(prompt('Ingresa un nivel del 1 al 3'));
    if (nivelUsuario != isNaN){
        acertijoSeleccionado = arrayDeAcertijos.find((el) => el.nivel === nivelUsuario);
    }
    alert(acertijoSeleccionado.acertijo);
}
buscarNivel();

//Mediante prompt se ingresa la posible respuesta
let respuestaUsuario = prompt('Ingresa tu respuesta');


function jugar(){
    //Con el condicional nos aseguramos que la respuesta tenga 3 o más caracteres para luego ser evaluada como correcta o incorrecta con el loop anidado dentro del mismo. En caso de que la respuesta no posea la cantidad de caracteres requerida se generará otro prompt para ingresar una respuesta válida.
    if (respuestaUsuario.length >= 3){
        while (respuestaUsuario.toLowerCase() != acertijoSeleccionado.respuesta){
            alert ('INCORRECTO');
            respuestaUsuario= prompt('Intentalo de nuevo');
        } alert ('MUY BIEN!');
    } else {
        prompt ('Ingresa una respuesta válida');
    }
    respuestasCorrectas.push(acertijoSeleccionado.id);
}

jugar();