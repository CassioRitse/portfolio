"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HomeContent() {
  return (
    <section className="text-green-400 font-mono p-6 leading-relaxed">
      <pre className="whitespace-pre-wrap text-sm sm:text-base">
        <code>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">cassio</span>{" "}
          <span className="text-white">=</span> {"{\n"}
          {"  "}
          <span className="text-teal-400">name</span>:{" "}
          <span className="text-yellow-300">"Cássio Ritse Machado"</span>,{"\n"}
          {"  "}
          <span className="text-teal-400">greeting</span>:{" "}
          <span className="text-yellow-300">
            "Olá, seja bem-vindo ao meu portfólio!"
          </span>
          ,{"\n"}
          {"  "}
          <span className="text-teal-400">about</span>:{" "}
          <span className="text-yellow-300">
            <Typewriter
              words={[
                `Olá me chamo Cássio Ritse, atuo atualmente como desenvolvedor
            backend na 0x Consulting, eu crio soluções web inovadoras e
            escaláveis, usando frameworks JavaScript como o NestJs. Tenho uma
            vasta experiência em arquitetura e produção de microsserviços, desde
            a concepção até a implementação e manutenção em ambientes de
            produção. Utilizo práticas de clean architecture e design patterns
            para garantir que os sistemas sejam modulares, fáceis de manter e
            evoluir. Também sou responsável pela implementação de sistemas de
            comunicação entre serviços, clientes e servidores, utilizando de
            mensagerias como RabbitMQ e comunicação em tempo real utilizando
            WebSockets com Socket.io, promovendo integração eficiente entre
            diferentes partes dos sistemas. `,
              ]}
              typeSpeed={50}
              delaySpeed={100}
              cursor
              cursorStyle="_"
            />
          </span>
          ,{"\n"}
          {"  "}
          <span className="text-teal-400">education</span>: {"[\n"}
          {"    "}
          <span className="text-yellow-300">
            "👨‍🎓 Mestrado em Informática - IPB 🇵🇹"
          </span>
          ,{"\n"}
          {"    "}
          <span className="text-yellow-300">
            "🎓 Engenharia de Software - UTFPR 🇧🇷"
          </span>
          ,{"\n"}
          {"    "}
          <span className="text-yellow-300">
            "💻 Técnico em Informática - IFRO 🇧🇷"
          </span>
          {"\n"}
          {"  "}] ,{"\n"}
          {"  "}
          <span className="text-teal-400">extra</span>: {"[\n"}
          {"    "}
          <span className="text-yellow-300">"👨‍🏫 Professor de programação"</span>
          ,{"\n"}
          {"    "}
          <span className="text-yellow-300">
            "☕ Experiência com Java & Spring Boot"
          </span>
          ,{"\n"}
          {"    "}
          <span className="text-yellow-300">
            "🚀 Foco em projetos com impacto social e humano"
          </span>
          {"\n"}
          {"  "}] ,{"\n"}
          {"};\n\n"}
          <span className="text-blue-400">console</span>.
          <span className="text-purple-400">log</span>(
          <span className="text-white">cassio.greeting</span>);
        </code>
      </pre>
    </section>
  );
}
