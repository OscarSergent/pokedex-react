/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'



function App() {
  const [pokemons, setPokemons] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
      setPokemons(response.data.results)
    }
    catch (err) {
      setError(err)
      console.log(err)
    }
    finally{
      setLoading(!loading)
    }
  }


  useEffect(() => {
    fetchPokemons()
  }, [])


  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>{error.response.data}</h1>

  return (
    <div className='container'>
      <h1>Hello welcome to our intro to react router </h1>
      <div className='pokemon-container'>
        {pokemons && pokemons.map(pokemon => {
          return (
            <div className='pokemon-card'>
              <h2>{pokemon.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
