import { Inter } from "next/font/google"
import localFont from "next/font/local"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const motorik = localFont({
  src: [
    {
      path: "../../public/fonts/MotorikTrial-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
  fallback: ["Inter", "system-ui", "sans-serif"],
})
