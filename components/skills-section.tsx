const skillCategories = [
  {
    title: "Core Marketing",
    skills: ["Brand Management", "Strategic Planning", "Campaign Execution", "Market Analysis"],
  },
  {
    title: "Media & Creative",
    skills: ["Media Strategy", "Social Media Management", "Video Editing", "Content Creation"],
  },
  {
    title: "Professional",
    skills: ["Team Leadership", "Communication (Arabic & English)", "Problem-Solving", "Collaboration"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 border-t border-border">
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
        Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
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
