// document selectors
const firecontainer = document.querySelector('#firecontainer')
const icecontainer = document.querySelector('#icecontainer')
const lightcontainer = document.querySelector('#lightcontainer')
const light = document.querySelector('#light')
const fire = document.querySelector('#fire')
const ice = document.querySelector('#ice')



// card creation for ice, lightning and fire
const allLightning = ()=>{
    axios.get('http://localhost:5500/lightning')
    .then(res =>{ 
        for(let i=0; i <res.data.length; i++){
        const LightPokeCard = document.createElement('div')
        LightPokeCard.classList.add('Lpoke-card')
        
           LightPokeCard.innerHTML = `<img id='card-image'src='${res.data[i].poke_img}'><div>Name: ${res.data[i].pokemon_name}</div>
           <div>Type: ${res.data[i].pokemon_type}</div>
           <div>Size: ${res.data[i].pokemon_size}</div>
           <div>Color: ${res.data[i].pokemon_color}</div>
           <div> Personality: ${res.data[i].pokemon_personality}</div>
           <button>add to list</button>`


           lightcontainer.appendChild(LightPokeCard)
        }
    })
}

const allFire = ()=>{
    axios.get('http://localhost:5500/fire')
    .then(res =>{ 
        for(let i=0; i <res.data.length; i++){
        const FirePokeCard = document.createElement('div')
        FirePokeCard.classList.add('Fpoke-card')

           FirePokeCard.innerHTML = `<img id='card-image' src='${res.data[i].poke_img}'><div>Name: ${res.data[i].pokemon_name}</div>
           <div>Type: ${res.data[i].pokemon_type}</div>
           <div>Size: ${res.data[i].pokemon_size}</div>
           <div>color: ${res.data[i].pokemon_color}</div>
           <div> Personality: ${res.data[i].pokemon_personality}</div>
           <button>add to list</button>`


           firecontainer.appendChild(FirePokeCard)
        }
    })
}

const allIce = ()=>{
    axios.get('http://localhost:5500/ice')
    .then(res =>{ 
        
        for(let i=0; i <res.data.length; i++){
        const IcePokeCard = document.createElement('div')
        IcePokeCard.classList.add('Ipoke-card')
        
           IcePokeCard.innerHTML = `<img  id='card-image' src='${res.data[i].poke_img}'><div>Name: ${res.data[i].pokemon_name}</div>
           <div>Type: ${res.data[i].pokemon_type}</div>
           <div>Size: ${res.data[i].pokemon_size}</div>
           <div>color: ${res.data[i].pokemon_color}</div>
           <div> Personality: ${res.data[i].pokemon_personality}</div>
           <button>add to list</button>`


           icecontainer.appendChild(IcePokeCard)
        }
    })
}


light.addEventListener('click', allLightning)
fire.addEventListener('click', allFire)
ice.addEventListener('click', allIce)
