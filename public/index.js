// document selectors
const firecontainer = document.querySelector('#firecontainer')
const icecontainer = document.querySelector('#icecontainer')
const lightcontainer = document.querySelector('#lightcontainer')
const light = document.querySelector('#light')
const fire = document.querySelector('#fire')
const ice = document.querySelector('#ice')
const fact = document.querySelector('#random')

let a = 0
let b = 0
let c = 0

// card creation for ice, lightning and fire
const allLightning = ()=>{
    
    axios.get('http://localhost:5500/lightning')
    .then(res =>{ 
        
        if(a === 1){
            lightcontainer.style.display = ''
            firecontainer.style.display = 'none'
            icecontainer.style.display = 'none'
        }else if(a === 0){

            lightcontainer.style.display = ''
            firecontainer.style.display = 'none'
            icecontainer.style.display = 'none'

        for(let i=0; i <res.data.length; i++){
        const LightPokeCard = document.createElement('div')
        LightPokeCard.classList.add('Lpoke-card')
        
           LightPokeCard.innerHTML = `<img id='card-image'src='${res.data[i].poke_img}'><div id='inner-text'>Name: ${res.data[i].pokemon_name}</div>
           <div id='inner-text'>Type: ${res.data[i].pokemon_type}</div>
           <div id='inner-text'>Size: ${res.data[i].pokemon_size}</div>
           <div id='inner-text'>Color: ${res.data[i].pokemon_color}</div>
           <div id='inner-text'> Personality: ${res.data[i].pokemon_personality}</div>
           `


           lightcontainer.appendChild(LightPokeCard)
           a = 1
        }}
    })
}

const allFire = ()=>{
    axios.get('http://localhost:5500/fire')
    .then(res =>{ 
        if(b === 1){
            lightcontainer.style.display = 'none'
            firecontainer.style.display = ''
            icecontainer.style.display = 'none'
        }else if(b === 0){
        lightcontainer.style.display = 'none'
        firecontainer.style.display = ''
        icecontainer.style.display = 'none'

        for(let i=0; i <res.data.length; i++){
        const FirePokeCard = document.createElement('div')
        FirePokeCard.classList.add('Fpoke-card')

           FirePokeCard.innerHTML = `<img id='card-image' src='${res.data[i].poke_img}'><div id='inner-text'>Name: ${res.data[i].pokemon_name}</div>
           <div id='inner-text'>Type: ${res.data[i].pokemon_type}</div>
           <div id='inner-text'>Size: ${res.data[i].pokemon_size}</div>
           <div id='inner-text'>color: ${res.data[i].pokemon_color}</div>
           <div id='inner-text'> Personality: ${res.data[i].pokemon_personality}</div>
           `


           firecontainer.appendChild(FirePokeCard)
           b = 1
        }}
    })
}

const allIce = ()=>{
    axios.get('http://localhost:5500/ice')
    .then(res =>{ 
        if(c === 1){
            lightcontainer.style.display = 'none'
            firecontainer.style.display = 'none'
            icecontainer.style.display = ''
        }else if(c === 0){
        lightcontainer.style.display = 'none'
        firecontainer.style.display = 'none'
        icecontainer.style.display = ''

        for(let i=0; i <res.data.length; i++){
        const IcePokeCard = document.createElement('div')
        IcePokeCard.classList.add('Ipoke-card')
        
           IcePokeCard.innerHTML = `<img  id='card-image' src='${res.data[i].poke_img}'><div id='inner-text'>Name: ${res.data[i].pokemon_name}</div>
           <div id='inner-text'>Type: ${res.data[i].pokemon_type}</div>
           <div id='inner-text'>Size: ${res.data[i].pokemon_size}</div>
           <div id='inner-text'>color: ${res.data[i].pokemon_color}</div>
           <div id='inner-text'> Personality: ${res.data[i].pokemon_personality}</div>
           `


           icecontainer.appendChild(IcePokeCard)
           c = 1
        }}
    })
}
const randomFact = ()=>{
    axios.get("http://localhost:5500/fact")
    .then(function (response) {
        const data = response.data;
        alert(data);
    })
    
}




fact.addEventListener('click', randomFact)
light.addEventListener('click', allLightning)
fire.addEventListener('click', allFire)
ice.addEventListener('click', allIce)

