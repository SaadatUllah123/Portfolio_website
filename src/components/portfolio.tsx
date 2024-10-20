import Image from "next/image";
import project_1 from "../public/image/project-1.jpg";
import project_2 from "../public/image/project-2.jpg";
import project_3 from "../public/image/project-3.jpg";
import project_4 from "../public/image/project-4.jpg";
import project_5 from "../public/image/project-5.jpg";
import project_6 from "../public/image/project-6.jpg";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <div className="bg-orange-100 text-center capitalize p-[4rem_5%_2rem] sm:p-[5rem_5%_2rem] md:p-[5rem_7%_2rem] lg:px-[9%] xl:pt-[6rem]">
        <h1 className="text-[1.75rem] font-[700] sm:text-[2.25rem] xl:text-[3.25rem] mb-[1.5rem]">
          latest <span className="text-[rgb(199,40,0)]">project </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <div className="relative flex rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-500 ">
            <Image src={project_1} alt={"project"} className="w-full h-full" />
            <div className="absolute inset-0 p-[1.25rem] flex flex-col items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[rgb(199,40,0)] to-[rgba(0,0,0,0.5)]">
              <h1 className="text-[1.25rem] font-bold xl:text-[2rem]">
                web design
              </h1>
              <p className="text-[1rem] my-[0.5rem] xl:text-[1.3rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                vel!
              </p>
              <span className="bg-black rounded-[50%] p-[0.75rem] xl:text-[1.4rem]">
                <FaExternalLinkAlt />
              </span>
            </div>
          </div>
          <div className="relative flex rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-500 ">
            <Image
              src={project_2}
              alt={"project"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-[1.25rem] flex flex-col items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[rgb(199,40,0)] to-[rgba(0,0,0,0.5)]">
              <h1 className="text-[1.25rem] font-bold xl:text-[2rem]">
                web design
              </h1>
              <p className="text-[1rem] my-[0.5rem] xl:text-[1.3rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                vel!
              </p>
              <span className="bg-black rounded-[50%] p-[0.75rem] xl:text-[1.4rem]">
                <FaExternalLinkAlt />
              </span>
            </div>
          </div>
          <div className="relative flex rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-500 ">
            <Image
              src={project_3}
              alt={"project"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-[1.25rem] flex flex-col items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[rgb(199,40,0)] to-[rgba(0,0,0,0.5)]">
              <h1 className="text-[1.25rem] font-bold xl:text-[2rem]">
                web design
              </h1>
              <p className="text-[1rem] my-[0.5rem] xl:text-[1.3rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                vel!
              </p>
              <span className="bg-black rounded-[50%] p-[0.75rem] xl:text-[1.4rem]">
                <FaExternalLinkAlt />
              </span>
            </div>
          </div>
          <div className="relative flex rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-500 ">
            <Image
              src={project_4}
              alt={"project"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-[1.25rem] flex flex-col items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[rgb(199,40,0)] to-[rgba(0,0,0,0.5)]">
              <h1 className="text-[1.25rem] font-bold xl:text-[2rem]">
                web design
              </h1>
              <p className="text-[1rem] my-[0.5rem] xl:text-[1.3rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                vel!
              </p>
              <span className="bg-black rounded-[50%] p-[0.75rem] xl:text-[1.4rem]">
                <FaExternalLinkAlt />
              </span>
            </div>
          </div>
          <div className="relative flex rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-500 ">
            <Image
              src={project_5}
              alt={"project"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-[1.25rem] flex flex-col items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[rgb(199,40,0)] to-[rgba(0,0,0,0.5)]">
              <h1 className="text-[1.25rem] font-bold xl:text-[2rem]">
                web design
              </h1>
              <p className="text-[1rem] my-[0.5rem] xl:text-[1.3rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                vel!
              </p>
              <span className="bg-black rounded-[50%] p-[0.75rem] xl:text-[1.4rem]">
                <FaExternalLinkAlt />
              </span>
            </div>
          </div>
          <div className="relative flex rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-500 ">
            <Image
              src={project_6}
              alt={"project"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-[1.25rem] flex flex-col items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[rgb(199,40,0)] to-[rgba(0,0,0,0.5)]">
              <h1 className="text-[1.25rem] font-bold xl:text-[2rem]">
                web design
              </h1>
              <p className="text-[1rem] my-[0.5rem] xl:text-[1.3rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                vel!
              </p>
              <span className="bg-black rounded-[50%] p-[0.75rem] xl:text-[1.4rem]">
                <FaExternalLinkAlt />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
