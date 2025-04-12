"use client"; // Necessário para interatividade

import { motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "/" },
    {
      name: "Serviços",
      href: "#servicos",
      submenu: [
        { name: "Janelas PVC/Alumínio", href: "#janelas" },
        { name: "Portas de Entrada", href: "#portas" },
        { name: "Sistemas de Caixilharia", href: "#sistemas" },
      ]
    },
    { name: "Projetos", href: "#projetos" },
    { name: "Sobre Nós", href: "/about" },
    { name: "Contactos", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl text-gray-900"
            >
              <span className="text-primary">JD</span> Praia LDA
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} className="mt-0.5" />}
                </Link>

                {/* Submenu (aparece no hover) */}
                {item.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Link href={'tel:+244923798071'} className="flex items-center justify-center"><Phone size={16} className="mx-1" /> +244 923 798 071</Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">

              <Link href={'/contact'} className="flex items-center justify-center">Orçamento</Link>

            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (aparece quando isOpen = true) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white pb-4"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-100 pt-4 px-4">
                <Button className="w-full bg-primary hover:bg-primary/90 mb-2">
                  Orçamento
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Link href={'tel:+244923798071'} className="flex items-center justify-center"><Phone size={16} className="mx-1" /> +244 923 798 071</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}