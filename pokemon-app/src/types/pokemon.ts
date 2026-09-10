// export interface PokemonApiResponse { 
//     id: number, 
//     name: string, 
// }

interface PokemonTypeName {
    name: string
}

interface PokemonSprites { 
    front_default: string | null 
}

interface PokemonTypeItem {
  type: PokemonTypeName
}

export interface PokemonResponse {
  id: number, 
  name: string,
  sprites: PokemonSprites,
  types: PokemonTypeItem[]
}
interface PokemonListItem {
    name: string
}
export interface PokemonListResponse {
  results: PokemonListItem[]
}