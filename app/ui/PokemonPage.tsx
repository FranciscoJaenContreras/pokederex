
import { fetchFilteredPokemons } from '@/app/lib/querys'
import PokemonCard from './PokemonCard'

export default async function PokemonTable({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {
  const pokemons = await fetchFilteredPokemons(query, currentPage)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {pokemons.map(pokemon =>
        <PokemonCard key={pokemon.pokedex_number} pokemon={pokemon} />
      )}
    </div>
  )
}
