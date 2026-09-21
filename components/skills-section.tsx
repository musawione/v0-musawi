const skillCategories = [
  {
    title: "Marketing Leadership",
    skills: ["Brand Strategy & Positioning", "Team Building & Leadership", "Campaign Planning & Execution", "Budget Management", "Agency & Vendor Management"],
  },
  {
    title: "Performance & Growth",
    skills: ["Performance Marketing", "Meta & Google Ads", "Lead Generation", "Conversion & ROI/ROAS Optimization", "Salesforce CRM", "Customer Acquisition"],
  },
  {
    title: "Content & Media",
    skills: ["Content Strategy", "Social Media Management", "Broadcast & Media Production", "Video Editing", "Creative Direction"],
  },
  {
    title: "Professional",
    skills: ["Bilingual (Arabic/English)", "Training & Mentoring", "Stakeholder Communication", "Cross-Functional Collaboration", "Problem-Solving"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 border-t border-border">
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
        Skills
      </h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-foreground font-medium mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
