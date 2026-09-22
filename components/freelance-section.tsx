const clients = [
  "UNHCR",
  "Al-Fursan Program",
  "Hurr Platform",
  "Itar (SaaS)",
  "Al-Enjaz Architecture",
  "Sawghat Ahlana (Iraqi Airways)",
  "Abdul Samad Al Qurashi",
  "Nafisa",
  "Fresh Fries",
  "Awraq",
  "Startup Grind",
  "Voice Over Studio",]

export function FreelanceSection() {
  return (
    <section id="freelance" className="py-16 border-t border-border">
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
        Freelance Work
      </h2>
      <div className="space-y-6">
        <p className="text-foreground leading-relaxed max-w-3xl">
          <span className="text-accent font-medium">2016 - 2025</span>
          <span className="mx-2 text-muted-foreground">|</span>
          Delivered marketing strategy, digital campaigns, and content solutions for 15+ clients
          across commercial, creative, and humanitarian sectors.
        </p>
        <div className="space-y-4">
          <h3 className="text-sm text-muted-foreground">Notable Clients</h3>
          <div className="flex flex-wrap gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
        <p className="text-muted-foreground text-sm max-w-3xl">
          Projects resulted in improved visibility, higher engagement, and measurable 
          business growth for clients across various industries.
        </p>
      </div>
    </section>
  )
}
