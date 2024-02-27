import { fetchPokemonByPokedexNumber } from "@/app/lib/querys"
import TypeTag from "@/app/ui/TypeTag"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
// import { notFound } from 'next/navigation'

type PokemonPageProps = {
  params: { pokedex_number: number }
}

export default async function Page({ params }: PokemonPageProps) {

  const { pokedex_number } = params

  const pokemon = await fetchPokemonByPokedexNumber(pokedex_number)

   if (!pokemon) notFound()

  const {
    name,
    description,
    image_url,
    type_1,
    type_2,
    ps,
    attack,
    defense,
    special_attack,
    special_defense,
    speed,
    evolution,
    pre_evolution
  } = pokemon

  const formatPokedexNumber = (n: number) => {
    const nLength = n.toString().length
    return (nLength == 1 ? "00" : nLength == 2 ? "0" : "") + n
  }

  return (
    <section className="w-full max-w-lg mx-auto">
      <div className="p-6 bg-gray-500 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-semibold">#{formatPokedexNumber(pokedex_number)}</div>
          <div className="text-3xl font-semibold">{name}</div>
        </div>
        <div className="flex flex-col justify-center w-full items-start gap-4 my-4">
          <Image
            alt={image_url}
            src={image_url}
            width="200"
            height="200"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
          />
          <div className="grid gap-1">
            <p className="font-semibold">Descripción</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="grid gap-4 border-y py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Type</div>
            <div className="grid grid-cols-2 items-center gap-2">
              <TypeTag type={type_1} />
              {!!type_2 && <TypeTag type={type_2} />}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">PS</div>
            <div>{ps}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Ataque</div>
            <div>{attack}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Defensa</div>
            <div>{defense}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Ataque especial</div>
            <div>{special_attack}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Defensa especial</div>
            <div>{special_defense}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Velocidad</div>
            <div>{speed}</div>
          </div>
          <div className="flex flex-row justify-around items-center gap-4">
            {!!pre_evolution &&
              <Link href={`/pokedex/${pre_evolution}`}>
                <div className="font-semibold">Pre-evolución</div>
              </Link>
            }
            {!!evolution &&
              <Link href={`/pokedex/${evolution}`}>
                <div className="font-semibold">Evolución</div>
              </Link>
            }
          </div>
        </div>
      </div>
    </section>
  )
} 