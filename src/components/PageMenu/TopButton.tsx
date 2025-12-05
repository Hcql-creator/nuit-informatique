"use client";

import React from "react";

interface TopButtonProps {
  text: string;
  onClick: () => void;
}

const TopButton = ({ text, onClick }: TopButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-black text-white rounded-xl cursor-pointer hover:brightness-110 active:scale-95 transition duration-200"
    >
      {text}
    </button>
  );
};

export default TopButton;
