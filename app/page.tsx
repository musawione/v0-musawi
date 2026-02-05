import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { FreelanceSection } from "@/components/freelance-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 pt-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <FreelanceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
