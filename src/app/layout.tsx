import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cássio Ritse Machado",
  description:
    "Portfólio pessoal de Cássio Ritse Machado, desenvolvedor full stack.",
  authors: [
    { name: "Cássio Ritse Machado", url: "https://github.com/CassioRitse" },
  ],
  creator: "Cássio Ritse Machado",
  keywords: ["Portfólio", "Desenvolvedor", "Full Stack"],
  // icons: {
  //   icon: "/favicon.ico", // Coloque o favicon na pasta /public
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-gray-800 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
