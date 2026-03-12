import Link from "next/link";

const posts = [
  { slug: "transformation-thomas", title: "Wie Thomas in 16 Wochen 12kg Muskelmasse aufgebaut hat", excerpt: "Thomas war CEO einer Tech-Firma und hatte kaum Zeit für sich. Mit der 124 Method hat er es geschafft, trotz 60-Stunden-Woche sichtbare Ergebnisse zu erzielen.", date: "12. März 2026", category: "Transformation" },
  { slug: "124-method-explained", title: "Die 124 Method erklärt: Warum weniger Training mehr Ergebnisse bringt", excerpt: "Du brauchst keine 6 Tage im Gym. Mit 3 strukturierten Sessions pro Woche erzielst du bessere Ergebnisse als 90% der Gym-Gänger.", date: "10. März 2026", category: "Methode" },
  { slug: "meal-prep-busy-men", title: "Meal Prep für vielbeschäftigte Männer: Der 30-Minuten-Guide", excerpt: "Ernährung muss nicht kompliziert sein. Mit diesem simplen System bereitest du alle Mahlzeiten in 30 Minuten für die ganze Woche vor.", date: "8. März 2026", category: "Ernährung" },
  { slug: "compound-vs-isolation", title: "Compound vs. Isolation: Warum du beides brauchst", excerpt: "Die ewige Debatte endlich aufgelöst. Hier ist die wissenschaftliche Antwort – und wie die 124 Method beides perfekt kombiniert.", date: "5. März 2026", category: "Training" },
  { slug: "consistency-over-intensity", title: "Warum Konsistenz Intensität schlägt – immer", excerpt: "Der größte Fehler, den vielbeschäftigte Männer im Gym machen? Sie trainieren zu hart, zu oft, und dann gar nicht mehr.", date: "2. März 2026", category: "Mindset" },
  { slug: "client-highlight-michael", title: "Client Highlight: Michael – Stärker als mit 25", excerpt: "Michael ist 42, CEO und Vater von drei Kindern. Hier ist seine Geschichte, wie er mit der 124 Method die Form seines Lebens erreicht hat.", date: "28. Feb 2026", category: "Transformation" },
];

export default function BlogPage() {
  return (
    <>
      <section style={{ paddingTop: "140px", padding: "140px 24px var(--section-padding)", background: "var(--gradient-dark)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <span className="section-label">Blog</span>
          <h1 style={{ marginBottom: "24px" }}>INSIGHTS &amp; <span className="text-gradient">UPDATES</span></h1>
          <p style={{ color: "var(--color-muted)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Tipps, Transformationen und Wissen rund um Training, Ernährung und den Lifestyle eines busy man.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="grid-3">
            {posts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }}>
                  <div style={{ aspectRatio: "16/9", borderRadius: "var(--radius-md)", background: "var(--color-bg)", border: "1px solid var(--color-border)", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted-dark)", fontSize: "13px" }}>
                    [Blog Bild]
                  </div>
                  <span style={{ fontSize: "11px", color: "var(--color-primary)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>{post.category}</span>
                  <h3 style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 700, lineHeight: 1.4, marginBottom: "12px", textTransform: "none", letterSpacing: "0" }}>{post.title}</h3>
                  <p style={{ color: "var(--color-muted)", fontSize: "13px", lineHeight: 1.7, flex: 1, marginBottom: "16px" }}>{post.excerpt}</p>
                  <span style={{ fontSize: "12px", color: "var(--color-muted-dark)" }}>{post.date}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
