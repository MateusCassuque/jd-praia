'use client'

import { motion } from "framer-motion";
import { Factory, Users, Award, Leaf, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header (reutilize o componente Header que já criamos) */}

      {/* Hero Section Sobre Nós */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-primary">JD Praia LDA</span> - Excelência em Caixilharia desde 2010
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Especializados em soluções premium de janelas, portas e sistemas de caixilharia em PVC, Alumínio e Madeira para projetos residenciais e comerciais.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Fale Conosco
            </Button>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <Image
              src="/sobre-nos-fabrica.jpg" // Substitua por imagem real
              alt="Fábrica JD Praia LDA"
              width={800}
              height={600}
              className="rounded-xl shadow-2xl border-4 border-white"
            />
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -z-10 inset-0 bg-primary/10 rounded-xl blur-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa <span className="text-primary">História</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Da fundação humilde à liderança no mercado de caixilharia em Portugal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="text-primary" size={32} />,
                year: "2010",
                title: "Fundação",
                description: "Início das operações em Praia, focada em soluções locais.",
              },
              {
                icon: <Users className="text-primary" size={32} />,
                year: "2015",
                title: "Expansão",
                description: "Ampliação da equipe e catálogo para atender todo o Algarve.",
              },
              {
                icon: <Award className="text-primary" size={32} />,
                year: "2023",
                title: "Reconhecimento",
                description: "Premiada como Melhor Fornecedor de Caixilharia do Sul.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <span className="block text-primary font-bold text-lg mb-2">{item.year}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-primary">Valores</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Leaf className="text-primary" size={28} />,
                title: "Sustentabilidade",
                description: "Materiais eco-friendly e processos eficientes.",
              },
              {
                icon: <Clock className="text-primary" size={28} />,
                title: "Pontualidade",
                description: "Respeito absoluto aos prazos acordados.",
              },
              // Adicione mais valores conforme necessário
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-primary text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar seu Projeto?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Entre em contacto para um orçamento personalizado sem compromisso.
          </p>
          <Button size="lg" variant="secondary">
            Solicitar Orçamento
          </Button>
        </div>
      </motion.section>

      {/* Footer (reutilize o componente Footer) */}
    </div>
  );
}