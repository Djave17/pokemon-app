import type { ChangeEventHandler, FormEventHandler} from "react";




interface PokemonHeaderProps{ 
    onSearchSubmit: React.SubmitEventHandler<HTMLFormElement>
}
export default function PokemonHeader({onSearchSubmit}
    : PokemonHeaderProps
){ 
    return ( 
        <header className="pokemon-header">
            <div className="pokemon-header-content"> 
                <div className="pokemon-header-brand">
                    <span>POKEDAVE</span>
                    <small>151 Pokemón</small>
                </div>  

                <form 
                    className="pokemon-search"
                    onSubmit={onSearchSubmit}>
                        <label htmlFor="pokemon-search" className="sr-only">
                            Buscar Pokemon 
                        </label>

                        <search> 

                        </search>
                    
                </form>
                
            </div>
        </header>

    )
}