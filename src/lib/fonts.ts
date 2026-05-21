import { Inter } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

// Drop the .woff2 in public/fonts/, then uncomment + add `motorik.variable`
// to the <html> className in src/app/layout.tsx.
//
// import localFont from "next/font/local"
//
// export const motorik = localFont({
//   src: [
//     {
//       path: "../../public/fonts/MotorikTrial-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//   ],
//   variable: "--font-heading",
//   display: "swap",
//   fallback: ["Inter", "system-ui", "sans-serif"],
// })
