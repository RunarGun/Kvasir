import { FlatCompat } from "@eslint/eslintrc"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  { ignores: [".next/**", "node_modules/**", "coverage/**"] },
]

export default config
