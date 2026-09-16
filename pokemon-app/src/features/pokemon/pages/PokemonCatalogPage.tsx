import { useEffect, useState, type SubmitEvent } from 'react'
import "../../../App.css";
import type { PokemonResponse, PokemonPage } from '../types/pokemon'
import { getPokemon, getPokemonPage } from '../services/pokemonApi'
import { PokemonCard } from '../components/PokemonCard'
import { TextField } from '@mui/material'
import { PokemonCatalogLayout } from '../layouts/PokemonCatalogLayout'
//import SearchIcon from '@mui/icons-material/Search'

function PokemonCatalogPage() {

  const [searchTerm, setSearchTerm] = useState<string>("")
  //definimos la variable y la funcion que cambiara el estado de la variable, ademas de definir el tipo de dato que tendra la variable.

  const [pokemon, setPokemon] = useState<PokemonResponse | null>(null)

  const [loading, setLoading] = useState<boolean>(false)

  const [error, setError] = useState<string | null>(null)

  const [pokemonPage, setPokemonPage] = useState<PokemonPage | null>(null)

  const [isListLoading, setIsListLoading] = useState<boolean>(false)

  const [listError, setListError] = useState<string | null>(null)

  const [hasSearched, setHasSearched] = useState<boolean>(false)

  useEffect(() => {
    async function loadInitialPokemon() {
      setIsListLoading(true)
      setListError(null)
      try {
        const pageResponse = await getPokemonPage(10, 0) //Obtenemos la primera pagina de pokemones, con un limite de 10 pokemones y un offset de 0.
        setPokemonPage(pageResponse) //Guardamos la lista de pokemones en el estado.
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setListError(caughtError.message)
          console.error("Error al cargar la lista de Pokémon:", caughtError.message)
        } else {
          setListError("Error desconocido al cargar la lista de Pokémon")
          console.error("Error desconocido al cargar la lista de Pokémon: " + caughtError)
        }
      } finally {
        setIsListLoading(false)
      }
    }
    loadInitialPokemon()
  }, []) //El array vacio indica que solo se ejecutara una vez, al montar el componente.

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault() //Evita que se recargue la pagina al enviar el formulario.
    const normalizedSearchTerm = searchTerm.trim()

    if (!normalizedSearchTerm) {
      setError("Por favor ingrese un nombre de Pokémon")
      setPokemon(null)
      setHasSearched(false)
      return
    }
    setLoading(true)
    setError(null)
    setHasSearched(true)
    setPokemon(null) //Limpiamos el estado del Pokémon antes de buscar uno nuevo.

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
    <PokemonCatalogLayout
      header={
        <>
          <h1>Pokémon Search</h1>
          <form className="mx-auto mb-8 flex w-full max-w-md gap-2" onSubmit={handleSubmit}>
            {/* El input actualiza el término de búsqueda */}
            <TextField
              type="search"
              placeholder="Ejemplo: pikachu"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              fullWidth
            />
            <button type="submit" disabled={loading}>{loading ? "Buscando..." : "Buscar"}</button>
          </form>
          <p>Buscar: {searchTerm}</p>
        </>
      }
      sidebar={<p>Filtros</p>}
      footer={<p>Paginacion</p>}
    >



      {error &&
        <p role="alert" style={{ color: 'red' }}>{error}</p>}

      {isListLoading && <p>Cargando lista de Pokémons...</p>}

      {listError && <p role="alert" style={{ color: 'red' }}>{listError}</p>}

      {!hasSearched && pokemonPage && (
        <section className="pokemon-list">
          {pokemonPage.items.map((pokemonItem) => (
            <PokemonCard key={pokemonItem.id} pokemon={pokemonItem} />
          ))}
        </section>
      )}

      {/*PokemonCard*/}
      {hasSearched && pokemon && <PokemonCard pokemon={pokemon} />}

    </PokemonCatalogLayout>
  )
}

export default PokemonCatalogPage
