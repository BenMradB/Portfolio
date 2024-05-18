"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ResumeDetails from "./ResumeDetails";
import { educations, experiences, skills } from "@/lib/data";

const ResumeScreen = () => {
  const [resumeBy, setResumeBy] = useState<
    "experience" | "education" | "skills"
  >("experience");
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full flex flex-col gap-y-8">
        <h2 className="text-4xl md:text-6xl tracking-widest ">
          Why hire me ?{" "}
        </h2>
        <p className="leading-loose tracking-wider font-normal text-md text-slate-400">
          Experienced FullStack Developer specializing in Next.js, React, and
          Node.js with Express. Passionate about delivering exceptional results
          and committed to exceeding client expectations. Let&apos;s turn your
          vision into reality together.
        </p>
        <div className="w-full flex flex-col gap-y-5">
          <div
            className={cn(
              "w-full flex items-center justify-center font-bold text-lg h-[50px] rounded-lg bg-slate-900/50 transition-all ease-in-out duration-500 hover:bg-gradient-to-tr from-primaryColor  to-indigo-600 cursor-pointer",
              resumeBy === "experience"
                ? "bg-gradient-to-tr from-primaryColor  to-indigo-600"
                : ""
            )}
            onClick={() => setResumeBy("experience")}
          >
            Experience
          </div>
          <div
            className={cn(
              "w-full flex items-center justify-center font-bold text-lg h-[50px] rounded-lg bg-slate-900/50 transition-all ease-in-out duration-500 hover:bg-gradient-to-tr from-primaryColor  to-indigo-600 cursor-pointer",
              resumeBy === "education"
                ? "bg-gradient-to-tr from-primaryColor  to-indigo-600"
                : ""
            )}
            onClick={() => setResumeBy("education")}
          >
            Education
          </div>
          <div
            className={cn(
              "w-full flex items-center justify-center font-bold text-lg h-[50px] rounded-lg bg-slate-900/50 transition-all ease-in-out duration-500 hover:bg-gradient-to-tr from-primaryColor  to-indigo-600 cursor-pointer",
              resumeBy === "skills"
                ? "bg-gradient-to-tr from-primaryColor  to-indigo-600"
                : ""
            )}
            onClick={() => setResumeBy("skills")}
          >
            Skills
          </div>
        </div>
      </div>
      {resumeBy === "skills" ? (
        <ResumeDetails
          type={resumeBy}
          title={`My ${resumeBy}`}
          subTitle="A showcase of my technical and professional skills."
          skills={skills}
        />
      ) : (
        <ResumeDetails
          type={resumeBy}
          title={`My ${resumeBy}`}
          subTitle={
            resumeBy === "experience"
              ? "A timeline of my professional experiences and roles."
              : "A comprehensive record of my academic and professional education."
          }
          data={resumeBy === "experience" ? experiences : educations}
        />
      )}
    </div>
  );
};

export default ResumeScreen;
