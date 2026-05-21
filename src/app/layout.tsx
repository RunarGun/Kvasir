import "@/styles/tailwind.css"
import "@/styles/globals.sass"

import type { Metadata } from "next"

import { inter, motorik } from "@/lib/fonts"
import { cn } from "@/utils/cn"

import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Kvasir",
  description: "Rolig, varm minimalisme.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={cn(inter.variable, motorik.variable)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
