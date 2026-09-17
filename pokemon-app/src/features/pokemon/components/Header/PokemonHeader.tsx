import type { SubmitEvent } from "react";
import { ThemeToggle } from "@/app/theme/ThemeToggle";
import "./PokemonHeader.css";
import { PokemonSearch } from "./PokemonSearch";

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
                    <small>PokeApi de ejemplo</small>
                </div>

                <div className="pokemon-header__controls">
                    <form
                        className="pokemon-search"
                        onSubmit={onSearchSubmit}
                    >
                        <PokemonSearch
                            value={searchValue}
                            disabled={isSearching}
                            onValueChange={onSearchChange}
                        />
                    </form>

                    <ThemeToggle />
                </div>

            </div>
        </header>

    )
}