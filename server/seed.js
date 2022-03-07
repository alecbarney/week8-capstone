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
        ('https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'Pikachu', 'Electric', 'Small', 'Yellow', 'Friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-800-800/135-Jolteon.webp','Jolteon','Electric','Medium', 'Yellow', 'Timid'),

        ('https://static.pokemonpets.com/images/monsters-images-800-800/145-Zapdos.webp', 'Zapdoz', 'Electric', 'Large', 'Yellow', 'Aggressive'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/100-Voltorb.webp', 'Voltorb', 'Electric', 'Medium', 'Red/White', 'Timid'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/81-Magnemite.webp', 'Magnemite', 'Electric', 'Small', 'Silver', 'Friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/125-Electabuzz.webp', 'Electabuzz', 'Electric', 'Large', 'Yellow', 'Friendly'),

        ('https://www.serebii.net/pokemon/art/363.png','Spheal', 'Ice', 'Small', 'Blue', 'Timid'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/131-Lapras.webp', 'Lapras', 'Ice', 'Large', 'Blue', 'Mean'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/361-Snorunt.webp', 'Snorunt', 'Ice', 'Small', 'Tan', 'Timid'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/471-Glaceon.webp', 'Glaceon', 'Ice', 'Medium', 'Blue', 'Calm'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/225-Delibird.webp','Delibird', 'Ice', 'Medium', 'Red', 'Friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/144-Articuno.webp','Articuno', 'Ice', 'Large', 'Blue', 'Aggressive'),

        ('https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png','Charmander', 'Fire', 'Small', 'Red', 'Timid'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/157-Typhlosion.webp','Typhlosion', 'Fire', 'Large', 'Cream', 'Friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-800-800/6-Charizard.webp','Charizard', 'Fire', 'Large', 'Red', 'Aggressive'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/37-Vulpix.webp', 'Vulpix', 'Fire', 'Small', 'Orange', 'Friendly'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/257-Blaziken.webp', 'Blaziken', 'Fire', 'Large', 'Red', 'Aggressive'),

        ('https://static.pokemonpets.com/images/monsters-images-300-300/228-Houndour.webp', 'Houndour', 'Fire', 'Medium', 'Black', 'Timid');

        `)
    }
}