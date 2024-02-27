'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <main className="flex h-1/2 flex-col items-center justify-center">
      <h2 className="text-center">Algo no ha ido bien!</h2>
      <button
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm text-black font-semibold transition-colors hover:bg-red-400"
        onClick={
          () => reset()
        }
      >
        Reintentar
      </button>
    </main>
  )
}