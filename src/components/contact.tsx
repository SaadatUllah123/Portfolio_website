export default function Contact() {
  return (
    <section className="flex justify-center items-center bg-orange-200 xl:h-[100vh] text-center capitalize">
        <div className="w-full p-[6rem_5%_2rem] md:p-[7rem_7%_3rem] lg:px-[20%]">
          <h1 className="text-[2rem] font-[700] sm:text-[2.25rem] xl:text-[3.25rem] mb-[1.5rem]">
            contact <span className="text-[#c82800]">me!</span>
          </h1>
          <form action="">
            <div className="flex flex-col sm:gap-[.75rem] sm:flex-row">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-[0.5rem_0.75rem] outline-none rounded-[0.4rem] mb-[.75rem] xl:text-[1.40rem]"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-[0.5rem_0.75rem] outline-none rounded-[0.4rem] mb-[.75rem] xl:text-[1.40rem]"
              />
            </div>
            <div className="flex flex-col sm:gap-[.75rem] sm:flex-row">
              <input
                type="number"
                placeholder="Mobile Number"
                required
                className="w-full p-[0.5rem_0.75rem] outline-none rounded-[0.4rem] mb-[.75rem] xl:text-[1.40rem]"
              />
              <input
                type="text"
                placeholder="Email Subject"
                required
                className="w-full p-[0.5rem_0.75rem] outline-none rounded-[0.4rem] mb-[.75rem] xl:text-[1.40rem]"
              />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Your Message"
              className="w-full h-[200px] p-[0.5rem_0.75rem] outline-none rounded-[0.4rem] mb-[.75rem] xl:text-[1.40rem] "
            ></textarea>
            <button
              type="submit"
              className="bg-[#c82800] p-[0.5rem_1.25rem] rounded-[1rem] text-[0.9rem] text-white font-[500] sm:text-[1rem] sm:px-[1.5rem] xl:text-[1.25rem] xl:px-[2.5rem] mt-[0.5rem] shadow-[0_0_15px_1px_rgb(200,40,0)]"
            >
              Submit
            </button>
          </form>
        </div>
    </section>
  );
}
