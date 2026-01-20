import type React from "react";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

type segementData = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

export const SegmentData: segementData[] = [
  {
    label: "Github",
    value: "GithubCard",
    icon: <FaGithub />,
  },
  {
    label: "Instagram",
    value: "InstagramCard",
    icon: <RiInstagramFill />,
  },
  {
    label: "Linkedin",
    value: "LinkedinCard",
    icon: <IoLogoLinkedin />,
  },
];
