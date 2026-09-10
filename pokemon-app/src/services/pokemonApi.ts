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

export async function getPokemonList(): Promise<PokemonListResponse> {
   //const normalizedIdentifier = identifier.toLowerCase().trim();

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    if (!response.ok) {
        throw new Error('Error al obtener la lista de Pokémon: ' + response.statusText);
    }

    const data: PokemonListResponse = await response.json();
    //return 
} 

//https://tailwindflex.com/@thuggys/pokemon




