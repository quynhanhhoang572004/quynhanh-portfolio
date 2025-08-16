"use client";

import * as motion from "motion/react-client";

export const ProjectSection = () => {
  const projects = [
    {
      title: "The Recipe club",
      img: "/recipeClub.png",
      techstack: "ReactJS, NestJS, MUI",
      project: "https://recipe-club-fe.netlify.app/",
    },
    {
      title: "HireX",
      img: "/hirex.png",
      techstack: "python, streamlit, ANTLR",
      project: "https://github.com/quynhanhhoang572004/CV-Ranking",
    },
    {
      title: "TMDB ETL Pipeline with PySpark & Looker Studio",
      img: "/ETL.png",
      techstack: "python, pyspark, looker studio, GCP, Bigquery",
      project:
        "https://github.com/quynhanhhoang572004/Building-a-Movie-ETL-Architecture-on-Google-Cloud",
    },
    {
      title: "Neoverse.exe",
      img: "/neo.png",
      techstack: "python, RAG, Langchain",
    },
    {
      title: "Air Quality Forecasting",
      img: "/neo.png",
      techstack: "python, sckit-learn, numpy, pandas, matplotlib",
      project: "https://github.com/NguyenThanhNamIT/AIRPPMHackathon",
    },
    {
      title: "My Portfolio",
      img: "/portfolio.png",
      techstack: "Nextjs, Typescript",
      project: "https://github.com/quynhanhhoang572004/quynhanh-portfolio",
    },
  ];
  return (
    <section id="project" className="py-24">
      <div
        className="absolute bg-[#254883] overflow-hidden"
        style={{
          width: "1585.3px",
          height: "97px",
          left: "-2.15px",
          top: "2850px",
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
              projects
            </h3>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-screen-2xl mt-10 p-65">
        <div className="-mt-50 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <img src="/star10.svg" className=" relative mr-0.05 mb-10 left-5" />
            <img src="/star11.svg" className=" mr-4" />

            <h2 className="font-gaeilge text-[#254883] text-6xl ">Projects</h2>

            <img src="/star12.svg" className="  relative mt-10 left-2" />
            <img src="/star13.svg" className=" relative mt-20 -left-1" />
          </div>
        </div>
        <div className="h-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-100">
          {projects.map((s, i) => (
            <div key={i} className="relative place-items-center ">
              <div
                className="bg-[#254883] border-4 border-[#EC7696] rounded-[67px] text-white
                   min-h-[365px] px-8 py-10 flex flex-col items-center justify-center
                   text-center gap-3"
                style={{ width: "510.58px" } }
                onClick={() => window.open(s.project, "_blank")}
              >
                

                
                <div>
                  <img className=" rounded-[20px]" alt={s.title} src={s.img} />
                </div>
                
                <div className="text-3xl font-gaeilge leading-tight break-words max-w-[440px]">
                  {s.title}
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {s.techstack.split(",").map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#EC7696] text-[#fff] px-4 py-2 rounded-xl font-gaeilge text-lg"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
