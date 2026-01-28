"use client";
import React from "react";
import Navbar from "./Navbar";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { routes } from "@/lib/data";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) => pathname.toLowerCase().trim() === href;
  return (
    <>
      <header className="w-full h-[100px] flex items-center justify-between ">
        <h1 className="text-4xl font-bold tracking-widest">Bilel</h1>
        <Navbar />
        <Sheet>
          <SheetTrigger asChild className="md:hidden ">
            <Image
              src="/icons/hamburger.svg"
              alt="Hamburger menu icon"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className=" h-full flex flex-col items-center justify-center"
          >
            <div className="w-full flex flex-col gap-y-6">
              {routes.map((route, index) => (
                <>
                  {route.href !== "/hire-me" ? (
                    <Button
                      key={index}
                      onClick={() => router.push(route.href)}
                      className={cn(
                        "transition-all duration-500 ease-in-out tracking-widest bg-transparent hover:bg-transparent rounded-none text-md text-slate-50 bg-clip-text hover:text-transparent hover:bg-gradient-to-b from-indigo-200 to-primaryColor",
                        isActive(route.href)
                          ? "text-transparent bg-gradient-to-b from-indigo-200 to-primaryColor"
                          : ""
                      )}
                    >
                      <span className="hidden" />
                      <p className="capitalize"> {route.label} </p>
                    </Button>
                  ) : (
                    <Button
                      key={index}
                      className=" rounded-lg bg-gradient-to-tr from-primaryColor  to-indigo-600 transition-all  duration-500 ease-in-out text-secondaryColor font-bold flex items-center justify-center tracking-widest hover:bg-gradient-to-tr hover:from-indigo-600  hover:to-primaryColor "
                      onClick={() => router.push(route.href)}
                    >
                      {route.label}
                    </Button>
                  )}
                </>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

export default Header;
