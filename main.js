
let puntaje_jugador = 0
let puntaje_computador = 0

alert('EMPIEZA EL JUEGO, GANA 3 VECES')

function juego(userchoice) {
    const jugador = ['piedra', 'papel', 'tijera']
    const pc = jugador[Math.floor(Math.random() * 3)]

    let resultado = ''

    if (userchoice === pc) {
        resultado = `Empate. Ambos eligieron ${userchoice}`
    } else if (
        (userchoice === 'piedra' && pc === 'tijera') ||
        (userchoice === 'papel' && pc === 'piedra') ||
        (userchoice === 'tijera' && pc === 'papel')
    ) {
        resultado = `¡Ganaste! ${userchoice} vence a ${pc}`
        puntaje_jugador++
        alert('ganaste')
    } else {
        resultado = `Perdiste. ${puntaje_computador} vence a ${userchoice}`
        puntaje_computador++
        alert('perdiste')
    }

    
    document.getElementById('resultado').textContent = resultado
    document.getElementById('puntaje').textContent = `Jugador : ${puntaje_jugador} | Computadora :${puntaje_computador}`

    
    if (puntaje_jugador === 3 || puntaje_computador === 3) {
        fin()
    }
}

function fin() {
    const finalresult = puntaje_jugador === 3 ? '¡Ganaste el juego!' : 'Perdiste el juego.'
    document.getElementById('resultado').textContent = finalresult
    document.getElementById('btnPiedra').disabled = true
    document.getElementById('btnPapel').disabled = true
    document.getElementById('btnTijera').disabled = true
    alert('FIN DEL JUEGO')
}

