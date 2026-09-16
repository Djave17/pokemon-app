import { useState } from "react";
import type { PokemonResponse } from "../types/pokemon";
import { FormControlLabel, Switch } from "@mui/material"
import "./PokemonStyle.css"


//Props: objeto que contiene la información del Pokémon
interface PokemonCardProps {
  pokemon: PokemonResponse;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {

  const [isShiny, setIsShiny] = useState(false);
  const artwork = pokemon.sprites.other["official-artwork"]
  const imageUrl = isShiny ? artwork.front_shiny ?? artwork.front_default : artwork.front_default
  const id = pokemon.id.toString().padStart(3, "0")
  const height = pokemon.height / 10
  const weight = pokemon.weight / 10



  return (

    <article className="card">
      <p>#{id}</p>
      <h2> <b>{pokemon.name.toLocaleUpperCase()}</b> </h2>
      {imageUrl ? (<img className="pokemon-image" src={imageUrl} alt={pokemon.name} />) : (<p>No hay imagen disponible</p>)}

      <div className="pokemon-dimensions">
        <div>
          <strong>{weight} kg</strong>
          <span> Weight</span>
        </div>
        <div>
          <strong>{height} m</strong>
          <span> Height</span>

        </div>

      </div>
      <div className="pokemon-types">
        {pokemon.types.map((typeItem) => (
          <span key={typeItem.type.name} className={`pokemon-type ${typeItem.type.name}`}>
            {typeItem.type.name}
          </span>))}
      </div>
      {/*Botón para cambiar la imagen del Pokémon a Shiny */}

      <FormControlLabel
        control={
          <Switch checked={isShiny} onChange={() => setIsShiny((current) => !current)} />}
        label="Shiny"
      />






    </article>




  )
} 
