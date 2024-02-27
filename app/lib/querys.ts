
import { sql } from '@vercel/postgres'
import { Pokemon } from "./types"
import { unstable_noStore as noCache } from 'next/cache'
import { error } from 'console'
import { notFound } from 'next/navigation'


export async function fetchAllPokemon() {
  noCache()

  try {

    console.log('Fetching all pokemon data...')
    // ! No hacer en produción
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const data = await sql<Pokemon>`SELECT * FROM pokemon ORDER BY pokedex_number ASC`

    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch pokemons data.')
  }
}

export async function fetchPokemonByPokedexNumber(pokedex_number: number) {
  noCache()

  try {
    console.log(`Fetching pokemon ${pokedex_number} data...\``)

    const data = await sql<Pokemon>`SELECT * FROM pokemon WHERE pokedex_number = ${pokedex_number}`

    return data.rows[0]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error(`Failed to fetch pokemon ${pokedex_number} data.`)
  }
}

const ITEMS_PER_PAGE = 6

export async function fetchFilteredPokemons(
  query: string,
  currentPage: number,
) {
  noCache()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  try {
    console.log(`Fetching filtered pokemon data ${query}...`)

    const pokemon = await sql<Pokemon>`
    SELECT * FROM pokemon WHERE 
      name ILIKE ${`%${query}%`} OR
      type_1 LIKE ${`%${query}%`} OR
      type_2 ILIKE ${`%${query}%`}
      ORDER BY pokedex_number ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`
    
    return pokemon.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error(`Failed to fetch pokemons.`)
  }
}

export async function fetchPokemonPages(query: string) {
  noCache()
  try {
    const count = await sql`SELECT COUNT(*)
    FROM pokemon
    WHERE
      name ILIKE ${`%${query}%`} OR
      type_1 ILIKE ${`%${query}%`} OR
      type_2 ILIKE ${`%${query}%`}
  `
  
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch total number of pokemons.')
  }
}
