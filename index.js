
function newImage (url, left, bottom) {
    let gameObject = document.createElement('img')
    gameObject.src = url
    gameObject.style.position = 'fixed'
    gameObject.style.left = left + 'px'
    gameObject.style.bottom = bottom + 'px'
    document.body.append(gameObject)
    return gameObject
}
   newImage()

function newItem(url, left, bottom){
    let gameObject = newImage(url, left, bottom)

    gameObject.addEventListener('dblclick', () => {
        gameObject.remove()
    })
}
    newImage('assets/green-character.gif', 100, 100);
    newImage('assets/tree.png', 200, 300);
    newImage('assets/pillar.png', 350, 100);
    newImage('assets/pine-tree.png', 450, 200);
    newImage('assets/crate.png', 150, 200);
    newImage('assets/well.png', 500, 425);

    newItem('assets/sword.png', 500, 405);
    newItem('assets/staff.png', 600, 100);
    newItem('assets/sheild.png', 165, 185);





