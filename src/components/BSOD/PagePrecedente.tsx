"use client"; // si tu es en App Router Next.js

import { useState } from "react";
import BSODScreen from "./BSOD"; // Vérifie le chemin selon ton projet

const PagePrecedente = () => {
  const [erreurActive, setErreurActive] = useState(false);

  const handleClick = () => {
    setErreurActive(true);
  };

  if (erreurActive) {
    return <BSODScreen />;
  }

  return (
    <div
      onClick={handleClick}
      className="min-h-screen w-screen bg-gray-50 text-gray-800 p-10 cursor-pointer font-sans"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Bienvenue dans votre espace numérique
        </h1>
        <p className="text-lg mb-4">
          Accédez à vos ressources pédagogiques, vos outils collaboratifs et vos
          services numériques.
        </p>
        <ul className="list-disc pl-6 text-base mb-6">
          <li>Messagerie académique</li>
          <li>Plateforme de devoirs</li>
          <li>Suivi des absences</li>
          <li>Accès ENT</li>
        </ul>
        <p className="text-sm text-gray-500">
          Cliquez n’importe où pour commencer...
        </p>
      </div>
    </div>
  );
};

export default PagePrecedente;
