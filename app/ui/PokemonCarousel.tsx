import { fetchAllPokemon } from "@/app/lib/querys"
import Carousel from "./Carrousel"
import { MapeableImage } from "../lib/types"

export default async function PokemonCarousel(){

    const pokemons = await fetchAllPokemon()

    const images = pokemons.map(pokemon => ({
        key: pokemon.pokedex_number.toString(),
        src: pokemon.image_url,
        alt: pokemon.name
    }) as MapeableImage)

    return <Carousel images={images}/>
}