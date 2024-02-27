export function PokemonCarouselSqueleton() {
  return (
    <div className="flex flex-row p-10 gap-10 overflow-hidden w-full">
      <div className='animate-pulse rounded-full bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-full bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-full bg-gray-100 min-h-[450px] min-w-[450px]'/>
    </div>
  )
}

export function PokemonTableSqueleton() {
  return (
    <div className="flex flex-row flex-wrap p-5 gap-5 w-full">
      <div className='animate-pulse rounded-xl bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-xl bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-xl bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-xl bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-xl bg-gray-100 min-h-[450px] min-w-[450px]'/>
    </div>
  )
}
export function PokemonScreenSqueleton() {
  return (
    <div className="flex flex-col flex-wrap p-5 gap-5 w-full bg-gray-500 rounded-2xl">
      <div className='animate-pulse rounded-full bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-xl bg-gray-100 min-h-[50px] min-w-full'/>
      <div className='animate-pulse rounded-xl bg-gray-100 min-h-[50px] min-w-full'/>
      <div className='animate-pulse rounded-xl bg-gray-100 min-h-[50px] min-w-full'/>
      <div className='animate-pulse rounded-xl bg-gray-100 min-h-[50px] min-w-full'/>
    </div>
  )
}