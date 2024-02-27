type PokemonPageProps = {
    params: { pokedex_number: number }
  }
  
  export default async function Page({ params }: PokemonPageProps) {
      return <p>{params.pokedex_number}</p>
  }