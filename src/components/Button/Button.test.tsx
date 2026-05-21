import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Button } from "./Button"

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Trykk her</Button>)
    expect(screen.getByRole("button", { name: "Trykk her" })).toBeInTheDocument()
  })

  it("applies variant and color classes", () => {
    render(
      <Button variant="outline" color="orange">
        OK
      </Button>,
    )
    const btn = screen.getByRole("button", { name: "OK" })
    expect(btn.className).toMatch(/variantOutline/)
    expect(btn.className).toMatch(/colorOrange/)
  })
})
