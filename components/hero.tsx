import { motion } from "framer-motion"
import { ArrowRight, Phone, Award, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Texto + CTA (Lado Esquerdo) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          {/* Eyebrow Title (Título Introdutório) */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-2 mb-4"
          >
            <Award className="text-primary" size={18} />
            <span className="text-sm font-semibold tracking-wider text-primary uppercase">
              Especialistas em Caixilharia
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="text-primary">Soluções Premium</span> para Sua Casa
          </motion.h1>

          {/* Descrição */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Fabricação personalizada em <strong>PVC</strong>, <strong>Alumínio</strong> e <strong>Madeira</strong> com eficiência energética.
          </motion.p>

          {/* Lista de Diferenciais (opcional) */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="space-y-2 mb-8 text-gray-700"
          >
            {[
              "Garantia de 10 anos",
              "Materiais sustentáveis",
              "Instalação profissional",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="text-primary" size={16} />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
              <Link href={'/contact'} className="flex flex-wrap gap-4">
                Solicitar Orçamento <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="shadow-lg">
              <Phone className="mr-2" size={18} /> +244 123 456 789
            </Button>
          </motion.div>
        </motion.div>

        {/* Imagem (Lado Direito) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 relative"
        >
          <Image
            src="/images/janelas.png"
            alt="Janelas de Alumínio Modernas"
            width={800}
            height={600}
            className="rounded-xl shadow-2xl border-4 border-white"
            priority
          />
          {/* Efeito de flutuação sutil */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-primary/5 rounded-xl -z-10"
          />
        </motion.div>
      </div>
    </section>
  )
}