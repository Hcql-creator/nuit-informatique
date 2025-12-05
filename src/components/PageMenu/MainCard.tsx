"use client";

const MainCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="w-[40%] bg-white p-6 rounded-2xl border border-black shadow-xl flex flex-col gap-2">
      <p className="text-xl font-bold text-black">{title}</p>
      <p className="text-black">{desc}</p>
    </div>
  );
};

export default MainCard;
