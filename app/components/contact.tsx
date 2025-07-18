'use client';

import * as motion from "motion/react-client";
import { Linkedin, Github, Phone, Mail } from "lucide-react";
import {Button, ButtonGroup} from "@heroui/button";

export const ContactContent = () =>{
    return (
        <section id="contact">
          <div  className="absolute"
        style={{
          left: "92.2px",
          top: "1160px",
        }}>
             <h4 className="font-gaeilge text-[#254883] text-[40px] lowercase font-normal mt-4">
          Contacts
        </h4>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="mt-4 flex items-center space-x-3">
            <Linkedin color="#EC7696" size={32} />
            <span className="text-[#254883] text-lg font-poppins">
              <a href="https://www.linkedin.com/in/quynhanh572004/">
                linkedin.com/in/quynhanhhoang572004
              </a>
            </span>
          </div>
          <div className="mt-4 flex items-center space-x-3">
            <Phone color="#EC7696" size={32} />
            <span className="text-[#254883] text-lg font-poppins">
              0888621830
            </span>
          </div>
          <div className="mt-4 flex items-center space-x-3">
            <Github color="#EC7696" size={32} />
            <span className="text-[#254883] text-lg font-poppins">
              <a href="https://github.com/quynhanhhoang572004">
                quynhanhhoang572004
              </a>
            </span>
          </div>

          <div className="mt-4 flex items-center space-x-3">
            <Mail color="#EC7696" size={32} />
            <span className="text-[#254883] text-lg font-poppins">
              quynhanhhoang572004@gmail.com
            </span>
          </div>
        </div>
        </div>
        </section>
    )
}