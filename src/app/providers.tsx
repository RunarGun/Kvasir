"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { type ReactNode, useRef } from "react"
import { Provider as ReduxProvider } from "react-redux"
import { SWRConfig } from "swr"

import { fetcher } from "@/lib/fetcher"
import { type AppStore, makeStore } from "@/store"

function MaybeClerkProvider({ children }: { children: ReactNode }) {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  if (!key) return <>{children}</>
  return <ClerkProvider>{children}</ClerkProvider>
}

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <MaybeClerkProvider>
      <ReduxProvider store={storeRef.current}>
        <SWRConfig
          value={{
            fetcher,
            revalidateOnFocus: false,
            shouldRetryOnError: false,
          }}
        >
          {children}
        </SWRConfig>
      </ReduxProvider>
    </MaybeClerkProvider>
  )
}
