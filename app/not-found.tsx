import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 text-center md:px-6">
      <div className="space-y-6">
        <Image
          alt="Profesor Oak"
          className="mx-auto overflow-hidden object-cover object-center"
          src="/oak.png"
          height="600"
          width="200"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">404 - Página no disponible</h1>
          <p className="mx-auto max-w-[400px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Como dijo el profesor Oak, cada cosa en su momento.
          </p>
        </div>
        <Link
          className="inline-flex items-center rounded-md border border-gray-200 bg-white text-white shadow-sm px-4 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          href="/pokedex"
        >
          Volver a Pokedex
        </Link>
      </div>
    </div>
  )
}