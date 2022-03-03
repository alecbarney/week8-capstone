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
displayLightning: (req, res)=>{
sequelize.query(`
SELECT * from pokemon
WHERE pokemon_type = 'Electric';
`)
.then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
},

displayFire: (req, res)=>{
    sequelize.query(`
    SELECT * from pokemon
    WHERE pokemon_type = 'Fire';
    `)
    .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

 displayIce: (req, res)=>{
    sequelize.query(`
    SELECT * from pokemon
     WHERE pokemon_type = 'Ice';
    `)
    .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
      },
 pokeFact: (req, res)=>{
 const facts = ["Pikachu directly translates as 'Sparkly mouse noise",
        "Lots of Pokémon names are puns",
        "Hitmonchan and Hitmonlee Got Their Names From Famous Fighters",
        "Slowbro Is The Only Pokemon That Can Devolve.",
        "Azurill Can Change Gender While Evolving",
        "Meowth And Pikachu Are Opposite Pokemon",
        "Magneton Weighs A Lot More Than Three Magnemites",
        "The move 'Splash' Is A Mistranslation Of The Japanese Word For 'Hop'",
        "Ditto Is Most Likely A Failed Attempt At Cloning Mew",
        "Each Spinda Has A Unique Pattern Of Spots",
        "Psychic-Type Weaknesses Are Based On Common Fears",
        "Wobbuffet's Main Body Is A Decoy",
        "Blastoise has the highest base Special Defense of all fully evolved starter Pokémon",
        "Raichu can be male or female, the difference in appearance is the female has smaller, blunted lightning bolt at the end of its tail"

]
let randomIndex = Math.floor(Math.random() * facts.length);
let randomFact = facts[randomIndex];

res.status(200).send(randomFact);
      }
}