function main() {
    eventoGame();
}

var arrayMaquina = [];
var arrayUsuario = [];
var turn;

function eventoGame() {
    numeroAleatorioMaquina();
    numeroUsuario = numeroUsuario();
    alert(numeroUsuario);
    turn=turno();
    playGame();
}

function numeroAleatorioMaquina() {
    var aleatorio;
    for (var i = 0; i < 4; i++) {
        if (i === 0) {
            arrayMaquina.push(Math.floor(Math.random() * 10));
        } else {
            aleatorio = diferente(i);
            arrayMaquina.push(aleatorio);
        }
    }
    alert(arrayMaquina);
}

function diferente(i) {
    var aleatorio = Math.floor(Math.random() * 10);
    for (var j = 0; j < i; j++) {
        if (aleatorio === arrayMaquina[j]) {
            return diferente(i);
        }
    }
    return aleatorio;
}

function numeroUsuario(){



    
    var num1 = prompt("primer numero");
    var num2 = prompt("segundo numero");
    var num3 = prompt("tercer numero");
    var num4 = prompt("cuarto numero");
    
    arrayUsuario = [num1,num2,num3,num4];
    return arrayUsuario;
    
}

function turno() {
    var turno = Math.floor(Math.random() * 2);
    if (turno === 1) {
        turn = true;
    } else {
        turn = false;
    }
    return turn;
}

function playGame(turn) {
      if(turn === "true"){//turno Máquina
          
      }else{//Turno Usuario
          
      }
}