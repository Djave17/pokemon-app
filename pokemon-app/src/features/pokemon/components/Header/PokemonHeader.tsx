import type { SubmitEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import "./PokemonHeader.css";
import { InputGroupInlineStart } from "./searchComponent";

interface PokemonHeaderProps {
    searchValue: string;
    isSearching: boolean;
    onSearchChange: (value: string) => void; //TODO: investigar que significa esta sintaxis
    onSearchSubmit: (event: SubmitEvent<HTMLFormElement>) => void;
}

export default function PokemonHeader({ onSearchSubmit, onSearchChange, searchValue, isSearching }
    : PokemonHeaderProps
) {
    return (
        <header className="pokemon-header">
            <div className="pokemon-header__content">
                <div className="pokemon-header__brand">
                    <span>POKEDAVE</span>
                    <small>151 Pokemón</small>
                </div>

                <form
                    className="pokemon-search"
                    onSubmit={onSearchSubmit}>
                    
                    

                    <InputGroupInlineStart />



                    {/* TODO: Shiny Global */}

                    


                </form>

            </div>
        </header>

    )
}