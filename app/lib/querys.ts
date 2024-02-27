import { sql } from '@vercel/postgres'
import { Pokemon } from "./types"
import { notFound } from 'next/navigation'

export async function fetchAllPokemon() {

  console.log('Fetching all pokemon data...')

  const data = await sql<Pokemon>`SELECT * FROM pokemon ORDER BY pokedex_number ASC`

  return data.rows
}

export async function fetchPokemonByPokedexNumber(pokedex_number: number) {

  console.log(`Fetching pokemon ${pokedex_number} data...`)

  const data = await sql<Pokemon>`SELECT * FROM pokemon WHERE pokedex_number = ${pokedex_number}`

  if (!data.rows[0]) notFound()

  return data.rows[0]

}

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredPokemons(
  query: string,
  currentPage: number,
) {

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  console.log(`Fetching filtered pokemon data ${query}...`)

  const pokemon = await sql<Pokemon>`
    SELECT * FROM pokemon WHERE 
      name ILIKE ${`%${query}%`} OR
      type_1 LIKE ${`%${query}%`} OR
      type_2 ILIKE ${`%${query}%`}
      ORDER BY pokedex_number ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`

  return pokemon.rows

}

export async function fetchPokemonPages(query: string) {
  const count = await sql`SELECT COUNT(*)
    FROM pokemon
    WHERE
      name ILIKE ${`%${query}%`} OR
      type_1 ILIKE ${`%${query}%`} OR
      type_2 ILIKE ${`%${query}%`}
  `

  const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE)
  return totalPages
}