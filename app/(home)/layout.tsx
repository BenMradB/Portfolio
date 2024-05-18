import Container from "@/components/Container";
import Header from "@/components/Header";
import React, { ReactNode } from "react";
import "react-tooltip/dist/react-tooltip.css";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <section className="w-full flex flex-col gap-y-12 tracking-widest">
        <Header />

        {children}
      </section>
    </Container>
  );
};

export default HomeLayout;
