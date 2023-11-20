

let usuarioGana = 0;
let usuarioPierde = 0;
const maxPuntuacion = 5;

//si este cambio funciona, preguntar a victor porque antes no funcionaba
// el bucle con una condicional usuiarioGana o pierde < 5


const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijerasBtn = document.getElementById("tijeras")




do{

    //Eleccion del bot//

    console.log('hola mundo');

    function numeroAleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1) + 1)
    }
    
    var botEleccion = numeroAleatorio(1,3);
    
    console.log(botEleccion);
    
    
    function bot(botEleccion){
    
        var botFinal = '';
    
        if (botEleccion == 1){
    
         botFinal = 'piedra';
        }else if (botEleccion == 2 ){
            botFinal = 'papel'
        } else  {
            botFinal = 'tijeras'
        }
        
        return botFinal;
    
        
    
    }
    
    var eleccionDelBot = bot(botEleccion)
    
    console.log(eleccionDelBot);
    
    //Termina eleccion del bot//


//Empiezo a recibir la eleccion del usuario//

usuarioEleccion ="";

piedraBtn.addEventListener("click", () => {
    usuarioEleccion = 'piedra';
    console.log(usuarioEleccion);
});

papelBtn.addEventListener("click", ()=>{
    usuarioEleccion = 'papel';
    console.log(usuarioEleccion);
});

tijerasBtn.addEventListener("click", () =>{
    usuarioEleccion = "tijeras";
    console.log(usuarioEleccion);

});

//Una vez tengo la eleccion del usuario, la comparo con la del bot//


function comparador(){

    var resultado = 'resultado';

    if (usuarioEleccion === 'piedra' && eleccionDelBot === 'piedra' ){
        resultado = 'empate'
        console.log('empate')
    } else if(usuarioEleccion === 'piedra' && eleccionDelBot === 'papel'){
        resultado = 'pierdes';
        usuarioPierde++;
        console.log('pierdes')
    } else if(usuarioEleccion === 'piedra' && eleccionDelBot === 'tijeras'){
        resultado = 'ganaste'
        usuarioGana ++;
        console.log('ganaste')
    }

    else if (usuarioEleccion === 'papel' && eleccionDelBot === 'piedra' ){
        resultado = 'ganaste'
        usuarioGana++;
        console.log('ganaste')

    } else if(usuarioEleccion === 'papel' && eleccionDelBot === 'papel'){
        resultado = 'empate'
        console.log('empate')
    } else if(usuarioEleccion === 'papel' && eleccionDelBot === 'tijeras'){
        resultado = 'pierdes'
        usuarioPierde++;
        console.log('pierdes')
    }


    else if (usuarioEleccion === 'tijeras' && eleccionDelBot === 'piedra' ){
        resultado = 'pierdes'
        usuarioPierde++;
        console.log('pierdes')
    } else if(usuarioEleccion === 'tijeras' && eleccionDelBot === 'papel'){
        resultado = 'ganaste'
        usuarioGana++;
        console.log('ganaste')
    } else if(usuarioEleccion === 'tijeras' && eleccionDelBot === 'tijeras'){
        resultado = 'empate'
        console.log('empate')
    }


    var resultadoJuego = comparador();

    if(resultadoJuego === "ganaste"){
    usuarioGana++
    }else if(resultadoJuego === "pierdes"){
    usuarioPierde++
    }

    return resultado;

    
    
}





}while(usuarioGana < maxPuntuacion && usuarioPierde < maxPuntuacion);

