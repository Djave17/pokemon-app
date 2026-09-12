// export interface PokemonApiResponse { 
//     id: number, 
//     name: string, 
// }

export interface PokemonListResponse {
  count: number 
  results: PokemonListItem[]
}
export interface PokemonResponse {
  id: number, 
  name: string,
  sprites: PokemonSprites,
  types: PokemonTypeItem[]
  height: number,
  weight: number
}

export interface PokemonPage { 
  count: number
  items: PokemonResponse[]
}
interface PokemonTypeName {
    name: string
}

interface PokemonSprites { 
    front_default: string | null, 
    front_shiny: string | null,
    other: PokemonOtherSprites


}

interface PokemonTypeItem {
  type: PokemonTypeName
}

export interface PokemonListItem {
    name: string
    url: string
}

interface PokemonArtwork { 
  front_default: string | null
  front_shiny: string | null

} 

interface PokemonOtherSprites{ 
  "official-artwork": PokemonArtwork
}



