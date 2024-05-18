"use effect";
import { RouteType, SocialMediaType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaButton = ({
  socialMediaAccount,
}: {
  socialMediaAccount: SocialMediaType;
}) => {
  return (
    <Link
      href={socialMediaAccount.href}
      target="_blank"
      className="cursor-pointer size-10 rounded-full p-2 flex items-center justify-center bg-gradient-to-tr from-primaryColor  to-indigo-600 hover:bg-gradient-to-tr hover:from-indigo-600  hover:to-primaryColor transition-all duration-1000 ease-in-out"
    >
      <Image
        src={socialMediaAccount.icon}
        alt={socialMediaAccount.icon}
        width={18}
        height={18}
      />
    </Link>
  );
};

export default SocialMediaButton;
