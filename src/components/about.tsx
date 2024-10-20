import Image from "next/image";
import image from "../public/image/home.png";

export default function About() {
  return (
    <div id="about">
      <div className="flex flex-col-reverse justify-center items-center gap-3 capitalize bg-orange-100 p-[6rem_5%_1rem] sm:p-[8rem_5%_1rem] md:flex-row md:h-[100vh] md:p-[7rem_7%_1rem] lg:px-[9%] ">
        <div className="md:basis-[40%]">
          <Image
            src={image}
            alt="about-image"
            className="w-[250px] sm:w-[325px] md:w-[300px] lg:w-[350px] xl:w-[400px] m-auto"
          />
        </div>
        <div className="md:basis-[60%]">
          <h1 className="text-[1.5rem] font-[700] sm:text-[2.25rem] xl:text-[3.25rem]">
            about <span className="text-[#c82800]">me</span>
          </h1>
          <h2 className="text-[1.40rem] font-[700] sm:text-[2rem] xl:text-[3rem]">
            frontend developer
          </h2>
          <p className="text-[0.7rem] py-[0.75rem] sm:text-[0.9rem] xl:text-[1.25rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eum
            veniam est explicabo ab ad repellat beatae. Non, dolores
            repellendus! Cumque voluptatum libero, praesentium dolor quae amet
            voluptatem distinctio aliquid maiores eos ab aspernatur, unde nam
            nihil ad tempore et.
          </p>
          <p className="text-[0.7rem] py-[0.75rem] sm:text-[0.9rem] xl:text-[1.25rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eum
            veniam est explicabo ab ad repellat beatae. Non, dolores
            repellendus! Cumque voluptatum libero, praesentium dolor quae amet
            voluptatem distinctio aliquid maiores eos ab aspernatur, unde nam
            nihil ad tempore et.
          </p>
          <button className="bg-[#c82800] p-[0.3rem_1rem] rounded-[1rem] text-[0.75rem] text-white font-[500] sm:text-[1rem] sm:p-[0.4rem_1.5rem] xl:text-[1.25rem] xl:p-[0.5rem_2.5rem] shadow-[0_0_15px_1px_rgb(200,40,0)]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
