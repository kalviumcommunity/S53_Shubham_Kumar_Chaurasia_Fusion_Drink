import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

export const fetchRandomCocktails = async () => {
  const response = await axios.get(`${API_URL}/cocktails/random`)
  return response.data
}

export const fetchAlcoholTypes = async () => {
  const response = await axios.get(`${API_URL}/alcohol-types`)
  return response.data
}

export const fetchCocktailById = async (id) => {
  const response = await axios.get(`${API_URL}/cocktails/${id}`)
  return response.data
}