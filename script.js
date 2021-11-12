let bars = document.getElementById('bars')
let cross = document.getElementById('cross')
let nav_list = document.querySelector('.nav-list')
let overlay_div = document.getElementById('overlay-div')

bars.addEventListener('click', () => {
    nav_list.style.left = 0
    overlay_div.style.zIndex = 100
    overlay_div.style.backgroundColor = 'rgba(0, 0, 0, 0.322)'
})

cross.addEventListener('click', () => {
    nav_list.style.left = '-1500px'
    overlay_div.style.zIndex = -100
    overlay_div.style.backgroundColor = 'rgba(0, 0, 0, 0)'
})