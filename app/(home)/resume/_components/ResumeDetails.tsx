"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ResumeDataTye, SkillType } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

type Props = {
  type: "experience" | "education" | "skills";
  title: string;
  subTitle: string;
  data?: ResumeDataTye[];
  skills?: SkillType[];
};

const ResumeDetails = ({ type, title, subTitle, data, skills }: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-8">
      <h2 className="text-4xl md:text-6xl tracking-widest capitalize">
        {" "}
        {title}
        {type === "skills" ? "" : "s"}
      </h2>
      <p className="leading-loose tracking-wider font-normal text-md text-slate-400">
        {" "}
        {subTitle}{" "}
      </p>
      <Cards type={type} data={data} skills={skills} />
    </div>
  );
};

const Cards = ({
  type,
  data,
  skills,
}: {
  type: "experience" | "education" | "skills";
  data?: ResumeDataTye[];
  skills?: SkillType[];
}) => {
  return (
    <>
      {type === "skills" ? (
        <div className="w-full max-h-[400px] overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gird-cols-4 gap-2">
          {skills!.map((skill, index) => (
            <>
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
                data-tooltip-id={skill.label}
                key={index}
                className="w-full px-2 py-6 rounded-md bg-slate-900/50 flex items-center justify-center cursor-pointer"
              >
                <Image
                  src={skill.icon}
                  alt={skill.label}
                  width={60}
                  height={60}
                />
              </motion.div>
              <Tooltip
                id={skill.label}
                place="top-start"
                content={skill.label.toUpperCase()}
                className="!bg-gradient-to-tr !from-primaryColor  !to-indigo-600 text-slate-50"
              />
            </>
          ))}
        </div>
      ) : (
        <div className="w-full max-h-[400px] overflow-y-auto grid grid-cols-1  gap-4">
          {data!.map((item, index) => (
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
              key={index}
            >
              <CardContainer className="w-full">
                <CardBody className="w-full h-[120px] overflow-y-auto bg-slate-900/50 rounded-md flex flex-col justify-between px-4 py-3">
                  <CardItem
                    as={"div"}
                    translateZ="50"
                    className="flex items-center gap-x-2 text-sm text-primaryColor"
                  >
                    <p>{item.startDate}</p>
                    <span>-</span>
                    <p>{item.endDate}</p>
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="font-normal text-sm text-slate-400 tracking-widest leading-loose"
                  >
                    {item.title}
                  </CardItem>{" "}
                  <div className="flex items-center gap-x-2 w-full ">
                    {" "}
                    <span className="size-[7px] rounded-full bg-primaryColor"></span>
                    <p className="text-xs font-semibold">{item.company}</p>{" "}
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default ResumeDetails;
