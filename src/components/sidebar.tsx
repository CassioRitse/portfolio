import { FileText, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      className="w-20 bg-gray-900 text-white flex flex-col items-center py-4 gap-4"
      aria-label="Navegação lateral com links sociais"
    >
      <div className="flex flex-col gap-6">
        <FileText className="text-blue-400" aria-label="Ícone de portfólio" />
      </div>

      <nav
        className="mt-auto flex flex-col gap-4 mb-4"
        aria-label="Redes sociais"
      >
        <Link
          href="https://github.com/CassioRitse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil no GitHub de Cássio Ritse"
        >
          <Github className="hover:text-blue-400" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/c%C3%A1ssioritse/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil no LinkedIn de Cássio Ritse"
        >
          <Linkedin className="hover:text-blue-400" />
        </Link>
        <Link
          href="https://www.instagram.com/cassio_ritse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil no Instagram de Cássio Ritse"
        >
          <Instagram className="hover:text-blue-400" />
        </Link>
      </nav>
    </aside>
  );
}
