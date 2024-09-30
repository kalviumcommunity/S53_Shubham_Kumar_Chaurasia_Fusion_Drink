const express = require('express')
const router = express.Router()
const cocktailController = require('../Controllers/cocktailController')

router.get('/cocktails/random', cocktailController.getRandomCocktails)
router.get('/alcohol-types', cocktailController.getAlcoholTypes)
router.get('/cocktails/:id', cocktailController.getCocktailById)

module.exports = router