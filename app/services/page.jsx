"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum temporibus, facilis fugiat porro a voluptatibus! ",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum temporibus, facilis fugiat porro a voluptatibus! ",
    href: "",
  },
  {
    num: "03",
    title: "Graphics Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum temporibus, facilis fugiat porro a voluptatibus! ",
    href: "",
  },
  {
    num: "04",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum temporibus, facilis fugiat porro a voluptatibus! ",
    href: "",
  },
];

function Services() {
  return (
    <section className="min-h-[88vh] flex lex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto h-full px-4 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6">
                {/* top */}
                <div className="w-full flex justify-between items-center group">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-dull"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
