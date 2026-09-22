import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    company: "Nabd Al Khaleej Real Estate (Al-Taif Bank Group)",
    role: "Performance & Growth Specialist",
    period: "Jul 2026 - Present",
    description: [
            "Own performance marketing and growth across the company's real estate portfolio, including Al-Rehab, Al-Zafaran, Al-Ritaj, Al-Hayat, DAMAC-branded, and company-owned assets.",
      "Brought cost-per-lead down to $0.35 by refining audience targeting, creative, and campaign structure.",
            "Contributed, alongside the wider marketing team, to selling 12 apartments in a residential complex within the first 18 days on the job.",
      "Reworked messaging tone and content approach to launch fast, low-budget campaigns without sacrificing lead quality.",
      "Manage Salesforce CRM data for segmentation, lead tracking, and sales follow-up; partner with the sales team to improve lead-to-conversion flow.",
    ],
    tags: ["Performance Marketing", "Real Estate", "CRM"],
  },
  {
    company: "Muelen (مُعلِن)",
    link: "https://muelen.com",
    role: "Founder",
    period: "Feb 2026 - Jun 2026",
    type: "Remote",
    description: [
            "Founded Muelen, an agency specialized in buying digital ad space and managing social media operations for businesses.",
      "Defined the service model, pricing, and packages, and secured the agency's initial clients before moving into an in-house growth role.",
    ],
    tags: ["Entrepreneurship", "Paid Media", "Social Management"],
  },
  {
    company: "Al-Omran Group",
    role: "Senior Marketing Specialist",
    period: "Aug 2025 - Feb 2026",
    description: [
      "Set marketing direction and brand communication across multiple premium and luxury brands within the group, including executive-level B2B messaging.",
      "Built the department's functional structure and assembled its in-house production team.",
            "Led the internal launch event introducing Elie Saab as a new luxury brand within the group.",
      "Planned, coordinated, and delivered the Al-Omran Award for Architects event end-to-end.",
      "Delivered an awareness and store-visit campaign for Asbagh Burger that drove 1,200 branch visits in 10 days on a limited budget.",
    ],
    tags: ["Brand Strategy", "Luxury", "B2B Marketing"],
  },
  {
    company: "Ayn Community Agency",
    role: "Marketing Team Lead",
    period: "Oct 2024 - Aug 2025",
    type: "Hybrid",
    description: [
      "Led the marketing department and a cross-functional team serving multiple agency clients.",
      "Launched 10 brands in Najaf spanning restaurants, clinics, and a woodworking manufacturer.",
      "Directed visual identity development and full marketing management for several resale and clinic brand accounts.",
      "Ran seasonal and occasion-based campaigns that lifted sales and brand awareness for multiple clients.",
      "Managed the production and social media teams; advised business owners on social account security.",
    ],
    tags: ["Agency", "Campaign Management", "Team Leadership"],
  },
  {
    company: "Dijlah TV",
    role: "Broadcast Director & Social Media Specialist",
    period: "Aug 2024 - May 2025",
    type: "Part-time",
    description: [
      "Expanded the channel's live and social broadcast footprint from 2 to 5 platforms.",
      "Modernized news delivery by introducing social-media-native news formats in place of traditional broadcast style.",
      "Diagnosed technical broadcast issues in real time and built fast, repeatable workarounds.",
    ],
    tags: ["Broadcast", "Social Media", "Media Production"],
  },
  {
    company: "Al-Masdar Al-Awwal (Indomie Iraq)",
    role: "Marketing Manager",
    period: "Jul 2023 - Jul 2024",
    description: [
      "Built the brand's marketing team from the ground up.",
            'Led national campaigns that grew brand engagement 35% and sales 20%, including the Indomie Mi Goreng launch and a Ramadan "Iftar Indomie" community campaign for security personnel.',
      "Managed Meta and Google advertising to a 4.2x ROAS.",
            "Oversaw the factory's public-facing brand presence and designed department-specific staff uniforms compliant with food-industry and global brand standards.",
      "Coordinated the in-house team with contracted social media, production, and influencer agencies.",
    ],
    tags: ["FMCG", "Digital Advertising", "Brand Growth"],
  },
  {
    company: "Iraqi Media Network",
    role: "News Editor",
    period: "Jul 2021 - Jul 2024",
    type: "Part-time",
    description: [
      'Edited news content for the network\'s news and general channels, owning the "Wilayat Batikh" program.',
      "Managed and secured the network's social media accounts, liaising between security agencies and the social team.",
      "Trained the social media team on platform security and basic design/editing tools.",
    ],
    tags: ["News Media", "Social Media", "Training"],
  },
  {
    company: "Technology Organization for Peace",
    role: "Marketing Manager",
    period: "Apr 2021 - Jul 2023",
    description: [
      'Led the "Download Technology App" campaign with agency partner Boardman, driving 15,000 downloads in 3 months.',
      "Diversified content across social platforms and grew the production team.",
      "Trained teams and ran workshops on social media and digital marketing.",
    ],
    tags: ["NGO", "App Growth", "Training"],
  },
  {
    company: "Career Break",
    role: "COVID-19 Market Disruption",
    period: "Apr 2020 - Apr 2021",
    description: [
      "Paused active marketing roles during the COVID-19 pandemic's disruption of the local job market.",
    ],
    tags: [],
  },
  {
    company: "Al-Mada Foundation",
    role: "News Editor",
    period: "Sep 2019 - Apr 2020",
    description: [
      "Covered the 2019 Iraq protests.",
      "Coordinated publishing, design, and social media management for the foundation.",
      "Partnered with Al-Mada newspaper to promote writers' coverage on social media.",
    ],
    tags: ["Media", "Content Strategy", "PR"],
  },
  {
    company: "iBasket",
    role: "Marketing Manager & Co-Founder",
    period: "Jan 2019 - Sep 2019",
    type: "Part-time",
    description: [
      "Expanded the business from a supplements-only offering into a full e-commerce store.",
      "Launched a nutrition advice content platform and a bodybuilding-focused course platform.",
    ],
    tags: ["Retail", "E-commerce", "Co-Founder"],
  },
  {
    company: "Taqa for Real Estate",
    role: "Marketing Manager",
    period: "Oct 2018 - Sep 2019",
    description: [
      "Coordinated brand-building for the company and its Morano project, Baghdad's first luxury real estate development.",
      "Managed the marketing and production teams.",
    ],
    tags: ["Real Estate", "Brand Building"],
  },
  {
    company: "Technology Organization for Peace",
    role: "Digital Marketing Manager",
    period: "Jun 2018 - Mar 2021",
    type: "Volunteer",
    description: [
      "Progressed from Social Media Officer to Digital Marketing Manager over the course of the role.",
      "Managed the organization's social media platforms and led brand identity development with a specialist branding agency.",
      "Supported digital investigation and fact-checking work.",
    ],
    tags: ["NGO", "Volunteer", "Digital Marketing"],
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
                    {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{exp.company}</a>
                ) : (
                  exp.company
                )}
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
              {exp.tags.length > 0 && (
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
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
