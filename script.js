let t1 = document.querySelector('#t1')
let t2 = document.querySelector('#t2')
let t3 = document.querySelector('#t3')

let activeDisk = []
let moves = 0

let t1d = document.querySelector('.t1d')
let t2d = document.querySelector('.t2d')
let t3d = document.querySelector('.t3d')

let dText = document.querySelector('.destination')
let destination = 3
let moveText = document.querySelector('.moves')

dText.innerHTML = `MOVE ALL THE DISC TO TOWER: ${3}`

document.addEventListener('click', function(e){
    if (e.target.classList.contains('disc')) {
        let currentDisc = e.target
        let previousDisc = currentDisc.previousElementSibling
        if (previousDisc == null) {
            e.target.classList.add('active')
            activeDisk.unshift(e.target)
        } else {
            return
        }
    }
})

document.addEventListener('click', function(e){
    if (e.target == activeDisk[0]) {
        return
    }
    if (activeDisk.length > 0) {
        activeDisk[0].classList.remove('active')
        activeDisk.pop()
        moves = moves + 1
        moveText.innerHTML = moves
    }
})

t1.addEventListener('click', function(){
    if (activeDisk.length > 0) {
        checkDisk(t1d)
    }
})

t2.addEventListener('click', function(){
    if (activeDisk.length > 0) {
        checkDisk(t2d)
    }
})

t3.addEventListener('click', function(){
    if (activeDisk.length > 0) {
        checkDisk(t3d)
        checkGame(t3d)
    }
})

function checkGame(tower) {
    console.log(tower.children.length)
    if (tower.children.length == 3) {
        setTimeout(function(){alert(`CONGRATS! You completed the game with ${moves} moves`)}, 300) 
        setTimeout(function(){location.reload()}, 300) 
    }
}

function checkDisk(diskTower) {
    let currentDiskSize = Number(activeDisk[0].id.slice(-1))
    console.log(diskTower.children[0])
    if (diskTower.children[0] != undefined) {
        let afterDiskSize = diskTower.children[0].id.slice(-1)

        if (currentDiskSize > afterDiskSize) {
            return
        } else {
            diskTower.prepend(activeDisk[0])
        }
    } else {
        diskTower.prepend(activeDisk[0])
    }
    

    
}



