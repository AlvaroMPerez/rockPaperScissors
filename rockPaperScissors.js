console.log('hola mundo');

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1)
}

var botEleccion = numeroAleatorio(1,3);

console.log(botEleccion);


function bot(botEleccion){

    var botFinal = 'algo';

    if (botEleccion == 1){

     botFinal = 'piedra';
    }else if (botEleccion == 2 ){
        botFinal = 'papel'
    } else {
        botFinal = 'tijeras'
    }
    
    return botFinal;

    

}

var eleccionDelBot = bot(botEleccion)

console.log(eleccionDelBot);

function validador(){
    var usuarioEleccion = prompt('Ingresa tu eleccion, solo es valido "Piedra, Papel o Tijeras"')

    usuarioEleccion = usuarioEleccion.trim().toLowerCase()

    if (usuarioEleccion === 'piedra'){
         usuarioEleccion = 'piedra';
    } else if (usuarioEleccion === 'papel'){
         usuarioEleccion = 'papel'
    } else if (usuarioEleccion === 'tijeras'){
         usuarioEleccion = 'tijeras'
    } else {console.log('Incorrecto, vuelve a introducir tu eleccion.')
    usuarioEleccion = validador();
}

    return usuarioEleccion;
}

var usuarioEleccionFinal = validador();
console.log(usuarioEleccionFinal)

function comparador(){

    var resultado = 'resultado';

    if (usuarioEleccionFinal === 'piedra' && eleccionDelBot === 'piedra' ){
        resultado = 'empate'
        console.log('empate')
    } else if(usuarioEleccionFinal === 'piedra' && eleccionDelBot === 'papel'){
        resultado = 'Pierdes'
        console.log('Pierdes')
    } else if(usuarioEleccionFinal === 'piedra' && eleccionDelBot === 'tijeras'){
        resultado = 'ganaste mamaguevo'
        console.log('ganaste mamaguevo')
    }

    else if (usuarioEleccionFinal === 'papel' && eleccionDelBot === 'piedra' ){
        resultado = 'ganaste mamaguevo'
        console.log('ganaste mamaguevazo')
    } else if(usuarioEleccionFinal === 'papel' && eleccionDelBot === 'papel'){
        resultado = 'empate'
        console.log('empate')
    } else if(usuarioEleccionFinal === 'papel' && eleccionDelBot === 'tijeras'){
        resultado = 'pierdes mamaguevo'
        console.log('pierdes mamaguevo')
    }


    else if (usuarioEleccionFinal === 'tijeras' && eleccionDelBot === 'piedra' ){
        resultado = 'pierdes'
        console.log('pierdes')
    } else if(usuarioEleccionFinal === 'tijeras' && eleccionDelBot === 'papel'){
        resultado = 'ganas, putito'
        console.log('ganas, putito')
    } else if(usuarioEleccionFinal === 'tijeras' && eleccionDelBot === 'tijeras'){
        resultado = 'empate mamaguevo'
        console.log('empate mamaguevo')
    }


     return resultado

    
};

console.log(resultado);