const lid = document.querySelector('.lid')
const ribbon = document.querySelector('.ribbon3')
const present = document.querySelector('.present')
const box = document.querySelector('.lower-box')
const ribbon2 = document.querySelector('.ribbon1')
const ribbon3 = document.querySelector('.ribbon2')
const cake = document.querySelector('.cake')
const images = document.querySelectorAll('.balloons')

//let greeting go up
const greet = document.querySelector('.greet')
const day = document.querySelector('.day')
const tern = document.querySelector('.name')
const letters = document.querySelector('.letters')
const small = document.querySelector('small')

//get headings
const a = document.querySelector('h1')
const b = document.querySelector('h2')
const c = document.querySelector('h3')
const d = document.querySelector('h4')
const e = document.querySelector('h5')
const f = document.querySelector('h6')

const fly = () => {
    small.style.display = 'none'
    ribbon.style.height = 0 
    lid.classList.add('fire')
    setTimeout(()=>{
    greet.style.display = 'flex'
    day.style.display = 'flex'
    tern.style.display = 'flex'
    },500)
    setTimeout(()=>{
        greet.classList.add('one')
        day.classList.add('two')
        tern.classList.add('three')
    },700)

    setTimeout(()=>{
        lid.style.display = 'none'
        ribbon2.style.display = 'none'
        box.style.background = 'grey'
        ribbon3.style.display = 'none'
    },5000)

    setTimeout(()=>{
        cake.style.display = 'block'
    },7000)
}
    




//turn on light and play song
const btn = document.querySelector('button')
const audio = document.querySelector('audio')
const lit = () => {
   images.forEach(img=>img.style.display = 'none')
   const container = document.querySelector('.container')
   container.style.filter = 'brightness(1)'
   btn.style.display = 'none'
   audio.play() 
}


present.addEventListener('click',fly)
btn.addEventListener('click',lit)