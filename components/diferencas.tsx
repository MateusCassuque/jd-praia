'use client'

import { motion } from "framer-motion";
import { ShieldCheck, Gem, Truck, Clock, Leaf, Settings, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export function Diferenciais() {
  const features = [
    {
      icon: <ShieldCheck className="text-primary" size={32} />,
      title: "Garantia Estendida",
      description: "10 anos de garantia em todos os nossos produtos, assegurando durabilidade e tranquilidade.",
    },
    {
      icon: <Gem className="text-primary" size={32} />,
      title: "Materiais Premium",
      description: "Trabalhamos apenas com PVC, Alumínio e Madeira de alta qualidade, certificados internacionalmente.",
    },
    {
      icon: <Truck className="text-primary" size={32} />,
      title: "Instalação Profissional",
      description: "Equipe especializada para montagem precisa, sem danos à sua propriedade.",
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "Entrega Ponto",
      description: "Cumprimos prazos rigorosos, adaptando-nos ao cronograma da sua obra.",
    },
    {
      icon: <Leaf className="text-primary" size={32} />,
      title: "Sustentabilidade",
      description: "Produtos eco-friendly com eficiência energética (Classe A+).",
    },
    {
      icon: <Settings className="text-primary" size={32} />,
      title: "Soluções Personalizadas",
      description: "Design sob medida para atender às necessidades do seu projeto.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Porque Escolher a <span className="text-primary">JD Praia LDA</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Excelência em caixilharia desde 2010, combinando inovação, qualidade e atendimento personalizado.
          </p>
        </motion.div>

        {/* Grid de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-gray-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Link href={'/contact'} className="flex">Solicite Orçamento Sem Compromisso <ArrowRight className="m-1" size={18} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}