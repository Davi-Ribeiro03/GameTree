import React from "react";

const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`border-black w-full h-full flex justify-center items-center text-4xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
