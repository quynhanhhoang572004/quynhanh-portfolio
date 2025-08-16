'use client';

import * as motion from "motion/react-client";
import {Button} from "@heroui/button";

export const AboutContent = () => {
  return (
    <section id="about">
      <div
        className="absolute bg-[#254883] overflow-hidden"
        style={{
          width: "1585.3px",
          height: "97px",
          left: "-2.15px",
          top: "680px",
        }}
      >
        <motion.div
          className="flex items-center h-full whitespace-nowrap"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <h3
              key={index}
              className="font-gaeilge text-[#EDEAE3] text-4xl capitalize font-normal mx-20"
            >
              about me
            </h3>
          ))}
        </motion.div>
      </div>
      <div className=" grid grid-cols-2 gap-4">
        <div>
          <h3
            className="absolute font-gaeilge text-[#254883] text-[70px] text-left lowercase font-normal"
            style={{
              left: "92.2px",
              top: "810px",
            }}
          >
            Hello, I am Quynh Anh
          </h3>

          <div>
            <img src="/star6.svg" className=" -mt-13 -ml-15" />
          </div>
          <div>
            <img src="/star9.svg" className=" -mt-5 -ml-16" />
          </div>

          <div
            className="absolute border-t-2 border-[#EC7696]"
            style={{
              width: "680.29px",
              height: "0px",
              left: "66.16px",
              top: "900px",
            }}
          />

          <div
            className="absolute"
            style={{
              left: "92.2px",
              top: "930px",
            }}
          >
            <p
              className="font-poppins font-medium text-[20px] leading-relaxed"
              style={{
                width: "700px",
              }}
            >
              a junior majoring in Computer Science at International University
              – VNU-HCMC, with a strong passion for both Machine Learning and
              Front-End Development. I enjoy solving real-world problems through
              data science and AI and also love crafting interactive,
              user-friendly web interfaces. I'm currently seeking an internship
              in both AI/ML field and web development fields where I can apply
              my knowledge to real-world projects and continue learning in a
              dynamic environment.
            </p>
          </div>
        </div>
        <div>
        
          <div
            className="absolute ml-20"
            style={{
              width: "428.49px",
              height: "428.49px",
              left: " 977.76px",
              top: "1210.37",
              border: "3px solid #254883",
              zIndex: 1
            }}
          >
            <img src="qanh1.svg" />
          </div>
          <div
            className="absolute -mt-85 ml-20"
            style={{
              width: "428.49px",
              height: "428.49px",
              left: "963.78px",
              top: "1193.54px",
              border: "3px solid #EC7696",
              zIndex: 2
            }}
          />
            <div className="ml-40"
            style={{
              zIndex: 3
            }}>
            <img src="star7.svg"/>
          </div>
           <div style={{zIndex: 3}} className="mt-65 ml-145 absolute ">
            <img src="star8.svg"/>
          </div>
          <div
    className="absolute mt-100 ml-105"
    style={{
     
      zIndex: 4,
    }}
  >
<Button
  className="bg-[#EC7696] text-white rounded-md px-6 py-3 text-lg"
  size="md"
  onClick={() => {
    window.open('/document/Hoàng Ngọc Quỳnh Anh_SE_CV.pdf', '_blank');
  }}
>
  Hire Me
</Button>


  </div>
        </div>
        
      </div>
      

      <div
        className="absolute"
        style={{
          left: "92.2px",
          top: "1160px",
        }}
      >
       
      </div>
    </section>
  );
};
