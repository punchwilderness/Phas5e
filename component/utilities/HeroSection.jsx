import { useState } from "react";
import biggerScience from "../../src/assets/images/bigger-science.png";
import mucem from "../../src/assets/images/mucem.png";
import unganisha from "../../src/assets/images/unganisha.png";
import oliveTree from "../../src/assets/images/olive_tree.jpg";
import noImage from "../../src/assets/noImage.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
  const [hovered, setHovered] = useState({ hover: false, image: 0 });

  const handleMouseMove = (e, containerIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    if (hovered.image === containerIndex) {
      gsap.to(`#image-${containerIndex}`, {
        x: x * 1.3,
        y: y * 1.3,
        duration: 2,
        ease: "power1.out",
      });
      gsap.to(`#text-${containerIndex}`, {
        x: x * 1.3,
        y: y * 1.3,
        duration: 2,
        ease: "power1.out",
      });
    }
  };

  const handleMouseLeave = (containerIndex) => {
    setHovered({ hover: false, image: 0 });
    gsap.to([`#image-${containerIndex}`, `#text-${containerIndex}`], {
      x: 0,
      y: 0,
      duration: 2,
      ease: "power1.inOut",
    });
  };

  useGSAP(() => {
    gsap.from("#text-container", {
      opacity: 0,
      duration: 2,
      delay: 1,
    });
    gsap.from("#image-container", {
      opacity: 0,
      duration: 2,
      delay: 1,
    });
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center font-druk">
        <div className="text-center w-full h-full absolute inset-0">
          <div id="image-container" className="absolute inset-0">
            <div
              id="image-innerContainer"
              className="absolute left-[5%] md:left-[10%] w-[45vw] md:w-[25vw] aspect-video"
            >
              <div
                className="absolute z-11 w-full h-full"
                onMouseEnter={() => setHovered({ hover: true, image: 1 })}
                onMouseLeave={() => handleMouseLeave(1)}
                onMouseMove={(e) => handleMouseMove(e, 1)}
              ></div>
              <img
                id="image-1"
                src={
                  hovered.image === 0 || hovered.image === 1
                    ? biggerScience
                    : noImage
                }
                alt="logo"
                className="absolute z-1 w-full h-full object-cover"
              />
              <div
                id="text-1"
                className={`absolute bottom-[-30%] right-[-8%] z-1 transition-opacity duration-300 ${
                  hovered.image === 1 ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="text-white text-[min(3.5vw,2.5rem)] font-bold uppercase">
                  bigger <br /> science
                </h1>
                <span className="text-white text-[min(1.5vw,1rem)]">
                  Immersive Experience/WebGL/Gaming
                </span>
              </div>
            </div>
            <div className="absolute top-[8%] right-[5%] md:right-[10%] w-[45vw] md:w-[25vw] aspect-video">
              <div
                className="absolute z-11 w-full h-full"
                onMouseEnter={() => setHovered({ hover: true, image: 2 })}
                onMouseLeave={() => handleMouseLeave(2)}
                onMouseMove={(e) => handleMouseMove(e, 2)}
              ></div>
              <img
                id="image-2"
                src={
                  hovered.image === 0 || hovered.image === 2 ? mucem : noImage
                }
                alt="logo"
                className="absolute z-1 w-full h-full object-cover"
              />
              <div
                id="text-2"
                className={`absolute bottom-[-25%] right-[-10%] z-1 transition-opacity duration-300 ${
                  hovered.image === 2 ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="text-white text-[min(4vw,2.5rem)] font-bold uppercase">
                  mucem
                </h1>
                <span className="text-white text-[min(1.5vw,0.875rem)]">
                  Immersive Experience/WebGL/Gaming
                </span>
              </div>
            </div>
            <div className="absolute bottom-[15%] left-[5%] md:left-[15%] w-[45vw] md:w-[25vw] aspect-video">
              <div
                className="absolute z-11 bottom-[15%] left-[5%] w-full h-full"
                onMouseEnter={() => setHovered({ hover: true, image: 3 })}
                onMouseLeave={() => handleMouseLeave(3)}
                onMouseMove={(e) => handleMouseMove(e, 3)}
              ></div>
              <img
                id="image-3"
                src={
                  hovered.image === 0 || hovered.image === 3
                    ? unganisha
                    : noImage
                }
                alt="logo"
                className="absolute z-1 bottom-[15%] left-[5%] w-full h-full object-cover"
              />
              <div
                id="text-3"
                className={`absolute bottom-[0%] right-[-55%] z-1 transition-opacity duration-300 ${
                  hovered.image === 3 ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="text-white text-[min(4vw,2.5rem)] font-bold uppercase">
                  unganisha
                </h1>
                <span className="text-white text-[min(1.5vw,0.875rem)]">
                  Experiental Website/WebGL/3D
                </span>
              </div>
            </div>
            <div className="absolute bottom-[8%] right-[5%] md:right-[10%] w-[45vw] md:w-[25vw] aspect-video">
              <div
                className="absolute z-11 bottom-[20%] right-[5%] w-full h-full"
                onMouseEnter={() => setHovered({ hover: true, image: 4 })}
                onMouseLeave={() => handleMouseLeave(4)}
                onMouseMove={(e) => handleMouseMove(e, 4)}
              ></div>
              <img
                id="image-4"
                src={
                  hovered.image === 0 || hovered.image === 4
                    ? oliveTree
                    : noImage
                }
                alt="logo"
                className="absolute z-1 bottom-[20%] right-[5%] w-full h-full object-cover"
              />
              <div
                id="text-4"
                className={`absolute bottom-[13%] right-[-35%] z-1 transition-opacity duration-300 ${
                  hovered.image === 4 ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="text-white text-[min(4vw,2.5rem)] font-bold uppercase">
                  olive tree
                </h1>
                <span className="text-white text-[min(1.5vw,0.875rem)]">
                  Interactive Installation/Real-Time
                </span>
              </div>
            </div>
          </div>
          <svg
            className={
              hovered.hover
                ? "w-full h-full relative z-0"
                : "w-full h-full relative z-10"
            }
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid meet"
            id="text-container"
          >
            <text
              className="uppercase"
              y="25vh"
              fontSize="min(25vh, 12vw)"
              fontWeight={800}
              fontFamily="DrukWide-Bold"
            >
              <tspan
                x="50%"
                dy="0"
                textAnchor="middle"
                fill={hovered.hover ? "transparent" : "white"}
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="1"
                className="transition-all duration-300"
              >
                imagining
              </tspan>
              <tspan
                x="50%"
                dy="min(19vh, 12vw)"
                textAnchor="middle"
                fill={hovered.hover ? "transparent" : "white"}
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="1"
                className="transition-all duration-300"
              >
                unique
              </tspan>
              <tspan
                x="50%"
                dy="min(19vh, 12vw)"
                textAnchor="middle"
                fill={hovered.hover ? "transparent" : "white"}
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="1"
                className="transition-all duration-300"
              >
                concepts
              </tspan>
              <tspan
                x="50%"
                dy="min(19vh, 12vw)"
                textAnchor="middle"
                fill={hovered.hover ? "transparent" : "white"}
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="1"
                className="transition-all duration-300"
              >
                and digital
              </tspan>
              <tspan
                x="50%"
                dy="min(19vh, 12vw)"
                textAnchor="middle"
                fill={hovered.hover ? "transparent" : "white"}
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="1"
                className="transition-all duration-300"
              >
                experiences
              </tspan>
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
