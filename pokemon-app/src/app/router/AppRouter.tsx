import { BrowserRouter, Routes, Route } from 'react-router'
import  PokemonCatalogPage  from '../../features/pokemon/pages/PokemonCatalogPage'
import {PokemonDetailPage} from '../../features/pokemon/pages/PokemonDetailPage'
import { AppShell } from '../layout/AppShell'



export function AppRouter(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route element = {<AppShell />}>
                    <Route index element = {<PokemonCatalogPage />} />
                    <Route
                        path = "/pokemon/:pokemonId"
                        element = {<PokemonDetailPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}