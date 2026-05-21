"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { useRef } from "react"
import { Provider as ReduxProvider } from "react-redux"
import { SWRConfig } from "swr"

import { fetcher } from "@/lib/fetcher"
import { type AppStore, makeStore } from "@/store"

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <ClerkProvider>
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
    </ClerkProvider>
  )
}
