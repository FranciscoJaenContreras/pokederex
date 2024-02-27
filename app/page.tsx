import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import PokemonCarousel from './ui/PokemonCarousel'
import { PokemonCarouselSqueleton } from './ui/Squeletons'

export default async function Home() {

  return (
    <main className="flex-1 justify-center items-center p-5">
      <section className="w-full h-full py-6 sm:py-12 md:py-24 ">
        <div className="relative grid items-center grid-cols-1 lg:grid-cols-3 lg:gap-0 lg:items-stretch lg:min-h-[600px]">
          <div className="flex flex-col justify-center items-center gap-5 p-5">

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.5rem] 2xl:text-[5.25rem] text-center">
              Aprende Next.js con la Pokédex
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Aprenderemos como funciona el sistema de rutas estáticas y dinámicas, gestionar estados de carga y error, conectar con base de datos postgreSQL, deployear tu proyecto en vercel y más
            </p>

            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/pokedex"
            >
              Empezar
            </Link>
          </div>
          <div className="mx-auto relative overflow-hidden  aspect-square md:aspect-video rounded-tl-lg lg:rounded-tl-none lg:rounded-tr-lg lg:col-span-2">

          <Image
    alt="Landing page pokedex image"
    className="object-cover min-h-auto min-w-screen rounded-lg aspect-square block md:hidden"
    height={545}
    width={365}
    src="/smPokedex.jpg"
  />
  <Image
    alt="Landing page pokedex image"
    className="object-cover min-h-full min-w-full rounded-lg aspect-video hidden md:block"
    height={1080}
    width={1920}
    src="/pokedex.jpeg"
  />  
  <div className=" flex items-center justify-center absolute inset-0">
    <Suspense fallback={<PokemonCarouselSqueleton />}>
      <PokemonCarousel />
    </Suspense>
  </div>
            
          </div>
        </div>
      </section>
    </main>
  )
}
