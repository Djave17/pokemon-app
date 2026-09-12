import { useEffect, useState, type SubmitEvent } from 'react'
import './App.css'
import type { PokemonResponse, PokemonListResponse } from './types/pokemon'
import { getPokemon,getPokemonList } from './services/pokemonApi'
import { PokemonCard } from './components/PokemonCard'
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

function App() {
  
  const [searchTerm, setSearchTerm] = useState<string>("")
  //definimos la variable y la funcion que cambiara el estado de la variable, ademas de definir el tipo de dato que tendra la variable.

  const [pokemon, setPokemon] = useState<PokemonResponse | null>(null)
  
  const [loading, setLoading] = useState<boolean>(false)

  const [error, setError] = useState<string | null>(null)

  const [pokemonList, setPokemonList] = useState<PokemonResponse[]>([])

  const [isListLoading, setIsListLoading] = useState<boolean>(false)

  useEffect(() => {
    async function loadInitialPokemon() {
      setIsListLoading(true)
      const response = await getPokemonList(10, 0) 
    }
    loadInitialPokemon()
  }, []) //El array vacio indica que solo se ejecutara una vez, al montar el componente.

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault() //Evita que se recargue la pagina al enviar el formulario.
    const normalizedSearchTerm = searchTerm.trim()

    if(!normalizedSearchTerm) {
      setError("Por favor ingrese un nombre de Pokémon")
      return
    }      
    setLoading(true) 
    setError(null) 
    

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
    <h1>Pokémon Search</h1>
    <form className="mx-auto mb-8 flex w-full max-w-md gap-2" onSubmit={handleSubmit}>
      {/* El input actualiza el término de búsqueda */}
      <TextField
        type="search"
        placeholder="Ejemplo: pikachu"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        size = "small"
        fullWidth
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
