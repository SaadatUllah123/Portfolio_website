import { RiBrushFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";

export default function services() {
  return (
    <div id="services">
      <div className="bg-orange-200 text-center capitalize p-[4rem_5%_2rem] sm:pt-[5rem] md:px-[7%] lg:px-[9%] xl:pt-[6rem]">
        <h1 className="text-[1.75rem] font-[700] sm:text-[2.25rem] xl:text-[3.25rem] mb-[1.5rem]">
          our <span className="text-[rgb(200,40,0)]">services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-orange-100 p-[1.25rem] rounded-[0.5rem] lg:p-[1.75rem] flex flex-col items-center">
            <span className="text-[3rem] text-[#c82800] xl:text-[4rem]">
              <FaCode />
            </span>
            <h1 className="text-[1.5rem] font-[650] xl:text-[2.2rem]">
              web development
            </h1>
            <p className="text-[0.9rem] py-2 md:text-[0.8rem] xl:text-[1.2rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              totam. Earum voluptates magnam accusamus animi. Dolorem dolore
              labore repellendus nobis?
            </p>
            <button className="bg-[#c82800] p-[0.3rem_1rem] rounded-[1rem] text-[0.75rem] text-white font-[500] sm:text-[1rem] sm:p-[0.4rem_1.5rem] xl:text-[1.25rem] xl:p-[0.5rem_2.5rem] md:mt-[0.5rem] shadow-[0_0_15px_1px_rgb(200,40,0)]">
              Read More
            </button>
          </div>
          <div className="bg-orange-100 p-[1.25rem] rounded-[0.5rem] lg:p-[1.75rem] flex flex-col items-center">
            <span className="text-[3rem] text-[#c82800] xl:text-[4rem]">
              <RiBrushFill />
            </span>
            <h1 className="text-[1.5rem] font-[650] xl:text-[2.2rem]">
              graphics design
            </h1>
            <p className="text-[0.9rem] py-2 md:text-[0.8rem] xl:text-[1.2rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              totam. Earum voluptates magnam accusamus animi. Dolorem dolore
              labore repellendus nobis?
            </p>
            <button className="bg-[#c82800] p-[0.3rem_1rem] rounded-[1rem] text-[0.75rem] text-white font-[500] sm:text-[1rem] sm:p-[0.4rem_1.5rem] xl:text-[1.25rem] xl:p-[0.5rem_2.5rem] md:mt-[0.5rem] shadow-[0_0_15px_1px_rgb(200,40,0)]">
              Read More
            </button>
          </div>
          <div className="bg-orange-100 p-[1.25rem] rounded-[0.5rem] lg:p-[1.75rem] flex flex-col items-center md:col-span-2 lg:col-span-1">
            <span className="text-[3rem] text-[#c82800] xl:text-[4rem]">
              <FaChartLine />
            </span>
            <h1 className="text-[1.5rem] font-[650] xl:text-[2.2rem]">
              digital marketing
            </h1>
            <p className="text-[0.9rem] py-2 md:text-[0.8rem] xl:text-[1.2rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              totam. Earum voluptates magnam accusamus animi. Dolorem dolore
              labore repellendus nobis?
            </p>
            <button className="bg-[#c82800] p-[0.3rem_1rem] rounded-[1rem] text-[0.75rem] text-white font-[500] sm:text-[1rem] sm:p-[0.4rem_1.5rem] xl:text-[1.25rem] xl:p-[0.5rem_2.5rem] md:mt-[0.5rem] shadow-[0_0_15px_1px_rgb(200,40,0)]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
