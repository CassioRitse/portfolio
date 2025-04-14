import HomeContent from "@/components/homeContent";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-800 text-white">
        <Sidebar />
        <main
          className="flex-1 p-4"
          aria-label="Conteúdo principal do portfólio de Cássio"
        >
          <div className="bg-gray-900 border-b border-gray-700 px-4 py-2">
            <span className="text-sm text-gray-400">home.ts</span>
          </div>
          <div className="p-4">
            <HomeContent />
          </div>
        </main>
      </div>
    </>
  );
}
