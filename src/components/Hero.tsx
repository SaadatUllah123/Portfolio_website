import Image from "next/image";
import Link from "next/link";
import heroImage from "../image/home.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-3 capitalize bg-orange-200 p-[7rem_5%_2rem] sm:pt-[9rem] md:flex-row md:h-[100vh] md:p-[7rem_7%_2rem] lg:px-[9%]">
        <div className="md:basis-[55%] ">
          <h4 className="text-[#c82800] font-[650] sm:text-[1.25rem] xl:text-[2rem]">
            hi,its me
          </h4>
          <h2 className="text-[1.5rem] font-[700] sm:text-[2.25rem] xl:text-[3.25rem]">
            Saadat Ullah
          </h2>
          <h3 className="text-[1.03rem] font-[650] sm:text-[2rem] md:text-[1.5rem] lg:text-[1.6rem] xl:text-[2.25rem]">
            and i&apos;m a{" "}
            <span className="inline-block text-[#c82800]">
              <Typewriter
                options={{
                  strings: [
                    "frontend developer",
                    "graphics designer",
                    "digital marketer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p className="text-[0.7rem] py-[0.75rem] sm:text-[0.9rem] xl:text-[1.25rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est porro
            qui exercitationem, nihil a cumque doloribus, veritatis aliquam
            aspernatur, vitae reprehenderit pariatur maiores alias ducimus magni
            nostrum esse accusantium. Reprehenderit maiores, ab numquam debitis
            eaque obcaecati enim nesciunt autem qui temporibus incidunt fugiat,
            harum minus explicabo ex inventore deserunt consequatur?
          </p>
          <div className="flex gap-2 text-[#c82800] pb-[1rem]">
            <span className="border-[#c82800] text-[1rem] border-[1px] rounded-[50%] p-[3px] hover:bg-[#c82800] hover:text-white md:text-[1.25rem] xl:text-[2rem] xl:p-[7px]">
              <Link href={""}>
                <FaFacebookF />
              </Link>
            </span>
            <span className="border-[#c82800] text-[1rem] border-[1px] rounded-[50%] p-[3px] hover:bg-[#c82800] hover:text-white md:text-[1.25rem] xl:text-[2rem] xl:p-[7px]">
              {" "}
              <Link href={""}>
                <FaXTwitter />
              </Link>
            </span>
            <span className="border-[#c82800] text-[1rem] border-[1px] rounded-[50%] p-[3px] hover:bg-[#c82800] hover:text-white md:text-[1.25rem] xl:text-[2rem] xl:p-[7px]">
              <Link
                href={"https://www.github.com/SaadatUllah123"}
                target="_blank"
              >
                <TbBrandGithubFilled />
              </Link>
            </span>
            <span className="border-[#c82800] text-[1rem] border-[1px] rounded-[50%] p-[3px] hover:bg-[#c82800] hover:text-white md:text-[1.25rem] xl:text-[2rem] xl:p-[7px]">
              {" "}
              <Link
                href={"https://www.linkedin.com/in/saadat-ullah-29b5042b8"}
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </span>
          </div>
          <button className="bg-[#c82800] p-[0.5rem_1.25rem] rounded-[1rem] text-[0.9rem] text-white font-[500] sm:text-[1rem] sm:px-[1.5rem] xl:text-[1.25rem] xl:px-[2.5rem] mt-[0.5rem] shadow-[0_0_15px_1px_rgb(200,40,0)]">
            Download CV
          </button>
        </div>
        <div className="md:basis-[45%] ">
          <Image
            src={heroImage}
            alt="hero Image"
            className="w-[275px] sm:w-[325px] lg:w-[350px] xl:w-[425px] m-auto"
          />
        </div>
      </div>
    </section>
  );
}
