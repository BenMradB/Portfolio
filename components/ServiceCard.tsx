"use client";
import { ServiceType } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Tooltip } from "react-tooltip";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";

type Props = { service: ServiceType; index: number };

const ServiceCard = ({
  service: { title, description, icons },
  index,
}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: index * 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <CardContainer className="">
        <CardBody className="w-full h-[270px] md:h-[230px] flex flex-col gap-y-6 px-4 py-8 border-2 border-slate-900 bg-slate-900/50 rounded-md">
          <CardItem
            as={"h1"}
            translateZ="50"
            className="text-lg lg:text-2xl tracking-widest font-bold"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="font-normal text-sm text-slate-400 tracking-widest leading-loose"
          >
            {description}
          </CardItem>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 items-center">
            <CardItem
              as={"div"}
              translateZ={20}
              className="flex  w-fit items-center space-x-1"
            >
              {icons.map(({ icon, label }, index) => (
                <div
                  key={index}
                  className="size-[30px] rounded-full border-2 border-slate-700 flex items-center justify-center"
                >
                  <Image
                    data-tooltip-id={icon}
                    src={icon}
                    alt={index + ""}
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                  <Tooltip
                    id={icon}
                    place="top-start"
                    content={label.toUpperCase()}
                    className="!bg-gradient-to-tr !from-primaryColor  !to-indigo-600 text-slate-50"
                  />
                </div>
              ))}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export default ServiceCard;
