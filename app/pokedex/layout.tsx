import SideNav from "../ui/SideNav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden w-full">
      <div className="w-full flex-none md:w-40 h-auto md:h-full">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto w-full">{children}</div>
    </div>
  )
}