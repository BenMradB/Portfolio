"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const ProfileAvatar = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ProfileAvatar;
