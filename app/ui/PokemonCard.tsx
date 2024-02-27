import Image from "next/image"
import Link from "next/link"
import TypeTag from "./TypeTag"
import { Pokemon } from "../lib/types"

type PokemonCardProps = {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const {
    pokedex_number,
    name,
    image_url,
    type_1,
    type_2
  } = pokemon

  const formatPokedexNumber = (n: number) => {
    const nLength = n.toString().length
    return (nLength == 1 ? "00" : nLength == 2 ? "0" : "") + n
  }

  return (
    <Link href={`/pokedex/${pokedex_number}`}>
      <div className="rounded-lg p-4 bg-gray-400 text-black overflow-hidden grid grid-cols-3 md:grid-cols-1 justify-center gap-3 h-full">
        <span className="text-sm md:text-md lg:text-lg font-extrabold col-span-2 md:col-span-1 text-center">#{formatPokedexNumber(pokedex_number)} / {name}</span>
        <div className="bg-black rounded-full lg:rounded-3xl bg-opacity-60 p-1 md:p-3 lg:p-5 row-span-2 md:row-span-1">
          <Image
            alt={image_url}
            src={image_url}
            width={600}
            height={600}
          />
        </div>
        <div className="flex w-full gap-2 justify-center items-center px-3 col-span-2 md:col-span-1">
          <TypeTag type={type_1} />
          {!!type_2 && <TypeTag type={type_2} />}
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard