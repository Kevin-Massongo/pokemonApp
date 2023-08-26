const btn = document.getElementById('button')
const image = document.getElementById('image')
const pokeNumber = document.getElementById('number')
const pokeName = document.getElementById('name')

const changePokemon = async ()=>{
    let randomNumber = Math.ceil(Math.random() * 150) + 1;
    let requestNumber = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    let data = await fetch(requestNumber)
    // console.log(data);

    let response = await data.json()
    // console.log(response);
    image.src = response.sprites.front_default;
    pokeName.textContent = response.id
    pokeNumber.textContent = response.name
}

btn.addEventListener('click', changePokemon)
