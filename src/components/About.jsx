import React from "react";

const About = () => {
  return (
    <div className="relative z-50 border-t my-12 lg:mt-2 lg:mb-14 border-[#25213b]">
      <img
        src="image/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-3 lg:py-2">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            About
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
              Who I am?
            </p>
            <p className="text-gray-200 text-lg lg:text-lg">
              Hi, I'm <strong>Rajeev Kumar</strong>, a passionate and
              enthusiastic programmer with a self-driven attitude towards
              learning and growth. I specialize in web application development,
              with a strong focus on JavaScript as my core technology. 
            </p>
            <p className="text-gray-200 text-lg lg:text-lg">
              I enjoy exploring new technologies, solving complex problems, and building
              solutions that contribute to making the web more open and
              accessible to everyone.
            </p>
            <p className="text-gray-200 text-lg lg:text-lg">
              I have a deep interest in all aspects of web development and am
              constantly working to enhance my skills and knowledge. I am
              currently open to job opportunities that align with my expertise
              and passion.
            </p>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <img
              src="src\assets\skill-img\rajeev_pic.jpg"
              width={280}
              // height={280}
              alt="Rajeev Kumar"
              className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
