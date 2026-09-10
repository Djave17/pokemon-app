import { useState } from "react";
import type {  PokemonResponse } from "../types/pokemon";

//Props: objeto que contiene la información del Pokémon
interface PokemonCardProps {    
  pokemon: PokemonResponse;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {

  const [isShiny, setIsShiny] = useState(false); 
  const artwork = pokemon.sprites.other["official-artwork"]
  const imageUrl = isShiny ? artwork.front_shiny ?? artwork.front_default : artwork.front_default
  const id = pokemon.id.toString().padStart(3, "0")
  const height = pokemon.height * 10
  const weight = pokemon.weight / 10 
  
  
  
  return ( 
    <article>
      <p>#{id}</p>
      <h2> {pokemon.name} </h2>
      {imageUrl ? ( <img src={imageUrl} alt={pokemon.name} />) : ( <p>No hay imagen disponible</p> )}

      <div className = "pokemon-dimensions"> 
        <div>
          <strong>{weight} kg</strong>
          <span> Weight</span> 
        </div>
        <div> 
          <strong>{height} cm</strong>
          <span> Height</span>
          
        </div>
        
      </div>
      <div className = "pokemon-types"> 
        {pokemon.types.map((typeItem) => (
          <span key={typeItem.type.name} className={`pokemon-type ${typeItem.type.name}`}>
            {typeItem.type.name}
          </span>))}
      </div>
      {/*Botón para cambiar la imagen del Pokémon a Shiny */}
      <button className = "isShiny" type = "button"  onClick={() => setIsShiny((current) => !current)}> 
       shiny
      </button>



     

    </article>


    
  )
} 
