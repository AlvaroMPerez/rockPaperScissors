let usuarioGana = 0;
let usuarioPierde = 0;

//si este cambio funciona, preguntar a victor porque antes no funcionaba
// el bucle con una condicional usuiarioGana o pierde < 5


/** @type {HTMLButtonElement} */
const piedraBtn = document.getElementById("piedra");
/** @type {HTMLButtonElement} */
const papelBtn = document.getElementById("papel");
/** @type {HTMLButtonElement} */
const tijerasBtn = document.getElementById("tijeras")

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

function validarGameOver(){
    if(usuarioGana >= 5 || usuarioPierde >= 5){
        alert(`El ganador: ${usuarioGana > usuarioPierde? "Usuario": "BOT"}`)
        piedraBtn.disabled = true;
        papelBtn.disabled = true;
        tijerasBtn.disabled = true;

    }
}

/**
 * @param {number} min 
 * @param {number} max
 */
function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1)
}

/**
 * 
 * @param {'piedra' | 'papel' | 'tijeras'} usuarioEleccion 
 */
function startGame(usuarioEleccion){
    const botEleccion = numeroAleatorio(1,3);
    const botFinal = bot(botEleccion);
    comparador(usuarioEleccion, botFinal);
    validarGameOver();
}

piedraBtn.addEventListener("click", () => {
    startGame("piedra");
});

papelBtn.addEventListener("click", ()=>{
    startGame("papel");   
});

tijerasBtn.addEventListener("click", () =>{
    startGame("tijeras");
});

    
function comparador(usuarioEleccion, eleccionDelBot){

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


    var resultadoJuego = resultado;

    if(resultadoJuego === "ganaste"){
    usuarioGana++;
    }else if(resultadoJuego === "pierdes"){
    usuarioPierde++;
    }
    
    
}