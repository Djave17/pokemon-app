import { useState, type SubmitEvent } from 'react'
import './App.css'
import type { PokemonResponse } from './types/pokemon'
import { getPokemon } from './services/pokemonApi'
import { PokemonCard } from './components/PokemonCard'

function App() {
  
  const [searchTerm, setSearchTerm] = useState<string>("")
  //definimos la variable y la funcion que cambiara el estado de la variable, ademas de definir el tipo de dato que tendra la variable.

  const [pokemon, setPokemon] = useState<PokemonResponse | null>(null)
  
  const [loading, setLoading] = useState<boolean>(false)

  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault() //Evita que se recargue la pagina al enviar el formulario.
    setLoading(true) 
    setError(null) 
    setPokemon(null)

    try {
      const foundPokemon = await getPokemon(searchTerm) //Llamamos a la funcion getPokemon y le pasamos el termino de busqueda, que es el valor del input.
      setPokemon(foundPokemon)
    } catch (caughtError) {
      if (caughtError instanceof Error) {
        setError(caughtError.message)
      } else {
        setError('Error desconocido')
      }
    } finally { //finally se ejecuta siempre, haya habido error o no.
      setLoading(false)
    }
  } 
  return (
    <>
    <form onSubmit={handleSubmit}>
      {/* El input actualiza el término de búsqueda */}
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button type="submit" disabled={loading}>{loading ? "Buscando..." : "Buscar"}</button>
    </form>
    <p>Buscar: {searchTerm}</p>
    
    {error && 
      <p role="alert" style={{ color: 'red' }}>{error}</p>}
    {/*PokemonCard*/}
    {pokemon && <PokemonCard pokemon={pokemon} />}

    </>
  )
}

export default App
