import type { SubmitEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

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
                    <Input
                        id="pokemon-search"
                        type="search"
                        value={searchValue}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Buscar por nombre o número"
                        disabled={isSearching}
                    />
                    <Button type="submit" disabled={isSearching}>
                        {isSearching ? "Buscando…" : "Buscar"}
                    </Button>

                </form>

            </div>
        </header>

    )
}