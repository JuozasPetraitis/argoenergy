import React, { useState, useRef } from "react";
import Image from "next/image";

const data = [
  {
    title: "Vision",
  },
  {
    id: "01",
    title: "Mission",
    description: [
      "Better Energy is a renewable energy company that creates new green energy. We design, develop, engineer, finance, build, operate and own renewable power plants that generate clean electricity.",
      "Every day we work to make an impact that matters. We want to shape a sustainable future and drive a renewable energy revolution with projects that benefit biodiversity and ecosystems.",
    ],
    button: "Read more",
  },
  {
    id: "02",
    title: "Careers",
    description: [
      "Better Energy is a renewable energy company that creates new green energy. We design, develop, engineer, finance, build, operate and own renewable power plants that generate clean electricity.",
      "Every day we work to make an impact that matters. We want to shape a sustainable future and drive a renewable energy revolution with projects that benefit biodiversity and ecosystems.",
    ],
    button: "Join us",
  },
  {
    id: "03",
    title: "Green Energy",
    description: [
      "Better Energy is a renewable energy company that creates new green energy. We design, develop, engineer, finance, build, operate and own renewable power plants that generate clean electricity.",
      "Every day we work to make an impact that matters. We want to shape a sustainable future and drive a renewable energy revolution with projects that benefit biodiversity and ecosystems.",
    ],
    button: "Read more",
  },
  {
    id: "04",
    title: "News",
    description: [
      "Better Energy is a renewable energy company that creates new green energy. We design, develop, engineer, finance, build, operate and own renewable power plants that generate clean electricity.",
      " Every day we work to make an impact that matters. We want to shape a sustainable future and drive a renewable energy revolution with projects that benefit biodiversity and ecosystems.",
    ],
    button: "See all news",
  },
];

const Hero = () => {
  const SlideRef = useRef(null);
  const TopicRef = useRef(null);
  const [which, setWhich] = useState(0);

  const clickHandler = (index) => {
    switch (index) {
      case 0:
        setWhich(0);
        SlideRef.current.style.transform = `translateY(0vh)`;
        break;
      case 1:
        setWhich(1);
        SlideRef.current.style.transform = `translateY(-100vh)`;
        break;
      case 2:
        setWhich(2);
        SlideRef.current.style.transform = `translateY(-200vh)`;
        break;
      case 3:
        setWhich(3);
        SlideRef.current.style.transform = `translateY(-300vh)`;
        break;
      case 4:
        setWhich(4);
        SlideRef.current.style.transform = `translateY(-400vh)`;
        break;

      default:
        break;
    }
  };

  const wheelHandler = (e) => {
    if (e.deltaY === 100) {
      if (which === 4) {
        SlideRef.current.style.transform = `translateY(0vh)`;
        setWhich(0);
      } else {
        setWhich((prev) => prev + 1);
        SlideRef.current.style.transform = `translateY(-${which + 1}00vh)`;
      }
    } else {
      if (which === 0) {
        SlideRef.current.style.transform = `translateY(-400vh)`;
        setWhich(4);
      } else {
        setWhich((prev) => prev - 1);
        SlideRef.current.style.transform = `translateY(-${which - 1}00vh)`;
      }
    }
  };

  return (
    <section className="relative" onWheel={(e) => wheelHandler(e)}>
      <ul className="fixed bottom-20 left-20 z-20 hidden list-[square] flex-col gap-2 text-white lg:flex">
        {data.map((item, index) => (
          <li
            key={index}
            className={`${
              which === index ? "font-black underline underline-offset-2 marker:text-white" : "font-extralight marker:text-black"
            } cursor-pointer text-sm uppercase marker:text-xl  hover:font-bold`}
            onClick={() => clickHandler(index)}
          >
            {item.title}
          </li>
        ))}
      </ul>

      <div className="lg:max-h-screen lg:overflow-hidden">
        <div className="grid grid-rows-[repeat(5,100vh)]" ref={SlideRef}>
          {data.map((item, index) =>
            index === 0 ? (
              <div key={index} className="relative flex items-center justify-center overflow-auto">
                <video className="brightness-80 absolute h-full w-full select-none object-cover" loop muted autoPlay>
                  <source src="/assets/videos/2.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>

                <div className="mx-auto flex w-11/12 items-center justify-center gap-4 text-white">
                  <span className="z-10 select-none font-Melodrama text-8xl font-bold md:text-[10rem]">AE</span>
                  <p className="z-10 flex select-none gap-8 font-Excon text-2xl font-black uppercase leading-none md:text-4xl">
                    Engineers Of Sustainable Future Energy
                  </p>
                </div>

                <div
                  className="group absolute bottom-10 left-0 right-0 mx-auto hidden w-1/6 cursor-pointer flex-col items-center justify-center gap-4 text-white hover:font-bold lg:flex"
                  onClick={() => clickHandler(1)}
                >
                  <p className="select-none text-sm uppercase transition-all duration-500 group-hover:translate-y-16">Read our story</p>
                  <div className="mb-2 h-14 select-none border-l border-white transition-all duration-500 group-hover:-translate-y-16"></div>
                </div>
              </div>
            ) : (
              <div key={index} className="relative grid grid-rows-[40%,60%] lg:grid-cols-[55%,45%] lg:grid-rows-1" ref={TopicRef}>
                <div className={`relative ${which === index ? "animate-[fromBottomToTop_500ms_ease-in-out]" : "animate-none"} select-none`}>
                  <Image src={`/assets/images/${index}.jpg`} alt={item.title} layout="fill" objectFit="cover" className="select-none" />
                </div>

                <div
                  className={`bg-gradient-to-tr ${
                    index === 1
                      ? "from-[#ba4400] to-[#f8d214]"
                      : index === 2
                      ? "from-[#73144b] to-[#e83364]"
                      : index === 3
                      ? "from-[#104801] to-[#9bd209]"
                      : "from-[#01405e] to-[#3ad3e4]"
                  } ${which === index ? "animate-[fromTopToBottom_500ms_ease-in-out]" : "animate-none"} relative flex`}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 m-auto flex h-4/5 w-11/12 cursor-default flex-col justify-evenly md:w-3/5 md:py-16 2xl:h-2/5">
                    <div className="flex select-none items-center justify-between">
                      <p className="whitespace-nowrap font-Excon text-3xl font-black uppercase text-white underline underline-offset-8 lg:absolute lg:right-[92%] lg:top-[34%] lg:text-5xl">
                        {item.title}
                      </p>
                      <p className="relative font-Excon text-6xl font-black uppercase leading-none text-white/30 lg:text-[16rem]">{item.id}</p>
                    </div>

                    <div className="flex flex-col gap-4 py-4 text-sm font-medium text-black md:text-base lg:text-sm">
                      <p>{item.description[0]}</p>
                      <p>{item.description[1]}</p>
                    </div>

                    {/* <button className="self-start">{item.button}</button> */}
                  </div>
                </div>

                <div
                  className="group absolute bottom-10 left-0 right-0 z-40 mx-auto hidden w-1/6 cursor-pointer flex-col items-center justify-center gap-4 text-white hover:font-bold lg:inline-flex"
                  onClick={() => (index === 4 ? clickHandler(0) : clickHandler(index + 1))}
                >
                  <p className="select-none text-sm uppercase transition-all duration-500 group-hover:translate-y-16">
                    {index === 4 ? "Back to top" : "Next storyline"}
                  </p>
                  <div className="mb-2 h-14 select-none border-l border-white transition-all duration-500 group-hover:-translate-y-16"></div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
