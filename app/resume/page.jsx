"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum temporibus, facilis fugiat porro a voluptatibus!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Isaac Warui",
    },
    {
      fieldName: "Phone",
      fieldValue: "+254 710927292",
    },
    {
      fieldName: "Experience",
      fieldValue: "1",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Kenyan",
    },
    {
      fieldName: "Email",
      fieldValue: "isaacvwarui.gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Swahili",
    },
  ],
};

// experience data
const experience = {
  icon: "assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum temporibus, facilis fugiat porro a voluptatibus!",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front End Developer",
      duration: "Summer",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2019 - 2020",
    },
    {
      company: "Software Development Firm",
      position: "Freelance Web Developer",
      duration: "2020 - 2022",
    },
  ],
};

// education data
const education = {
  icon: "assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum temporibus, facilis fugiat porro a voluptatibus!",
  items: [
    {
      institution: "Teach2Give",
      degree: "Software Development",
      duration: "2023",
    },
    {
      institution: "Laikipia University",
      degree: "Computer Science",
      duration: "2020 - 2023",
    },
    {
      institution: "Laikipia University",
      degree: "Computer Science",
      duration: "2020 - 2023",
    },
    {
      institution: "Laikipia University",
      degree: "Computer Science",
      duration: "2020 - 2023",
    },
    {
      institution: "Laikipia University",
      degree: "Computer Science",
      duration: "2020 - 2023",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum temporibus, facilis fugiat porro a voluptatibus!",
  skillList: [
    {
      icons: <FaHtml5 />,
      name: "html 5",
    },
    {
      icons: <FaCss3 />,
      name: "css 3",
    },
    {
      icons: <FaJs />,
      name: "javascript",
    },
    {
      icons: <FaReact />,
      name: "react.js",
    },
    {
      icons: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icons: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icons: <FaFigma />,
      name: "figma",
    },
  ],
};

function Resume() {
  return 
  <motion.div 
    initial={{opacity: 0}}
    animate={{ 
      opacity: 1, 
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"  
  >
    <div className="container mx-auto">
      <Tabs>
        <TabList>
          <TabsTrigger>Experience</TabsTrigger>
          <TabsTrigger>Education</TabsTrigger>
          <TabsTrigger>Skills</TabsTrigger>
          <TabsTrigger>About me</TabsTrigger>
        </TabList>
      </Tabs>
    </div>
  </motion.div>;
}

export default Resume;
