import ProfileAvatar from "@/components/ProfileAvatar";
import SocialMediaButton from "@/components/SocialMediaButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { Skeleton } from "@/components/ui/skeleton";
import { socialMedia } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <div className="w-full h-full grid grid-cols-1  lg:grid-cols-2 items-center gap-4">
      <ProfileAvatar className="lg:hidden w-full flex items-center   justify-center ">
        <div className="w-[80%] h-[80%] 0 flex items-center  shadow-primaryColor/50 shadow-2xl justify-center lg:justify-end p-2 rounded-full border-dashed border-4 border-spacing-52 border-primaryColor">
          <Avatar className="w-full h-full object-contain shadow-xl shadow-primaryColor/50">
            <AvatarImage
              src="/images/avatar-removebg.png"
              alt="profile"
              className="object-contain"
            />
            <AvatarFallback className="w-full h-full rounded-full">
              <Skeleton className="w-full h-full rounded-full" />
            </AvatarFallback>
          </Avatar>
        </div>
      </ProfileAvatar>
      <div className="flex-1 text-center lg:text-start w-full flex flex-col items-center justify-center lg:items-start lg:justify-start gap-y-4 mt-8 lg:mt-0">
        <p className="text-slate-200 pl-2">Full Stack Developer</p>
        <div className="flex flex-col gap-y-3">
          <p className="text-slate-50 text-4xl md:text-6xl font-bold">
            Hello I &apos; M
          </p>

          {/* <p className="w-full !text-6xl !bg-clip-text !text-transparent !bg-gradient-to-b !from-indigo-200 !to-primaryColor !font-bold">
            Benmrad Bilel
          </p> */}

          <div className="w-full max-h-fit">
            <FlipWords
              className="!text-4xl md:!text-6xl !p-0"
              words={[
                "Benmrad Bilel",
                "FullStack Developer",
                "Also",
                "Mobile Developer",
              ]}
            />
          </div>

          <p className="text-slate-400 font-normal tracking-wider leading-loose">
            FullStack Developer with expertise in Next.js, React, and Node.js
            with Express. From crafting elegant frontend interfaces to building
            robust backend systems, I&apos;m dedicated to delivering
            high-quality solutions that empower businesses and delight users.
          </p>
        </div>
        <div className="w-full flex flex-col-reverse gap-y-6 items-start md:flex-row md:items-center gap-x-4">
          <Button className="w-full border-none group flex items-center justify-center space-x-2 rounded-md bg-gradient-to-tr from-primaryColor  to-indigo-600  text-slate-50 border-2 hover:bg-gradient-to-tr hover:from-indigo-600  hover:to-primaryColor transition-all duration-1000 ease-in-out">
            <p>Download CV</p>
            <Image
              src="/icons/download.svg"
              alt="download"
              width={18}
              height={18}
              className="group-hover:fill-white"
            />
          </Button>
          <div className="w-full !ml-0 flex items-center gap-x-4 justify-between md:justify-start ">
            {socialMedia.map((social, index) => (
              <SocialMediaButton key={index} socialMediaAccount={social} />
            ))}
          </div>
        </div>
      </div>
      <ProfileAvatar className="hidden w-full lg:flex items-center   justify-center lg:justify-end">
        <div className="w-[80%] h-[80%] 0 flex items-center  shadow-primaryColor/50 shadow-2xl justify-center lg:justify-end p-2 rounded-full border-dashed border-4 border-spacing-52 border-primaryColor">
          <Avatar className="w-full h-full object-contain shadow-xl shadow-primaryColor/50">
            <AvatarImage
              src="/images/avatar-removebg.png"
              alt="profile"
              className="object-contain"
            />
            <AvatarFallback className="w-full h-full rounded-full">
              <Skeleton className="w-full h-full rounded-full" />
            </AvatarFallback>
          </Avatar>
        </div>
      </ProfileAvatar>
    </div>
  );
};

export default Homepage;
