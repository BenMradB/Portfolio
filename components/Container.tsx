import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-full md:w-[80%] mx-auto px-4 py-8 ">
      {children}
    </main>
  );
};

export default Container;
