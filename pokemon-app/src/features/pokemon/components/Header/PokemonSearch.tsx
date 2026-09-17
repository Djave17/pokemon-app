import { SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface PokemonSearchProps {
  value: string;
  disabled: boolean;
  onValueChange: (value: string) => void;
}

export function PokemonSearch({
  value,
  disabled,
  onValueChange,
}: PokemonSearchProps) {
  return (
    <InputGroup>
      <InputGroupInput
        id="pokemon-search"
        type="search"
        value={value}
        disabled={disabled}
        placeholder="Buscar por nombre o número"
        aria-label="Buscar Pokémon"
        onChange={(event) => onValueChange(event.target.value)}
      />

      <InputGroupAddon align="inline-start">
        <SearchIcon aria-hidden="true" />
      </InputGroupAddon>
    </InputGroup>
  );
}