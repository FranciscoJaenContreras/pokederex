import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <Image
        alt={"MissingN0"}
        src={"/pokemon/MissingNO.png"}
        height={400}
        width={400}
      />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested pokemon.</p>
      <Link
        href="/pokedex"
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm text-black font-bold transition-colors hover:bg-red-400"
      >
        Volver a Pokedex
      </Link>
    </main>
  )
}