import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Learn Next",
  description: "Landing Page of NextJS pokedex proyect",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className='flex w-full h-full align-middle justify-center'>
        {children}
      </body>
    </html>
  )
}
