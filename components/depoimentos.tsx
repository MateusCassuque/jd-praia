import { motion } from "framer-motion";
import { Star, Quote, Play, ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export function Depoimentos() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Proprietário, Residencial Algarve",
      comment: "As janelas em PVC instaladas pela JD Praia reduziram meu consumo energético em 30%. Profissionais extremamente competentes!",
      rating: 5,
      avatar: "/avatar-cliente1.jpg",
    },
    {
      name: "Ana Ribeiro",
      role: "Arquiteta, ARQ Studio",
      comment: "Trabalhamos com a JD Praia em vários projetos. A qualidade do alumínio e o acabamento são impecáveis. Recomendo!",
      rating: 5,
      avatar: "/avatar-cliente2.jpg",
    },
    // Card de Vídeo (adicione como último item do array)
    {
      name: "Vídeo Depoimento",
      role: "Cliente em Lisboa",
      comment: "Assista ao depoimento completo sobre nossa experiência com a JD Praia LDA.",
      rating: 5,
      avatar: "/youtube-thumbnail.jpg", // Thumbnail customizada
      videoId: "ABCDE12345", // Substitua pelo ID do vídeo do YouTube
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Dizem <span className="text-primary">Nossos Clientes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira a opinião de quem já confiou em nossos produtos e serviços.
          </p>
        </motion.div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Card de Vídeo (último item) */}
              {testimonial.videoId ? (
                <Card className="p-0 h-full overflow-hidden border-gray-200 group hover:shadow-lg transition-shadow">
                  <div className="relative">
                    {/* Thumbnail do Vídeo (com play button overlay) */}
                    <img
                      src={testimonial.avatar}
                      alt="Thumbnail do depoimento em vídeo"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="text-white w-12 h-12 fill-white/80 group-hover:fill-primary transition-colors" />
                    </div>
                  </div>

                  {/* Embed do YouTube (modal ou iframe) */}
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{testimonial.comment}</p>

                    {/* Iframe do YouTube (oculto inicialmente, aparece em modal ou expandido) */}
                    <div className="mt-4 aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=0&controls=1`}
                        title="Depoimento JD Praia LDA"
                        allowFullScreen
                        className="w-full h-48 rounded-lg"
                      />
                    </div>
                  </div>
                </Card>
              ) : (
                // {/* Cards de Depoimento Tradicionais */}
                <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow border-gray-200">
                  <Quote className="text-primary w-12 h-12 mb-4" />
                  <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              )}
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
            <Link href={'/contact'} className="flex flex-wrap gap-4">Solicite um Orçamento Sem Compromisso <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}