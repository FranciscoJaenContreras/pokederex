import { NavLinks } from './NavLinks'

const SideNav = () => {
  return (
    <div className="flex h-full flex-col p-2 md:p-3">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden  w-full text-black grow rounded-md bg-gray-400 md:flex md:grow flex-col justify-end align-middle p-3">
        </div>
      </div>
    </div>
  )
}

export default SideNav