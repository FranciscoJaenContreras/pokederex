import { Metadata } from 'next'
import PokemonPage from '../ui/PokemonPage'
import SearchInput from '@/app/ui/SearchInput'
import { Suspense } from 'react'
import { PokemonTableSqueleton } from '../ui/Squeletons'
import { fetchPokemonPages } from '@/app/lib/querys'
import Pagination from '../ui/Pagination'

export const metadata: Metadata = {
  title: 'Nextdex',
}

type PokedexPageProps = {
  searchParams?: {
    query?: string
    page?: string
  }
}

export default async function Page({ searchParams }: PokedexPageProps) {

  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchPokemonPages(query)

  return (
    <div className='flex flex-row flex-wrap gap-4'>
      <SearchInput/>
      <Pagination totalPages={totalPages} />
      <Suspense key={query + currentPage} fallback={<PokemonTableSqueleton />}>
        <PokemonPage query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  )
}