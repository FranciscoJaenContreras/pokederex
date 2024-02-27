export type PokemonType = 'planta' | 'veneno' | 'fuego' | 'agua' | 'bicho' | 'normal' | 'volador' | 'eléctrico' | 'tierra' | 'hielo' | 'lucha' | 'psíquico' | 'roca' | 'fantasma' | 'hada' | 'acero' | 'dragón'

export type Pokemon = {
  pokedex_number: number;
  name: string;
  image_url: string;
  description: string;
  type_1: PokemonType;
  type_2: null | PokemonType;
  ps: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  pre_evolution: null | number,
  evolution: null | number
}

export type MapeableImage = {
  key: string
  src: string
  alt: string
}