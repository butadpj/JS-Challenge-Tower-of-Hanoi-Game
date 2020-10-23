let t1 = document.querySelector('#t1')
let t2 = document.querySelector('#t2')
let t3 = document.querySelector('#t3')
let activeDisc = []
let totalMoves = 0
let notes = document.querySelector('.notes').children
for (let i = 0; i < notes.length; i++) {
    notes[i].volume = 0.2
}
checkDestination(3)
let randomNum


document.addEventListener('click', function(e){
    randomNum = Math.floor(Math.random() * 3)
    if (e.target.classList.contains('disc')) {
        let currentDisc = e.target
        let beforeDisc = e.target.previousElementSibling

        if (beforeDisc == null) {
            activeDisc.unshift(currentDisc)
            activeDisc[0].classList.add('active')
            notes[randomNum].play()
            notes[randomNum].currentTime = 0
        }        
    }
})

document.addEventListener('click', function(e) {
    randomNum = Math.floor(Math.random() * 3)
    if (activeDisc.length > 0) {
        if (e.target === activeDisc[0]) {
            return
        } else {
            activeDisc[0].classList.remove('active')
            let moves = document.querySelector('.moves')
            totalMoves = totalMoves + 1
            moves.innerHTML = totalMoves
            activeDisc = []
            notes[randomNum].play()
            notes[randomNum].currentTime = 0
        }
    }
})

t1.addEventListener('click', function(e){
    if (activeDisc.length > 0) {
        updateDisc('t1')
    }
})

t2.addEventListener('click', function(e){
    if (activeDisc.length > 0) {
        updateDisc('t2')
        
    }
})

t3.addEventListener('click', function(e){
    if (activeDisc.length > 0) {
        updateDisc('t3')
        //Destination -- Move the function and change the selected disc array
        checkDiscs(document.querySelector('.t3d'))
    }
})


function updateDisc(tower) {
    let towerDisc = document.querySelector(`.${tower}d`)
    let beforeDisc = towerDisc.children[0]
    let activeWeight = activeDisc[0].id.slice(-1)
    if (beforeDisc != undefined) {
        let beforeWeight = beforeDisc.id.slice(-1)
        if (activeWeight > beforeWeight) {
            return
        }
    }
    towerDisc.prepend(activeDisc[0])
    
}

function checkDiscs(array) {
    if (array.children.length == 3) {
        setTimeout(function() {alert(`Good Job! You complete the game with ${totalMoves} moves`)}, 100)
        setTimeout(function() {location.reload()}, 300)
    }
}

function checkDestination(destination) {
    let towerDestinaton = document.querySelector('.destination')
    towerDestinaton.innerHTML = `MOVE ALL THE DISC TO TOWER: ${destination}`
}