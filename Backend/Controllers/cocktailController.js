const Cocktail = require('../Models/Cocktail')

exports.getRandomCocktails = async (req, res) => {
  try {
    const cocktails = await Cocktail.aggregate([{ $sample: { size: 4 } }])
    res.json(cocktails)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching random cocktails', error: error.message })
  }
}

exports.getAlcoholTypes = async (req, res) => {
  try {
    const alcoholTypes = await Cocktail.distinct('alcoholType')
    res.json(alcoholTypes)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching alcohol types', error: error.message })
  }
}

exports.getCocktailById = async (req, res) => {
  try {
    const cocktail = await Cocktail.findById(req.params.id)
    if (!cocktail) {
      return res.status(404).json({ message: 'Cocktail not found' })
    }
    res.json(cocktail)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cocktail', error: error.message })
  }
}