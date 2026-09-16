
import type { ReactNode } from 'react' //Cualquier contenido que react pueda renderizar, como elementos, cadenas o fragmentos.
import { Box } from '@mui/material'

interface PokemonCatalogLayoutProps {
    header: ReactNode;
    sidebar: ReactNode;
    children: ReactNode;
    mobileFilters: ReactNode;
    footer: ReactNode;
}



export function PokemonCatalogLayout({ header, sidebar, children, footer, mobileFilters }: PokemonCatalogLayoutProps) {

    return (
        <Box>
            <Box component="header">{header}</Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: "minmax(0, 1fr)", //En móvil, el contenido ocupa una sola columna.
                        md: "250px minmax(0, 1fr)", //En pantallas medianas y grandes, el sidebar ocupa 250px y el contenido principal ocupa el resto del espacio.
                    }
                }}
            >

                <Box component="aside"
                    sx={{
                        display: { xs: 'none', md: 'block' }, //Oculta el sidebar en pantallas pequeñas y lo muestra en pantallas medianas y grandes.
                        borderRight: 1, //Agrega un borde derecho al sidebar.
                        borderColor: 'divider', //El color del borde es el color del divisor del tema.
                    }}>{sidebar}</Box>
                <Box sx={{ minWidth: 0 }}>
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>{mobileFilters}</Box>
                    <Box component="section">{children}</Box>
                    <Box component="footer">{footer}</Box>
                </Box>

            </Box>

        </Box>
    )
} 