import "@/styles/tailwind.css"
import "@/styles/globals.sass"

import type { Metadata } from "next"

import { inter } from "@/lib/fonts"

import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Kvasir",
  description: "Rolig, varm minimalisme.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
