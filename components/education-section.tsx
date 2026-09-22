import { GraduationCap, Award, Languages } from "lucide-react"

const certifications = [
  {
    name: "Training of Trainers (TOT)",
    issuer: "The International Foundation for Electoral Systems (IFES)",
    year: "2021",
  },
  {
    name: "Social Media Strategy",
    issuer: "Learn n' Digital",
    year: "2019",
  },
  {
    name: "Digital Media and TV for News and Information",
    issuer: "Oxford Research International",
  },
  {
    name: "Graphic Design",
    issuer: "Design Khana",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-16 border-t border-border">
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
        Education & Certifications
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-accent" />
              <h3 className="text-foreground font-medium">Education</h3>
            </div>
            <div className="space-y-2">
              <p className="text-foreground">B.Sc. in Computer Science</p>
              <p className="text-muted-foreground text-sm">Al-Ma&apos;mon University College</p>
              <p className="text-muted-foreground text-sm">2014 - 2018</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Languages className="w-5 h-5 text-accent" />
              <h3 className="text-foreground font-medium">Languages</h3>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Arabic — Native</p>
              <p className="text-muted-foreground text-sm">English — Professional Working Proficiency</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-accent" />
            <h3 className="text-foreground font-medium">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="space-y-1">
                <p className="text-foreground text-sm">{cert.name}</p>
                <p className="text-muted-foreground text-xs">
                  {cert.issuer}
                  {cert.year && <span className="ml-2 text-accent">{cert.year}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
