const db = require('../db')

class PetController {
  async addPet(req, res) {
    const { name, species } = req.body;
    console.log(name, species);
    const newPet = await db.query(`INSERT INTO pet (name, species) values ($1, $2) RETURNING *`, [name, species])
    res.set('Access-Control-Allow-Origin', '*')
    res.json(newPet.rows[0]);
  }

  async getPets(req, res) {
    const pets = await db.query(`SELECT * FROM pet`)
    res.json(pets.rows)
  }

}

module.exports = new PetController();

