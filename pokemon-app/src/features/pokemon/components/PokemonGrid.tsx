import type { ReactNode } from 'react' //Cualquier contenido que react pueda renderizar, como elementos, cadenas o fragmentos.
import { Box } from '@mui/material'

interface PokemonGridProps { 
    children: ReactNode; 
}

export function PokemonGrid({ children }: PokemonGridProps) {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: "minmax(0, 1fr)", //Un card por fila en pantallas pequeñas.
                    sm: "repeat(2, minmax(0, 1fr))", //Dos cards por fila en pantallas medianas.
                    lg: "repeat(3, minmax(0, 1fr))", //Tres cards por fila en pantallas grandes.
                },
                gap: 2, //Espacio entre los elementos de la cuadrícula.
                padding: 2, //Padding alrededor de la cuadrícula.
            }}
        >
            {children}
        </Box>
    )
}