
let nombre = "valentina"
let apellido = "cid"
let años = 3


let nombre_usuario = prompt('nombre y apellido de mi amorcito').toLowerCase()


if (nombre + " " + apellido == nombre_usuario){
    alert('si eres mi amorcito <3')

    let años_juntos= Number(prompt('cuantos años juntos?'))
    
    if (años == años_juntos){
        alert('siiiiii')
    }
    else{
        alert('mmmmmmm')
    }


} else {
    alert('no eres 7.7')
}


console.log('chao')