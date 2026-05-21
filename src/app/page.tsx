import { Button } from "@/components/Button/Button"
import { H1 } from "@/components/Typography/H1/H1"
import { H3 } from "@/components/Typography/H3/H3"
import { Label } from "@/components/Typography/Label/Label"
import { P1 } from "@/components/Typography/P1/P1"
import { P2 } from "@/components/Typography/P2/P2"

import styles from "./page.module.sass"

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Label color="orange">Kvasir</Label>
        <H1>Rolig, varm minimalisme.</H1>
        <P1 color="muted">
          Et utgangspunkt bygget med Next.js, React, Clerk, Redux Toolkit og SWR — pakket inn i en
          dempet palett av beige, lyseblå og grønn.
        </P1>

        <div className={styles.actions}>
          <Button variant="solid" color="orange">
            Kom i gang
          </Button>
          <Button variant="outline">Les mer</Button>
        </div>
      </section>

      <section className={styles.cards}>
        <article className={styles.card}>
          <H3>Auth</H3>
          <P2 color="muted">Clerk håndterer pålogging og økter ut av boksen.</P2>
        </article>
        <article className={styles.card}>
          <H3>State</H3>
          <P2 color="muted">Redux Toolkit for global tilstand, SWR for serverdata.</P2>
        </article>
        <article className={styles.card}>
          <H3>Styling</H3>
          <P2 color="muted">CSS Modules med Sass, design tokens og Tailwind utilities.</P2>
        </article>
      </section>
    </main>
  )
}
