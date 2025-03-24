import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AnimacaoEntrada from "../components/shared/AnimacaoEntrada";
import useHistorico from "../hooks/useHistorico";
import formatarData from "../utils/formatarData";

export default function TelaHistorico() {
  const navigate = useNavigate();
  const { historico, carregando } = useHistorico();

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-grow p-10 max-w-2xl w-full mx-auto">
        <h2 className="text-6xl font-bold text-center text-indigo-300 mb-10">Histórico de Salas</h2>

        {carregando ? (
          <p className="text-indigo-200">Carregando...</p>
        ) : historico.length === 0 ? (
          <p className="text-2xl text-center text-indigo-200">Nenhuma sala encontrada.</p>
        ) : (
          <AnimacaoEntrada>
            <section className="grid gap-8">
              {historico.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/historico/${item.id}`)}
                  className="cursor-pointer bg-gray-800 px-6 py-6 rounded-2xl shadow-xl hover:shadow-indigo-500/10 transition-all"
                >
                  <h3 className="text-2xl font-bold text-indigo-300 mb-2">
                    {item.sala.nome}
                  </h3>
                  
                  <p className="text-xl text-gray-400">
                    Encerrada em: {formatarData(item.dataEncerramento)}
                  </p>
                </div>
              ))}
            </section>
          </AnimacaoEntrada>
        )}
      </main>

      <Footer />
    </div>
  );
}
