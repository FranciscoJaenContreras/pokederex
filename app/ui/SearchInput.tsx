import { Search } from 'lucide-react'

export default function SearchInput({ placeholder }: { placeholder?: string }) {
 
  return (
    <div className="relative flex flex-1 flex-shrink-0 text-black">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border font-medium border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
        placeholder={placeholder || 'Buscar'}
        onChange={(e) => {
          console.log(e.target.value)
        }}
      />
      <Search color={"black"} size={24} className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}
