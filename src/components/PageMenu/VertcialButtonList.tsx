"use client";

import TopButton from "./TopButton";

const VerticalButtonList = () => {
  return (
    <div className="w-full flex justify-evenly items-center gap-3">
      <TopButton text="1" onClick={() => {}} />
      <TopButton text="2" onClick={() => {}} />
      <TopButton text="3" onClick={() => {}} />
      <TopButton text="4" onClick={() => {}} />
      <TopButton text="5" onClick={() => {}} />
    </div>
  );
};

export default VerticalButtonList;
