import type { PokemonResponse, PokemonListResponse } from '../types/pokemon';

export async function getPokemon(identifier: string): Promise<PokemonResponse> {

    const normalizedIdentifier = identifier.toLowerCase().trim(); 
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + normalizedIdentifier);
    if (!response.ok) {
        throw new Error('Pokemón no encontrado: ' + response.statusText);
    }

    const pokemon: PokemonResponse = await response.json(); //Lo guardamos con el contrato de respuesta que espera la función. 
    return pokemon;
}

export async function getPokemonList(limit: number, offset: number): Promise<PokemonListResponse> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

    if(!response.ok) {
        throw new Error("No se pudo obtener la lista de Pokémon")
    }   

    const data: PokemonListResponse = await response.json()
    return data
} 

//https://tailwindflex.com/@thuggys/pokemon




