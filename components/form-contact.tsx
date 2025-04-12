import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Entre em <span className="text-accent">Contacto</span>
          </h2>
          <form className="space-y-4">
            <Input placeholder="Nome" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Telefone" />
            <Textarea placeholder="Mensagem" rows={5} />
            <Button type="submit" className="bg-accent hover:bg-accent/90">
              Enviar Mensagem
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-4">
            <MapPin className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg">Morada</h3>
              <p>Rua Exemplo, 123, Praia, Portugal</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg">Email</h3>
              <p>contato@jd-praia.pt</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg">Horário</h3>
              <p>Seg - Sex: 8h - 18h</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}