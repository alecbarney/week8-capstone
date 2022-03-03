const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
    seed: (req, res) =>{
        sequelize.query(`
        drop table if exists pokemon;
        
        CREATE TABLE pokemon(
            pokemon_id SERIAL PRIMARY KEY,
            poke_img VARCHAR(100),
            pokemon_name VARCHAR(100),
            pokemon_type VARCHAR(100),
            pokemon_size VARCHAR(100),
            pokemon_color VARCHAR(100),
            pokemon_personality VARCHAR(100)
        );
        INSERT INTO pokemon (poke_img, pokemon_name, pokemon_type, pokemon_size, pokemon_color, pokemon_personality)
        VALUES 
        ('https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'Pikachu', 'electric', 'small', 'yellow', 'friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-800-800/135-Jolteon.webp','Jolteon','electric','medium', 'yellow', 'timid'),

        ('https://static.pokemonpets.com/images/monsters-images-800-800/145-Zapdos.webp', 'Zapdoz', 'electric', 'large', 'yellow', 'aggressive'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/100-Voltorb.webp', 'Voltorb', 'electric', 'medium', 'red/white', 'timid'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/81-Magnemite.webp', 'Magnemite', 'electric', 'small', 'silver', 'friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/125-Electabuzz.webp', 'Electabuzz', 'electric', 'large', 'yellow', 'friendly'),

        ('https://www.serebii.net/pokemon/art/363.png','Spheal', 'ice', 'small', 'blue', 'timid'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/131-Lapras.webp', 'Lapras', 'ice', 'large', 'blue', 'mean'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/361-Snorunt.webp', 'Snorunt', 'ice', 'small', 'tan', 'timid'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/471-Glaceon.webp', 'Glaceon', 'ice', 'medium', 'blue', 'calm'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/225-Delibird.webp','Delibird', 'ice', 'medium', 'red', 'friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/144-Articuno.webp','Articuno', 'ice', 'large', 'blue', 'aggressive'),

        ('https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png','Charmander', 'fire', 'small', 'red', 'timid'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/157-Typhlosion.webp','Typhlosion', 'fire', 'Large', 'Cream', 'friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-800-800/6-Charizard.webp','Charizard', 'fire', 'Large', 'red', 'aggressive'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/37-Vulpix.webp', 'Vulpix', 'fire', 'small', 'orange', 'friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/257-Blaziken.webp', 'Blaziken', 'fire', 'large', 'red', 'aggressive'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/228-Houndour.webp', 'Houndour', 'fire', 'medium', 'black', 'timid');

        `)
    }
}