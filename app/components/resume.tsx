"use client";

import * as motion from "motion/react-client";

export const ResumeSection = () => {
  const skills = [
    {
      title: "Programming Language",
      subtitle: "Python, Java, JavaScript",
      icon: "/star_tech.svg",
    },
    {
      title: "Framework",
      subtitle: "Reactjs, nodejs, nestjs, nextjs, Fastapi ",
      icon: "/star_tech.svg",
    },
    {
      title: "Libraries",
      subtitle: "tensorflow, scikit-learn, keras, pytorch",
      icon: "/star_tech.svg",
    },
    {
      title: "Tools",
      subtitle: "Langchain, GIt, github, Figma, RESTFULAPI,..",
      icon: "/star_tech.svg",
    },
    {
      title: "Cloud and big data",
      subtitle: "Pyspark, google cloud, looker studio",
      icon: "/star_tech.svg",
    },
    {
      title: "AI techniques ",
      subtitle: "Retrieval-Augmented Generation (RAG),..",
      icon: "/star_tech.svg",
    },
  ];

  const other = [
    {
      title: "Education",
      subtitle1: "Bachelor of Science in Computer Science",
      location: "at International University",
      time: "(9/2022 - Present)",
      gpa: "GPA: 3.28",
      icon: "/star15.svg",
    },
    {
      title: "Experience",
      subtitle1: "Member of design department",
      location: "IU Technique",
      time: "(9/2022 - Present)",
      icon: "/star15.svg",
    },
  ];
  return (
    <section id="resume">
      <div
        className="absolute bg-[#254883] overflow-hidden"
        style={{
          width: "1585.3px",
          height: "97px",
          left: "-2.15px",
          top: "1490px",
        }}
      >
        <motion.div
          className="flex items-center h-full whitespace-nowrap"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <h3
              key={index}
              className="font-gaeilge text-[#EDEAE3] text-4xl capitalize font-normal mx-20"
            >
              resume
            </h3>
          ))}
        </motion.div>
      </div>

      <div>
        <div
          className="absolute font-gaeilge text-[#254883] text-6xl flex items-center justify-center"
          style={{
            left: "50%",
            top: "1620px",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        >
          My Resume
        </div>

        <div
          className="absolute"
          style={{ left: "500px", top: "1610px", zIndex: 2 }}
        >
          <img src="/star10.svg" className="ml-18" />
        </div>
        <div
          className="absolute"
          style={{ left: "499px", top: "1655px", zIndex: 2 }}
        >
          <img src="/star11.svg" className="ml-18" />
        </div>
        <div
          className="absolute"
          style={{ left: "920px", top: "1655px", zIndex: 2 }}
        >
          <img src="/star12.svg" />
        </div>
        <div
          className="absolute"
          style={{ left: "960px", top: "1690px", zIndex: 2 }}
        >
          <img src="/star13.svg" />
        </div>

        <div
          className="absolute bg-[#254883] border-4 border-[#EC7696] rounded-[67px] flex items-center justify-center"
          style={{
            width: "1267.66px",
            height: "585.25px",
            left: "50%",
            top: "1770px",
            boxSizing: "border-box",
            transform: "translateX(-50%)",
            zIndex: "2",
          }}
        >
          <div className="w-full h-full px-14 py-12 mt-25 place-items-center">
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 ">
              {skills.map((s, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 font-gaeilge mt-5"
                >
                  <img
                    src={s.icon}
                    alt="star"
                    className="row-span-2 self-start"
                  />
                  <span className="text-[#EC7696] text-4xl">{s.title}</span>
                  <span className="text-[#FFFFFF] text-2xl">{s.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="font-gaeilge text-[#FFFFFF] absolute bg-[#EC7696] rounded-[16px] flex items-center justify-center text-4xl"
          style={{
            width: "349.31px",
            height: "88px",
            left: "50%",
            top: "1730px",
            boxSizing: "border-box",
            transform: "translateX(-50%)",
            zIndex: "2",
          }}
        >
          Technical skills
          <div>
            <img className="ml-0.2 mb-8" src="/star15.svg" />
          </div>
        </div>
        <div className="h-[1450px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
  {other.map((s, i) => (
    <div key={i} className="relative place-items-center ">
    
      <div
        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#EC7696] text-white rounded-[16px]
                   h-[75px] min-w-[245px] px-6 flex items-center justify-center gap-2 text-3xl font-gaeilge shadow"
      >
        <span>{s.title}</span>
        <img src={s.icon} alt="" className="h-5" />
      </div>

      
      <div
        className="bg-[#254883] border-4 border-[#EC7696] rounded-[67px] text-white
                   min-h-[365px] px-8 py-12 flex flex-col items-center justify-center
                   text-center gap-3"
        style={{ width: "510.58px" }}
      >
        <div className="text-3xl font-gaeilge leading-tight break-words max-w-[440px]">
          {s.subtitle1}
        </div>
        <div className="text-2xl font-gaeilge opacity-90 break-words">
          {s.location}
        </div>
        <div className= "text-2xl font-gaeilge ">
          {s.time}
          </div>
          <div className= "text-2xl font-gaeilge bg-[#EC7696] rounded-[16px]" 
          style={{
            width:"150.79px",
          }}>
            {s.gpa}
            </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};
