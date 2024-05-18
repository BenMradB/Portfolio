"use client";
import { routes } from "@/lib/data";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) => pathname.toLowerCase().trim() === href;
  return (
    <nav className="hidden md:flex items-center justify-center space-x-4">
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
    </nav>
  );
};

export default Navbar;
