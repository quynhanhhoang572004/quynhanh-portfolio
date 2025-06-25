import * as motion from "motion/react-client";
export const HeroContent = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="-mt-20">
        <motion.h1
          className="absolute font-gaeilge text-[#254883] text-[300px] leading-[345px] text-center text-transform: lowercase font-normal z-0"
          style={{
            width: "645px",
            height: "345px",
            left: "372.54px",
          }}
          initial={{ opacity: 0, scale: 0, rotate: 1.95 }}
          animate={{ opacity: 1, scale: 1, rotate: 1.95 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          PORT
        </motion.h1>
        <motion.div
          className="absolute ml-25 mt-10 z-10"
          style={{
            width: "645px",
            height: "345px",
            left: "372.54px",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <img src="/start5.svg" alt="Logo" className=" ml-5" />
        </motion.div>
        <motion.h2
          className="absolute font-gaeilge text-[#EC7696] text-[80px] leading-[115px] text-center capitalize font-normal  -mt-40 -ml-10"
          style={{
            width: "215px",
            height: "115px",
            left: "1017.17px",
            top: "316.27px",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          2025
        </motion.h2>
      </div>
      <div>
        <motion.h1
          className="absolute font-gaeilge text-[#254883] text-[300px] leading-[345px] text-center capitalize font-normal text-transform: lowercase z-0"
          style={{
            width: "638.97px",
            height: "403.1px",
            left: "487.9px",
            top: "240.31px",
          }}
          initial={{ opacity: 0, scale: 0, rotate: -5.64 }}
          animate={{ opacity: 1, scale: 1, rotate: -5.64 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          folio
        </motion.h1>
        <motion.div
          className="absolute ml-25 mt-10 z-10"
          style={{
            width: "227.96px",
            height: "192.59px",
            left: "878.71px",
            top: "210.27px",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <img src="/star3.svg" alt="Logo" className=" ml-5" />
        </motion.div>
        <motion.div
          className="absolute ml-25 mt-10 z-10"
          style={{
            width: "136.72px",
            height: "133.47px",
            left: "235.86px",
            top: " 265.24px",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <img src="/star4.svg" alt="Logo" className=" ml-5" />
        </motion.div>
      </div>
      <div>
        <img src="/v40.svg" className=" -ml-20" />
      </div>
      <motion.h6
        className="absolute font-gaeilge text-[#254883] text-2xl leading-[345px] text-center capitalize font-normal  z-0"
        style={{
          
     
          left: "844.66px",
          top: "370.55px"
        }}
        initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
      >
        Hoang Ngoc Quynh anh - AI Engineer
      </motion.h6>
    </section>
  );
};
