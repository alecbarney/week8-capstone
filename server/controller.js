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
WHERE pokemon_type = 'lightning';
`)
.then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
},

displayFire: (req, res)=>{
    sequelize.query(`
    SELECT * from pokemon
    WHERE pokemon_type = 'fire';
    `)
    .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

 displayIce: (req, res)=>{
    sequelize.query(`
    SELECT * from pokemon
     WHERE pokemon_type = 'ice';
    `)
    .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
      }
}