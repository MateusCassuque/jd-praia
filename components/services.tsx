import { motion } from "framer-motion";
import { Layout, DoorOpen, Settings, Box, Hammer } from "lucide-react";

const services = [
  {
    icon: <Layout className="" size={40} />,
    title: "Janelas PVC/Alumínio",
    description: "Soluções eficientes e personalizadas para o seu projeto.",
  },
  {
    icon: <DoorOpen className="" size={40} />,
    title: "Portas de Entrada",
    description: "Segurança, design e durabilidade em diversos materiais.",
  },
  {
    icon: <Box size={40} />,
    title: "Caixilharia",
    description: "Soluções para construção e renovação."
  },
  {
    icon: <Hammer size={40} />,
    title: "Instalação",
    description: "Montagem profissional garantida."
  },
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Nossos <strong className="">Serviços</strong>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}