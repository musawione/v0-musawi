"use client"

import { Mail, Phone, MessageCircle, Linkedin, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Ahmed Al-Musawi
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">
            Marketing Manager
          </p>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
          Marketing Manager with 12+ years of experience driving brand growth across retail, 
          luxury goods, media, FMCG, NGOs, and real estate.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="mailto:ahmed@musawi.one"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">ahmed@musawi.one</span>
          </a>
          <a
            href="tel:+9647703488301"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">+964 770 3488 301</span>
          </a>
          <a
            href="https://wa.me/9647703488301"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">WhatsApp</span>
          </a>
          <a
            href="https://www.linkedin.com/in/amusawi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground pt-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Baghdad, Iraq</span>
        </div>
      </div>
    </section>
  )
}
