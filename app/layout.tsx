import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import MySessionProvider from "@/provider/session";
import { Toaster } from "sonner";
import { Header } from "@/components/header2";


const inter = Inter({
  variable: '--font-geis-latin',
  subsets: ['latin']
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-geis-latin',
});


// Metadados SEO
export const metadata: Metadata = {
  title: "JD Praia LDA | Especialistas em Caixilharia de Alumínio e PVC",
  description: "Fabricação e instalação de janelas, portas e sistemas em PVC, Alumínio e Madeira. Soluções eficientes para construção e renovação.",
  keywords: [
    "janelas PVC", 
    "portas alumínio", 
    "caixilharia", 
    "JD Praia LDA", 
    "construção civil Portugal"
  ],
  authors: [{ name: "Mateus Cassuque" }],
  openGraph: {
    type: "website",
    url: "https://www.jdpraia.com",
    title: "JD Praia LDA | Especialistas em Caixilharia",
    description: "Soluções em janelas, portas e sistemas de alta qualidade.",
    images: [
      {
        url: "https://www.jdpraia.pt/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JD Praia LDA - Fachada de Janelas em Alumínio",
      },
    ],
  },
  robots: "index, follow", // Para SEO
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
        // disableTransitionOnChange
        >
          <MySessionProvider>

            <Header />
            {children}
            <Toaster richColors position="top-center" /> {/* Configuração do Toaster */}
          </MySessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
