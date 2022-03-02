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
        ('https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'Pikachu', 'lightning', 'small', 'yellow', 'friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-800-800/135-Jolteon.webp','Jolteon','lightning','medium', 'yellow', 'timid'),

        ('https://static.pokemonpets.com/images/monsters-images-800-800/145-Zapdos.webp', 'Zapdoz', 'lightning', 'large', 'yellow', 'aggressive'),

        ('https://www.serebii.net/pokemon/art/363.png','Spheal', 'ice', 'small', 'blue', 'timid'),

        ('https://www.pngplay.com/wp-content/uploads/10/Delibird-Pokemon-Transparent-Images.png','Delibird', 'ice', 'medium', 'red', 'friendly'),

        ('https://www.pngfind.com/pngs/m/167-1675974_articuno-pokemon-pictures-of-articuno-hd-png-download.png','Articuno', 'ice', 'large', 'blue', 'aggressive'),

        ('https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png','Charmander', 'fire', 'small', 'red', 'timid'),

        ('https://www.nicepng.com/png/detail/225-2259630_shiny-typhlosion-pokdex-typhlosion-pokemon.png','Typhlosion', 'fire', 'Large', 'Cream', 'friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-800-800/6-Charizard.webp','Charizard', 'fire', 'Large', 'red', 'aggressive');

        `)
    }
}