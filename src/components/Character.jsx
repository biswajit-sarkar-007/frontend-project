import Spline from "@splinetool/react-spline";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useRef } from "react";

function CustomCursor({ isHovering3D }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      animate={{
        x: position.x - (isHovering3D ? 12 : 15),
        y: position.y - (isHovering3D ? 12 : 15),
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mask: 0.5,
      }}
    >
      <motion.div
        className={`rounded-full ${
          isHovering3D ? "bg-violet-500" : "bg-white"
        }`}
        animate={{
          width: isHovering3D ? "24px" : "40px",
          height: isHovering3D ? "24px" : "40px",
        }}
        transition={{ duration: 0.2 }}
      />

      {isHovering3D && (
        <motion.div
          className="absolute inset-0 rounded-full bg-transition border border-violet-500"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 2, opacity: 0.5 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      )}
    </motion.div>
  );
}

const Character = () => {
  const [selectAvatar, setSelectAvatar] = useState("VIKI");
  const [cursorInModelArea, setCursorInModelArea] = useState(false);

  // avatr data
  const Avatr = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      peneratrate: 30,
      portable: 80,
      stars: 3,
    },
    EVA: {
      name: "EVA",
      power: 90,
      stable: 80,
      peneratrate: 70,
      portable: 60,
      stars: 4,
    },
  };

  const currentAvatar = Avatr[selectAvatar];

  const handle3DAreaMouseEnter = () => {
    setCursorInModelArea(true);
  };

  const handle3DAreaMouseLeave = () => {
    setCursorInModelArea(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden mb-[10%]">

      < CustomCursor isHovering3D={cursorInModelArea} />


      {/* title section */}
      <div className="relative z-10 pt-6 text-center ">
        <h1
          className="text-5xl md:-mb-14 mb-8 font-bold tracking-widest"
          style={{ textShadow: "0 0 10px rgba()" }}
        >
          {" "}
          FIGHTERS
        </h1>
      </div>

      {/* main contain area */}

      <div className="relative  z-10 flex md:flex-row flex-col items-center w-full h-full p-4">
        {/* left side box */}
        <div className="w-full md:w-2/4 flex flex-col md:ml-10">
          {/* select avatar info card */}

          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]">
            <h1 className="text-2xl font-bold">{currentAvatar.name}</h1>
            {/* Avatar Satistics */}
            <div className="space-y-3 mb-16">
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Power</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.power}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.power}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-gray-400">stable</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.stable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.stable}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-gray-400">peneratrate</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.peneratrate}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.peneratrate}</span>
              </div>

              <div className="flex items-center">
                <span className="w-24 text-gray-400">portable</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.portable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.portable}</span>
              </div>
            </div>
            <div className="flex gap-7">
              <button className="border-blue-300 rounded-md hover:opacity-70 bg-violet-900 text-white  py-1 px-4">
                Proficient
              </button>
              <button className="border-blue-300 rounded-md hover:opacity-70 bg-violet-900 text-white  py-1 px-4">
                Redemption
              </button>
            </div>
          </div>

          {/* Avatar selection card */}
          <div className="grid grid-cols-2 gap-4">
            {/* VIKI Crad */}
            <div
              className="relative bg-gray-900/70 backdrop-blur-sm  rounded-lg p-3 border flex lg:flex-row flex-col justify-between items-center cursor-pointer"
              onClick={() => setSelectAvatar("VIKI")}
            >
              <div className="text-lg mb-2">VIKI</div>
              {/* Avatar visual placeholder */}
              <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                <img src="/images/VIKI.png" alt="" srcset="" />
              </div>
              {/* Star raring section */}
              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-violet-400 text-violet-500"
                  />
                ))}
              </div>

              {/* Highlight for seletcted avatar */}
              {selectAvatar === "VIKI" && (
                <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
              )}
            </div>

            {/* EVA Crad */}
            <div
              className="relative bg-gray-900/70 backdrop-blur-sm  rounded-lg p-3 border flex lg:flex-row flex-col justify-between items-center cursor-pointer"
              onClick={() => setSelectAvatar("EVA")}
            >
              <div className="text-lg mb-2">EVA</div>
              {/* Avatar visual placeholder */}
              <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                <img src="/images/EVA.png" alt="" srcset="" />
              </div>
              {/* Star raring section */}
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-violet-400 text-violet-500"
                  />
                ))}
              </div>

              {/* Highlight for seletcted avatar */}
              {selectAvatar === "EVA" && (
                <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
              )}
            </div>
          </div>
        </div>

        {/* right side box */}
        <div className="relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden"
        onMouseEnter={handle3DAreaMouseEnter}
        onMouseLeave={handle3DAreaMouseLeave}
        >
          <AnimatePresence mode="wait">
            {selectAvatar === "VIKI" ? (
              <motion.div
                key="VIKI"
                className="absolute inset-0"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              >
                <Spline scene="https://prod.spline.design/BA-vQ4cmjszXpZpB/scene.splinecode" />
              </motion.div>
            ) : (
              <motion.div
                key="EVA"
                className="absolute inset-0"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              >
                <Spline scene="https://prod.spline.design/nsp0ZUB-Dh9j4IEg/scene.splinecode" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Character;
