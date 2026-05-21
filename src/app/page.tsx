import { Asterisk } from "@/components/Asterisk/Asterisk"
import { Brand } from "@/components/Brand/Brand"
import { MatrixRow } from "@/components/MatrixRow/MatrixRow"
import { P3 } from "@/components/Typography/P3/P3"

import styles from "./page.module.sass"

export default function HomePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Brand name="Taki" tagline="thinking engine" />
      </header>

      <section className={styles.matrix}>
        <MatrixRow
          category="Outcomes"
          categoryDescription="What your business gets"
          categoryColor="beige"
          cells={[
            {
              title: "Smarter employees",
              description: "Taki alongside every person.",
              pills: [
                { label: "Chat", variant: "solid", color: "red" },
                { label: "Code", variant: "solid", color: "red" },
                { label: "Cowork", variant: "solid", color: "red" },
              ],
            },
            {
              title: "Faster processes",
              description: "Agents that run core workflows end-to-end.",
              pills: [
                { label: "Contract review" },
                { label: "Underwriting" },
                { label: "Fund reconciliation" },
              ],
            },
            {
              title: "Transformative products",
              description: "Taki-powered experiences for your customers.",
            },
          ]}
        />

        <MatrixRow
          category="Platform"
          categoryDescription="How you build & run it"
          categoryColor="green"
          cells={[
            {
              title: "Primitives",
              description: "Building blocks for full customization.",
              pills: [
                { label: "API" },
                { label: "Tools" },
                { label: "Skills" },
                { label: "Connectors" },
                { label: "Subagents" },
              ],
            },
            {
              title: "Managed agents",
              description: "Infrastructure for production agents.",
              pills: [
                { label: "Sandboxing" },
                { label: "Harness" },
                { label: "Orchestration" },
              ],
            },
            {
              title: "Operating system",
              description: "Deploy, govern, and monitor at scale.",
              pills: [
                { label: "Auth" },
                { label: "Controls" },
                { label: "Audit" },
              ],
            },
          ]}
        />

        <MatrixRow
          category="Models"
          categoryDescription="The intelligence underneath"
          categoryColor="red"
          cells={[
            {
              icon: <Asterisk size={18} />,
              title: "Taki Prime",
              description: "Industry-leading intelligence",
            },
            {
              icon: <Asterisk size={18} />,
              title: "Taki Flow",
              description: "General-purpose intelligence",
            },
            {
              icon: <Asterisk size={18} />,
              title: "Taki Spark",
              description: "Cost-effective intelligence",
            },
          ]}
        />
      </section>

      <footer className={styles.footer}>
        <div className={styles.providers}>
          <P3 color="muted">Available on</P3>
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.provider}>
            <Asterisk size={14} />
            First-party
          </span>
          <span className={styles.provider}>Cloud</span>
          <span className={styles.provider}>Edge</span>
        </div>
      </footer>
    </main>
  )
}
