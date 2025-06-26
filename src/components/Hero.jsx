 

function Hero() {
  return (
    <main className="w-full h-screen relative overflow-hidden justify-center flex mb-[10%]">
      <video
        src="/videos/hero.mp4"
          autoPlay
          loop
        muted
        playsInline
        className="object-cover w-full h-[95%] top-0 -z-10 absolute"
      ></video>
      <div className="absolute bottom-[15%] gap-5 items-center flex flex-col">
        <img
          className="md:w-[30rem] sm:w-[20rem]"
          src="/images/illu-text.png"
          alt=""
          srcset=""
        />
        <h1 className="md:text-3xl text-1xl font-bold">
          Explore, Capture, Conquer
        </h1>
        <div className="md:[w-75%] w-[60%] h-[0.1px] bg-[#baba]"></div>
        <button className="h-12 px-10  text-nowrap bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium hover:opacity-80 ">
          PLAY NOW
        </button>
        <div className="flex items-center gap-5 text-3xl font-extrabold text-gray-300 ">
          <img
            className="md:h-16 h-12"
            src="/images/illu-logo.png"
            alt=""
            srcset=""
          />{" "}
          ZERO
        </div>
        <p className="max-w-[80%] text-center text-[#babaff]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
          illo excepturi, eaque, impedit officiis voluptatibus veniam ratione in
          atque ea minima iusto adipisci maiores animi numquam? Dicta porro
          quidem ipsum.
        </p>
      </div>
      <div className="absolute bottom-40 lg:right-24 right-5 mt-24 animate-bounce sm:inline-block hidden">
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 rounded-full border-2 border-[#babaff] flex justify-center pt-1">
            <div className="w-1 h-3 rounded-full animate-pulse bg-[#babaff]"></div>
            </div>
            <p>Scroll Down</p>
          
        </div>
      </div>
    </main>
  );
}

export default Hero;
