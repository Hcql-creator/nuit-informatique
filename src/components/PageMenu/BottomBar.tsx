"use client";

interface BottomBarProps {
  text: string;
}

const BottomBar = ({ text }: BottomBarProps) => {
  return (
    <div className="w-full py-3 bg-white border border-black rounded-xl text-center text-black mt-4">
      {text}
    </div>
  );
};

export default BottomBar;
