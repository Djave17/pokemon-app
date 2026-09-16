
import type { ReactNode } from 'react' //Cualquier contenido que react pueda renderizar, como elementos, cadenas o fragmentos.
import { Box } from '@mui/material'

interface PokemonCatalogLayoutProps {
    header: ReactNode;
    sidebar: ReactNode;
    children: ReactNode;
    mobileFilters: ReactNode;
    footer: ReactNode;
}


export function PokemonCatalogLayout({ header, sidebar, children, footer }: PokemonCatalogLayoutProps) {

    return (
        <Box>
            <Box component="header">{header}</Box>

            <Box>
                <Box component="aside">{sidebar}</Box>
                <Box component="section">{children}</Box>
                <Box component="footer">{footer}</Box>
            </Box>

        </Box>
    )
} 