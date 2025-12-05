"use client";

import BSOD from "../BSOD/BSOD";
import PagePrecedente from "../BSOD/PagePrecedente";
import BottomBar from "./BottomBar";
import MainCard from "./MainCard";
import TopButton from "./TopButton";
import VerticalButtonList from "./VertcialButtonList";
import WhiteBox from "./WhiteBox";
import WhiteBox2 from "./WhiteBox2";

const HomePage = () => {
  return (
    <div
      className="min-h-screen 
    bg-gradient-to-r from-black to-white 
    sm:bg-gradient-to-b sm:from-gray-800 sm:to-gray-200flex w-full h-full p-6 flex flex-col gap-10   bg-gray-300 text-black border-4 border-black "
    >
      {/* Ligne du haut */}
      <div className="flex justify-between items-center gap-3 px-4 py-2 bg-white text-black border border-black rounded-xl text-center">
        <TopButton text="A" onClick={() => {}} />
        <TopButton text="B" onClick={() => {}} />
        <WhiteBox text="Titre" />
        <TopButton text="C" onClick={() => {}} />
        <TopButton text="D" onClick={() => {}} />
      </div>
      <div className="flex justify-end pl-1/4">
        <WhiteBox2 text={"Socials"}></WhiteBox2>
      </div>
      {/* Grande carte centrale */}
      <MainCard
        title="Introduction"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      repellendus, voluptatum sed assumenda minus ut deserunt dolorem, unde
      tenetur optio esse. Tempora explicabo ea maxime dolorem ipsum repudiandae
      modi facere!"
      />

      {/* 5 boutons verticaux */}
      <VerticalButtonList />
      {/* Barre de texte bas */}
      <div className="pt-5">
        <BottomBar text="Texte bas de page" />
      </div>
    </div>
  );
};

export default HomePage;
