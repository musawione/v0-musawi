import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    company: "Al-Omran Group",
    role: "Senior Marketing Specialist",
    period: "Sep 2025 - Feb 2026",
    description: [
      "Led marketing direction and brand communication across multiple premium and luxury brands within the group.",
      "Defined brand positioning, content strategy, and executive-level messaging for B2B and high-end audiences.",
      "Planned and supported corporate and brand events, overseeing marketing alignment and content coverage.",
    ],
    tags: ["Brand Strategy", "B2B Marketing", "Event Marketing"],
  },
  {
    company: "Ayn Community",
    role: "Marketing Team Leader",
    period: "Jan 2025 - Sep 2025",
    type: "Remote",
    description: [
      "Designed and led multi-channel campaigns that boosted community engagement by 100%.",
      "Conducted in-depth competitor and market analysis, improving brand positioning.",
      "Optimized ad spend and content performance through analytics, achieving higher ROI.",
    ],
    tags: ["Campaign Management", "Analytics", "Team Leadership"],
  },
  {
    company: "Dijlah TV",
    role: "Media Specialist",
    period: "Jul 2024 - Jun 2025",
    description: [
      "Developed and executed media plans that increased channel viewership.",
      "Produced and edited promotional and news content, ensuring broadcast quality standards.",
      "Aligned media campaigns with business objectives, strengthening brand visibility.",
    ],
    tags: ["Media Planning", "Content Production", "Broadcasting"],
  },
  {
    company: "Indomie Iraq (Al-Masdar Al-Awwal)",
    role: "Marketing Manager",
    period: "Jul 2023 - Jun 2024",
    description: [
      "Led national campaigns, growing brand engagement by 35% and sales by 20%.",
      "Optimized digital ad spend across Meta and Google, achieving 4.2x ROI.",
      "Conducted research to reposition the brand, improving market competitiveness.",
    ],
    tags: ["FMCG", "Digital Advertising", "Brand Growth"],
  },
  {
    company: "Iraqi Media Network",
    role: "Media Specialist",
    period: "2021 - Jun 2024",
    type: "Part-time",
    description: [
      "Managed official social media accounts, increasing audience engagement by 40%.",
      "Produced and curated timely news content aligned with editorial standards.",
      "Implemented digital strategies that expanded reach across multiple platforms.",
    ],
    tags: ["Social Media", "News Media", "Digital Strategy"],
  },
  {
    company: "Technology Organization for Peace",
    role: "Marketing Manager",
    period: "2016 - 2023",
    description: [
      "Advanced through roles from Researcher & Fact-checker to Digital Marketing Specialist, and finally Marketing Manager.",
      "Directed awareness campaigns that reached 500K+ people across Iraq and improved audience engagement by 50%.",
      "Managed social media presence, launched targeted campaigns, and coordinated branding initiatives that boosted visibility and donations.",
    ],
    tags: ["NGO", "Awareness Campaigns", "Social Impact"],
  },
  {
    company: "iBasket",
    role: "Marketing Manager",
    period: "2020 - 2021",
    description: [
      "Designed marketing strategies that improved customer acquisition by 25%.",
      "Managed digital campaigns and social media channels, increasing online sales.",
      "Organized product launches and events to boost brand awareness.",
    ],
    tags: ["Retail", "E-commerce", "Customer Acquisition"],
  },
  {
    company: "Al-Mada Foundation",
    role: "Marketing Executive & News Editor",
    period: "2019 - 2020",
    description: [
      "Executed campaigns to promote social initiatives, reaching wide audiences.",
      "Managed press releases, newsletters, and social media presence.",
      "Edited and published news content while ensuring alignment with brand voice.",
    ],
    tags: ["Media", "Content Strategy", "PR"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 border-t border-border">
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
        Experience
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
          >
            <div className="text-sm text-muted-foreground">
              <p>{exp.period}</p>
              {exp.type && (
                <span className="text-xs text-accent">{exp.type}</span>
              )}
            </div>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-foreground font-medium group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground flex items-center gap-1">
                    {exp.company}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-accent/10 text-accent rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
