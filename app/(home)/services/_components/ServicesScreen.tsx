"use client";
import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { services } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const ServicesScreen = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-6">
      <div className="w-full h-fit flex justify-center items-center flex-col">
        <h1 className="md:text-7xl text-6xl font-bold text-center !bg-clip-text !text-transparent !bg-gradient-to-b !from-indigo-200 !to-primaryColor  relative z-20">
          Services
        </h1>
        <div className="w-1/2 h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          {/* <SparklesCore
            background="#020617"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}

          {/* Radial Gradient to prevent sharp edges */}
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="w-full h-fit flex justify-center items-center flex-col">
        <h1 className="md:text-7xl text-6xl font-bold text-center !bg-clip-text !text-transparent !bg-gradient-to-b !from-indigo-200 !to-primaryColor   z-20">
          My Approach
        </h1>
        <div className="w-1/2 h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          {/* <SparklesCore
            background="#020617"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}

          {/* Radial Gradient to prevent sharp edges */}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center bg-slate-950 w-full gap-4 ">
        <Card
          title="Planning & Strategy"
          description="I will work with you to understand your business goals and objectives, and develop a plan to achieve them. This includes defining the scope of the project, setting timelines and milestones, and creating a budget. I will also conduct research to identify your target audience and competitors, and develop a strategy to reach your target market. "
          icon={<PhaseBtn text="Phase 1" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          description="I will create a wireframe and mockup of your website or application to give you an idea of what the final product will look like. I will then develop the website or application using the latest technologies and best practices. Throughout the development process, I will provide you with regular updates and feedback to ensure that the project is on track and meets your expectations."
          icon={<PhaseBtn text="Phase 2" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Development & Launch"
          description="I will conduct thorough testing to ensure that your website or application is bug-free and functions as intended. I will then launch the website or application and provide you with training on how to use and maintain it. I will also provide ongoing support and maintenance to ensure that your website or application continues to perform well and meet your business goals."
          icon={<PhaseBtn text="Phase 3" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>

      <div className="w-full h-fit flex justify-center items-center flex-col">
        <h1 className="md:text-7xl text-6xl font-bold text-center !bg-clip-text !text-transparent !bg-gradient-to-b !from-indigo-200 !to-primaryColor   z-20">
          Feedbacks
        </h1>
        <div className="w-1/2 h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          {/* <SparklesCore
            background="#020617"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}

          {/* Radial Gradient to prevent sharp edges */}
        </div>
      </div>

      <div className="h-full rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

const testimonials = [
  {
    feedback:
      "I am very happy with the work that was done on my website. The design is beautiful and the functionality is exactly what I wanted. I would highly recommend this service to anyone looking for a professional and reliable web developer.",
  },

  {
    feedback:
      "The service provided exceeded my expectations. The attention to detail and professionalism displayed throughout the project was outstanding. I would highly recommend this developer to anyone in need of quality work.",
  },
  {
    feedback:
      "The service provided was exceptional. The developer was highly skilled and delivered the project on time. I am extremely satisfied with the results.",
  },
  {
    feedback:
      "Working with this developer was a great experience. They were responsive, professional, and went above and beyond to meet my requirements.",
  },
  {
    feedback:
      "I highly recommend this service. The developer was able to understand my vision and turn it into a reality. The end product exceeded my expectations.",
  },
  {
    feedback:
      "I am impressed with the quality of work delivered by this developer. They paid attention to every detail and ensured that the website was visually appealing and user-friendly.",
  },
  {
    feedback:
      "The communication throughout the project was excellent. The developer kept me updated on the progress and promptly addressed any concerns or issues that arose.",
  },
];

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-2 border-slate-700 rounded-2xl group/canvas-card flex items-center justify-center  max-w-sm w-full mx-auto p-4  h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-2 -left-3 text-white/50" />
      <Icon className="absolute h-6 w-6 -bottom-2 -left-2 text-white/50" />
      <Icon className="absolute h-6 w-6 -top-2 -right-2 text-white/50" />
      <Icon className="absolute h-6 w-6 -bottom-2 -right-2 text-white/50" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 rounded-2xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute top-1/2 -translate-y-1/2 text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className=" opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4   group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          <h2 className="text-center dark:text-white text-3xl tracking-widest">
            {title}
          </h2>
          <p className="text-slate-400 tracking-wider leading-loose text-center pt-2 text-sm font-normal line-clamp-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const PhaseBtn = ({ text }: { text: string }) => {
  return (
    <button className="relative inline-flex w-full h-20 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-3xl font-medium  backdrop-blur-3xl">
        <span className="!bg-clip-text !text-transparent !bg-gradient-to-b !from-indigo-200 !to-primaryColor">
          {" "}
          {text}
        </span>
      </span>
    </button>
  );
};

export default ServicesScreen;
