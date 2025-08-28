import { useRef } from "react";

//gasp
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

//gsap/animations
import { animateIntro } from "../gsap/animations/animateIntro";
import { introductionScrollDown } from "../gsap/animations/introductionScrollDown";

//component
import VideoSequence from "../components/VideoSeqence";
import ResponsiveText from "../components/ResponsiveText";

//lenis
import { useLenis } from "../context/LenisContext";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

const IntroSection = ({ data, container, videoUrls }) => {
  const lenis = useLenis();

  const introTextRefs = useRef([
    useRef(), // first
    useRef(), // second
    useRef(), // third
    useRef(), // fourth
  ]);

  useGSAP(
    () => {
      animateIntro(lenis, () => {
        introductionScrollDown(container); // scope 전달
      });
    },
    { scope: container }
  );

  return (
    <section className="section-introduction relative w-full h-full md:mb-[1.1%] mb-[4%]">
      {/* video-wrapper */}
      <div className="video__wrapper opacity-0 scale-[0.1] absolute w-full z-0 h-full rounded-xl overflow-hidden">
        <VideoSequence videoUrls={videoUrls} introTextRefs={introTextRefs} />
      </div>
      {/* introduction-words */}
      <div className="introduction-words flex flex-col md:justify-center justify-end absolute z-1 w-full h-full md:font-light font-normal">
        {/* introduction__wrapper */}
        <div className="introduction-words__wrapper flex lg:text-[clamp(1rem,1.4vw,100px)] text-[clamp(1rem,2vw,50px)] text-white relative md:top-[2%] md:flex-row flex-col w-full md:h-auto h-1/2 justify-center">
          {/* introduction__left */}
          <div className="introduction-words__left relative md:w-1/2 w-full md:h-auto h-1/2 md:pl-[1.1%] md:text-start text-center">
            <div className="introduction-words__left-item">
              {data.introWords.left.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block introduction-one-word "
                  style={{ color: "#000000" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </div>
          {/* introduction__right */}
          <div className="introduction-words__right relative md:w-1/2 w-full md:h-auto h-1/2 md:text-start text-center">
            {data.introWords.right.map((word, outerIdx) => (
              <div
                key={`introWord-${outerIdx}`}
                ref={introTextRefs.current[outerIdx]}
                className="introduction-words__right-item absolute md:left-0 left-1/2 -translate-x-1/2"
              >
                {word.split("").map((char, i) => (
                  <span
                    key={i}
                    className={`inline-block introduction-one-word ${
                      outerIdx === 0 ? "" : "opacity-0"
                    }`}
                    style={{
                      color: outerIdx === 0 ? "#000000" : "#FFFFFF",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* introduction-text */}
      <div className="introduction-text font-[300] opacity-0 absolute md:leading-[clamp(0.4rem,4.7vw,4.4rem)] leading-[clamp(0.4rem,8.5vw,3rem)]  md:text-[clamp(1rem,3.7vw,4rem)] text-[clamp(1rem,7.8vw,2rem)] md:pb-[6%] pb-[3%] bottom-0 left-0 w-auto h-auto ">
        <ResponsiveText data={data.introText} />
      </div>
    </section>
  );
};

export default IntroSection;
