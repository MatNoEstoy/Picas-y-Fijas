function main() {
    eventoGame();
    deshabilitarBoton();
}
//variables Globales....
var arrayMaquina = [];
var arrayUsuario = [];
var arrayPrueba = [];
var turn;
var picas = 0;
var fijas = 0;
var intentosUsuario = 0;
var intentosMaquina = 0;
var ganador = false;

function deshabilitarBoton() {//Deshabilita el boton de comenzar juego
    document.getElementById('Inicio').disabled = false;
}
//valores iniciales
function eventoGame() {
    numeroAleatorioMaquina();
    numeroUsuario();
    turn = turno();
    playGame(turn);
}

function numeroAleatorioMaquina() {//Genera numero aleatorio máquina...
    var aleatorio;
    for (var i = 0; i < 4; i++) {
        if (i === 0) {
            arrayMaquina.push(parseInt(Math.floor(Math.random() * 10)));
        } else {
            aleatorio = parseInt(diferente(i));
            arrayMaquina.push(aleatorio);
        }
    }
    alert(arrayMaquina);//Pruebas
}

function diferente(i) {//Validación de números repetidos máquina..
    var aleatorio = Math.floor(Math.random() * 10);
    for (var j = 0; j < i; j++) {
        if (aleatorio === arrayMaquina[j]) {
            return diferente(i);
        }
    }
    return aleatorio;
}

function numeroUsuario() { //Recibe valores del usuario.... 
    var n = 1;
    var numero;
    for (var h = 0; h < 4; h++) {
        if (h === 0) {
            numero = prompt("Ingrese un número:");
            validarNumeros(numero);
            arrayUsuario.push(numero);
            n++;
        } else {
            numero = parseInt(repeticion(h));
            arrayUsuario.push(numero);
            n++;
        }
    }
}

function validarNumeros(numeros){//Valida que sean números del 0 al 9...
    var entero = parseInt(numeros);
    if(entero<0 && entero>9){
        alert("Ingrese números entre 0 y 9, vuelva a intentar");
        var numero = prompt("Ingrese un número");
        validarNumeros(numero);
    }
}

function repeticion(h) {//Validador de numeros repetidos usuario
    var numero = prompt("Ingrese un número:");
    for (var j = 0; j < h; j++) {
        if (numero === arrayUsuario[j]) {
            alert("Se repitio el numero, ingrese uno nuevo");
            return repeticion(h);
        }
    }
    return numero;
}

function turno() {//Escoje el turno de forma aleatoria...
    var turno = Math.floor(Math.random() * 2);
    if (turno === 1) {
        turn = "usuario";
    } else {
        turn = "maquina";
    }
    return turn;
}

function playGame(turn) {//Inicia Juego.....    
    if (turn === "maquina") {//turno Máquina
        alert("Es el turno de la maquina");
//        logicaMaquina();//genera numeros aleatorios en base a una estrategia...
//        numeroPicas(arrayUsuario);//valida cuantas picas hay..         
//        numeroFijas(arrayUsuario);//valida cuantas fijas hay..
//        resultado("resultadoMaquina");
        intentosMaquina++;
        gane(arrayUsuario, "usuario", "maquina");

    } else if (turn === "usuario") {//Turno Usuario
        alert("Es tu turno usuario");
        pronosticoUsuario();
        numeroPicas(arrayMaquina);//valida cuantas picas hay..         
        numeroFijas(arrayMaquina);//valida cuantas fijas hay..
        resultado("resultadoUsuario");
        intentosUsuario++;
        gane(arrayMaquina, "maquina", "usuario");
    } else {
        if (turn === "Gano usuario") {
            vencedor(intentosUsuario);
        } else {
            vencedor(intentosMaquina);
        }
    }
}

function pronosticoUsuario() {//Llena el array con los valores que pronostica el usuario...
    var pronostico;
    for (var l = 0; l < 4; l++) {
        pronostico = prompt();
        arrayPrueba.push(pronostico);
    }
}

function logicaMaquina(){
    
}

//Funciones de juego para máquina y Usuario...
function numeroPicas(array) {
    for (var g = 0; g < 4; g++) {//Recorre el arrayPrueba        
        for (var w = 0; w < 4; w++) {//Recorre el arrayMaquina          
            if (arrayPrueba[g] == array[w]) {//Problema por tipos de variable!!!!
                picas++;
            }
        }
    }
    return picas;
}

function numeroFijas(array) {
    for (var q = 0; q < 4; q++) {//Recorre el arrayPrueba como el arrayMaquina  
        if (arrayPrueba[q] == array[q]) {//Problema por tipos de variable!!!!!
            fijas++;
        }
    }
    return fijas;
}

function resultado(etiqueta) {
    var div = document.getElementById(etiqueta);
    div.textContent = arrayPrueba + "" + picas + "" + fijas;
    alert(arrayPrueba + "  " + picas + " " + fijas);
}

function limpiar() {
    fijas = 0;
    picas = 0;
    arrayPrueba.length = 0;
}

function gane(array, turno, ganador) {
    if (array == arrayPrueba) {//Problema por tipos de variable!!!!!
        turn = "Gano " + ganador;
        playGame(turn);
    } else {
        limpiar();
        playGame(turno);
    }
}

function vencedor(intentos) {
    alert(turn + " con" + intentos + "intentos");
    iniciarNuevoJuego();
}

function iniciarNuevoJuego() {
    alert("Nueva Partida");
    location.reload(true);
}