const Router = require("express");
const router = new Router();
const PetController = require("../controller/pet.controller");

router.post("/addpet", PetController.addPet);
router.get("/getpets", PetController.getPets);

/* 
router.get("/pet/:id", PetController.getOnePet); */

module.exports = router;
