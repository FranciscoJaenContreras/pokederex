import { PokemonType } from "../lib/types"

type TypeTagProps = {
  type: PokemonType
}

const TypeTag = ({ type }: TypeTagProps) => {

  const colors = {
    'planta': "bg-green-500",
    'veneno': "bg-fuchsia-700",
    'fuego': "bg-orange-500",
    'agua': "bg-blue-500",
    'bicho': "bg-green-600",
    'normal': "bg-gray-500",
    'volador': "bg-blue-300",
    'eléctrico': "bg-yellow-500",
    'tierra': "bg-brown-500",
    'hielo': "bg-blue-200",
    'lucha': "bg-pink-800",
    'psíquico': "bg-pink-300",
    'roca': "bg-brown-700",
    'fantasma': "bg-purple-400",
    'hada': "bg-pink-500",
    'acero': "bg-gray-900",
    'dragón': "bg-blue-800"
  }

  return <span className={`p-1 md:p-2 lg:px-5 text-center capitalize rounded-md md:rounded-full font-bold text-sm md:text-md lg:text-lg ${colors[type]}`}>{type}</span>
}

export default TypeTag