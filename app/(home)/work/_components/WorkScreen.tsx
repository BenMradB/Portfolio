"use client";

import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";
import { motion } from "framer-motion";

const WorkScreen = () => {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.1,
            }}
            animate={{
              opacity: 1,
              scale: 1,

              transition: {
                delay: index * 1,
                ease: "easeInOut",
              },
            }}
            key={`content-${index}`}
            className="mb-10"
          >
            <p className="text-xl mb-4">{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                // <PinContainer title="Try it out" className="">
                //   <div className="w-[40rem] h-[40rem]">
                //     <Image
                //       src={item.image}
                //       alt={item.title}
                //       height="1000"
                //       width="1000"
                //       className="rounded-lg bg-slate-900 p-1 mb-10 object-cover"
                //     />
                //   </div>
                // </PinContainer>
                <Image
                  src={item.image}
                  alt={item.title}
                  height="1000"
                  width="1000"
                  className="rounded-lg bg-slate-900 p-1 mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>
    </TracingBeam>
  );
};

const dummyContent = [
  {
    title: "Welearn - E-Learning Platform",
    description: (
      <div className="w-full flex flex-col gap-y-3">
        <p className="text-sm font-normal leading-loose tracking-widest">
          Welearn is a platform that allows students to learn and teachers to
          teach online. It is a platform that is built with the latest
          technologies and is designed to be user-friendly. Also it is powered
          by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-200 to-primaryColor font-bold tracking-widest">
            Artificial Intelligence
          </span>{" "}
          and{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-200 to-primaryColor font-bold tracking-widest">
            Machine Learning
          </span>
        </p>
        <div className="w-full flex flex-col gap-y-4">
          {[
            "User-friendly",
            "Powered by AI and ML",
            "Secure Payment",
            "Responsive Design",
            "Realtime Chat",
          ].map((feature, index) => (
            <div key={index} className="pl-2 w-full flex items-center gap-x-2">
              <span className="size-[7px]  bg-gradient-to-tr from-primaryColor  to-indigo-600  rounded-full"></span>
              <p className="capitalize tracking-widest text-sm font-normal">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between  px-2 py-3 rounded-md">
          <div className="w-full flex items-center gap-x-2 justify-between md:justify-start">
            {[
              "/icons/react.svg",
              "/icons/nextjs.svg",
              "/icons/tailwindcss.svg",
              "/icons/framermotion.svg",
              "/icons/stripe.svg",
            ].map((tech, index) => (
              <Image
                key={index}
                src={tech}
                alt="tech"
                width={25}
                height={25}
                className="rounded-full"
              />
            ))}
          </div>

          <div className="flex items-center gap-x-2">
            <Link
              href={"https://welearn-elearning-platform.vercel.app/"}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full flex items-center justify-center gap-x-2 rounded-lg bg-gradient-to-tr from-primaryColor  to-indigo-600 transition-all  duration-500 ease-in-out text-secondaryColor font-bold tracking-widest hover:bg-gradient-to-tr hover:from-indigo-600  hover:to-primaryColor ">
                <Image
                  src="/icons/demo.svg"
                  alt="github"
                  width={20}
                  height={20}
                />
                Try it out
              </Button>
            </Link>

            <Button
              disabled
              className="w-full flex items-center justify-center gap-x-2 rounded-lg bg-black hover:bg-black border-2 border-primaryColor transition-all  duration-500 ease-in-out text-secondaryColor font-bold tracking-widest "
            >
              <Image
                src="/icons/private.svg"
                alt="github"
                width={20}
                height={20}
              />
              Private Code
            </Button>
          </div>
        </div>
      </div>
    ),
    image: "/images/welearn.png",
  },
  {
    title: "ZOOM Clone - Video Conferencing App",
    description: (
      <div className="w-full flex flex-col gap-y-3">
        <p className="text-sm font-normal leading-loose tracking-widest">
          ZOOM Clone is a video conferencing app that allows users to connect
          with each other through video calls. It is a platform that is built
          with the latest technologies and is designed to be user-friendly. Also
          it is powered by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-200 to-primaryColor font-bold tracking-widest">
            WebRTC
          </span>{" "}
          and{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-200 to-primaryColor font-bold tracking-widest">
            Socket.io
          </span>
        </p>
        <div className="w-full flex flex-col gap-y-4">
          {[
            "User-friendly",
            "Powered by WebRTC and Socket.io",
            "Secure Connection",
            "Responsive Design",
          ].map((feature, index) => (
            <div key={index} className="pl-2 w-full flex items-center gap-x-2">
              <span className="size-[7px]  bg-gradient-to-tr from-primaryColor  to-indigo-600  rounded-full"></span>
              <p className="capitalize tracking-widest text-sm font-normal">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between  px-2 py-3 rounded-md">
          <div className="w-full flex items-center gap-x-2 justify-between md:justify-start">
            {[
              "/icons/react.svg",
              "/icons/nextjs.svg",
              "/icons/tailwindcss.svg",
              "/icons/framermotion.svg",
              "/icons/stream.svg",
            ].map((tech, index) => (
              <Image
                key={index}
                src={tech}
                alt="tech"
                width={25}
                height={25}
                className="rounded-full"
              />
            ))}
          </div>

          <div className="flex items-center gap-x-2">
            <Link
              href={"https://zoom-clone-dusky-two.vercel.app"}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full flex items-center justify-center gap-x-2 rounded-lg bg-gradient-to-tr from-primaryColor  to-indigo-600 transition-all  duration-500 ease-in-out text-secondaryColor font-bold tracking-widest hover:bg-gradient-to-tr hover:from-indigo-600  hover:to-primaryColor ">
                <Image
                  src="/icons/demo.svg"
                  alt="github"
                  width={20}
                  height={20}
                />
                Try it out
              </Button>
            </Link>
            <Link href="https://github.com/BenMradB/zoom-clone" target="_blank">
              <Button className="w-full flex items-center justify-center gap-x-2 rounded-lg bg-black hover:bg-black border-2 border-primaryColor transition-all  duration-500 ease-in-out text-secondaryColor font-bold tracking-widest ">
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  width={20}
                  height={20}
                />
                Code Source
              </Button>
            </Link>
          </div>
        </div>
      </div>
    ),
    image: "/images/zoom.png",
  },
  {
    title: "DevinityIT - Startup Website",
    description: (
      <div className="w-full flex flex-col gap-y-3">
        <p className="text-sm font-normal leading-loose tracking-widest">
          DevinityIT is a startup website that showcases the services offered by
          the company. It is a platform that is built with the latest
          technologies and is designed to be user-friendly. Also it is powered
          by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-200 to-primaryColor font-bold tracking-widest">
            React
          </span>{" "}
          and{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-200 to-primaryColor font-bold tracking-widest">
            Tailwind CSS
          </span>
        </p>
        <div className="w-full flex flex-col gap-y-4">
          {[
            "User-friendly",
            "Powered by React and Tailwind CSS",
            "Responsive Design",
            "SEO Friendly",
          ].map((feature, index) => (
            <div key={index} className="pl-2 w-full flex items-center gap-x-2">
              <span className="size-[7px]  bg-gradient-to-tr from-primaryColor  to-indigo-600  rounded-full"></span>
              <p className="capitalize tracking-widest text-sm font-normal">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between  px-2 py-3 rounded-md">
          <div className="w-full flex items-center gap-x-2 justify-between md:justify-start">
            {["/icons/react.svg", "/icons/tailwindcss.svg"].map(
              (tech, index) => (
                <Image
                  key={index}
                  src={tech}
                  alt="tech"
                  width={25}
                  height={25}
                  className="rounded-full"
                />
              )
            )}
          </div>

          <div className="flex items-center gap-x-2">
            <Link
              href={"https://devinity-it.netlify.app/"}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full flex items-center justify-center gap-x-2 rounded-lg bg-gradient-to-tr from-primaryColor  to-indigo-600 transition-all  duration-500 ease-in-out text-secondaryColor font-bold tracking-widest hover:bg-gradient-to-tr hover:from-indigo-600  hover:to-primaryColor ">
                <Image
                  src="/icons/demo.svg"
                  alt="github"
                  width={20}
                  height={20}
                />
                Try it out
              </Button>
            </Link>
            <Button
              disabled
              className="w-full flex items-center justify-center gap-x-2 rounded-lg bg-black hover:bg-black border-2 border-primaryColor transition-all  duration-500 ease-in-out text-secondaryColor font-bold tracking-widest "
            >
              <Image
                src="/icons/private.svg"
                alt="github"
                width={20}
                height={20}
              />
              Private Code
            </Button>
          </div>
        </div>
      </div>
    ),

    image: "/images/devinityIT.png",
  },
  {
    title: "VidSync - Video Synchronization Package",
    description: (
      <div className="w-full flex flex-col gap-y-3">
        <p className="text-sm font-normal leading-loose tracking-widest">
          VidSync is your all-in-one solution for turbocharging the native HTML
          video player in your React applications. Whether you&apos;re
          streaming, presenting, or creating interactive media experiences,
          VidSync has got you covered! With VidSync, you can seamlessly switch
          between multiple videos, effortlessly control playback with intuitive
          keyboard shortcuts, and enjoy full mobile compatibility. 📱 Plus,
          unleash your creativity with extensive customization options, allowing
          you to tailor the video player to perfectly suit your project&apos;s
          style and functionality.{" "}
        </p>
        <div className="w-full flex flex-col gap-y-4">
          {[
            "Enhanced Video Player",
            "Multiple Video Support",
            "Customizable Interface",
            "Mobile Friendly",
          ].map((feature, index) => (
            <div key={index} className="pl-2 w-full flex items-center gap-x-2">
              <span className="size-[7px]  bg-gradient-to-tr from-primaryColor  to-indigo-600  rounded-full"></span>
              <p className="capitalize tracking-widest text-sm font-normal">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between  px-2 py-3 rounded-md">
          <div className="w-full flex items-center gap-x-2 justify-between md:justify-start">
            {["/icons/css.svg", "/icons/html.svg", "/icons/react.svg"].map(
              (tech, index) => (
                <Image
                  key={index}
                  src={tech}
                  alt="tech"
                  width={25}
                  height={25}
                  className="rounded-full"
                />
              )
            )}
          </div>

          <div className="flex items-center gap-x-2">
            <Link
              href={"https://vidsync-five.vercel.app/"}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full flex items-center justify-center gap-x-2 rounded-lg bg-gradient-to-tr from-primaryColor  to-indigo-600 transition-all  duration-500 ease-in-out text-secondaryColor font-bold tracking-widest hover:bg-gradient-to-tr hover:from-indigo-600  hover:to-primaryColor ">
                <Image
                  src="/icons/demo.svg"
                  alt="github"
                  width={20}
                  height={20}
                />
                Try it out
              </Button>
            </Link>
            <Link href="https://github.com/BenMradB/vidsync" target="_blank">
              <Button className="w-full flex items-center justify-center gap-x-2 rounded-lg bg-black hover:bg-black border-2 border-primaryColor transition-all  duration-500 ease-in-out text-secondaryColor font-bold tracking-widest ">
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  width={20}
                  height={20}
                />
                Code Source
              </Button>
            </Link>
          </div>
        </div>
      </div>
    ),

    image: "/images/vidsync.png",
  },
];

export default WorkScreen;
