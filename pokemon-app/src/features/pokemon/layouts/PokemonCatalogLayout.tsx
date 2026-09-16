
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
            <Box component="header"
            sx={{
                
                padding: 2
                }}>{header}
                
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: "minmax(0, 1fr)", //En móvil, el contenido ocupa una sola columna.
                        md: "180px minmax(0, 1fr)",
                        lg: "200px minmax(0, 1fr)", //En pantallas medianas y grandes, el sidebar ocupa 250px y el contenido principal ocupa el resto del espacio.
                    }
                }}
            >

                <Box component="aside"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 2,
                        boxSizing: "border-box",
                        borderRight: 1,
                        borderColor: "white",
                        
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