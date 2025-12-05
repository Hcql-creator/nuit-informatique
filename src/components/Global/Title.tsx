import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Title = ({ ...props }: Props) => {
  return (
    <h1 className="font-bold text-xl sm:text-3xl md:text-5xl">
      {props.children}
    </h1>
  );
};

export default Title;
