'use strict'

const li        = document.querySelectorAll('.li')
const section    = document.querySelectorAll('.section')

// CLICK en li
    // TODOS .li quitar la clase activo
    // TODOS .section quitar la clase activo
    // .li con la posicion se añadimos la clase activo
    // .section con la posicion se añadimos la clase activo

// Recorriendo todos los LI
li.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    li[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        li.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li[i].classList.remove('activo')
            // Quitando la clase activo de cada section
            section[i].classList.remove('activo')
        })

        // En el li que hemos click le añadimos la clase activo
        li[i].classList.add('activo')
        // En el section con la misma posición le añadimos la clase activo
        section[i].classList.add('activo')

    })
})