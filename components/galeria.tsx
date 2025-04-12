import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { id: 1, img: "/images/janelas.png", title: "Janelas em PVC - Residencial" },
  { id: 2, img: "/images/capacete.jpg", title: "Portas de Alumínio - Comercial" },
  // ... mais projetos
];

export function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 ">
          Nossos <span className="text-primary">Projetos</span>
        </h2>

        <div className="relative">
          <div className="flex overflow-x-auto gap-4 py-4 scrollbar-hide">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.03 }}
                className="min-w-[300px] rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-medium">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}