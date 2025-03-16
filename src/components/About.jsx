import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="relative z-50 border-t my-12 lg:mt-2 lg:mb-14 border-[#25213b]"
    >
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

      <div className="flex justify-center my-6 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            About
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12 xl:gap-16">
            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="font-semibold text-2xl md:text-3xl text-emerald-400 uppercase tracking-wide">
                Who Am I?
              </h2>

              <div className="space-y-5">
                <p className="text-gray-100 leading-relaxed text-lg">
                  Hi, I'm{" "}
                  <strong className="font-semibold text-pink-500">
                    Rajeev Kumar
                  </strong>
                  , a passionate full-stack developer with a self-driven mindset
                  for continuous learning and growth. I specialize in modern web
                  application development, leveraging JavaScript ecosystem as my
                  core competency.
                </p>

                <p className="text-gray-100 leading-relaxed text-lg">
                  My expertise lies in transforming complex problems into
                  elegant solutions while keeping user experience at the
                  forefront. I thrive on exploring emerging technologies and
                  contributing to open-source projects that make web development
                  more accessible.
                </p>

                <p className="text-gray-100 leading-relaxed text-lg">
                  Continuously evolving my skill set through hands-on projects
                  and professional collaborations, I maintain a strong focus on
                  clean architecture and sustainable development practices.
                </p>

                {/* <p className="bg-emerald-900/30 border border-emerald-400/30 px-4 py-3 rounded-lg text-emerald-200 text-lg">
                  Currently seeking opportunities to collaborate on meaningful
                  projects and contribute to innovative teams.
                </p> */}
              </div>
            </div>

            {/* Image Container */}
            <div className="order-1 lg:order-2 flex justify-center items-start">
              <div className="relative group w-[400px] h-[400px]">
                <img
                  src="image/rajeev.jpg"
                  alt="Rajeev Kumar - Full Stack Developer"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl aspect-square transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
