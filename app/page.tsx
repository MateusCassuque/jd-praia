'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Github, Linkedin, Mail, Calendar, Code, Cpu, Layers, Database, Facebook, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Contact from './contact/page'
import { Depoimentos, Diferenciais, Hero, Portfolio, Services } from '@/components'

export default function Home() {
  // Referências para as seções
  const aboutRef = useRef(null)
  const portfolioRef = useRef(null)

  // Verifica se os elementos estão visíveis
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const isPortfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" })

  return (
    <main className="min-h-screen p-8 md:p-24 bg-gradient-to-b from-background to-muted/10">
      <Hero />

      <Services />
      <Diferenciais />

      <Portfolio />

      <Depoimentos />

      {/* Rodapé com senso de urgência */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-16 border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dev-Cute. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            Vagas limitadas para novos projetos este mês. Entre em contato hoje mesmo.
          </p>
        </div>

        <div className="flex gap-4 text-primary">
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
            <Link href="https://github.com/MateusCassuque" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
            <Link href="https://www.linkedin.com/in/mateus-cassuque-729a76345/?trk=opento_sprofile_goalscard" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
            <Link href="https://www.facebook.com/profile.php?id=61560957432070" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
            <Link href="mailto:mateusAbril4@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
            <Link href="/auth/login" aria-label="Login">
              <LogIn className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.footer>
    </main>
  )
}