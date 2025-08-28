import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../context/LenisContext";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(CustomEase);
CustomEase.create("softBurst", "M0,0 C0.5,0.05,0.5,1,1,1");

const HistoryItem = ({
  historyInfo,
  idx,
  more = false,
  isLast,
  handleClick,
  setRef,
  setIsReady,
}) => {
  const historyRef = useRef();
  const lenis = useLenis();
  const { year, title, mainImage, hoverImage } = historyInfo;

  useEffect(() => {
    ("render완료");
    requestAnimationFrame(() => {
      const el = historyRef.current;

      if (!more) {
        setRef(el);
        if (idx === 3) {
          setIsReady(true);
        }
      }
      const texts = el.querySelectorAll(".history-text");
      const hoverBackground = el.querySelector(".hover-background");

      const onEnter = () => {
        gsap
          .timeline()
          .fromTo(
            hoverBackground,
            {
              transformOrigin: "bottom",
              scaleY: 0,
            },
            { scaleY: 1, duration: 0.2, ease: "softBurst" }
          )
          .to(hoverBackground, { opacity: 1 }, "<")
          .to(
            texts,
            {
              color: "#FFFFFF",
              duration: 0.4,
            },
            "<"
          );
      };

      const onLeave = () => {
        gsap
          .timeline()
          .fromTo(
            hoverBackground,
            {
              transformOrigin: "bottom",
              scaleY: 1,
            },
            { scaleY: 0, duration: 0.2, ease: "softBurst" }
          )
          .to(
            texts,
            {
              color: "#000000",
              duration: 0.4,
            },
            "<"
          );
      };

      const mm = gsap.matchMedia(); // matchMedia

      if (more === true) {
        const createTl = gsap.timeline({
          onComplete: () => {
            if (isLast) {
              ScrollTrigger.refresh(); // 트리거 DOM 기준 재인식
              lenis.resize(); // lenis total height 재인식
            }
          },
        });
        createTl.fromTo(
          el,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, delay: (idx - 3) * 0.2 }
        );
      }

      //PC
      mm.add("(min-width: 768px)", () => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);

        return () => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        };
      });

      //MOBILE
      mm.add("(max-width: 767px)", () => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 70%",
          end: "bottom 70%",
          // markers: true,
          onEnter: onEnter,
          onLeave: onLeave,
          onEnterBack: onEnter,
          onLeaveBack: onLeave,
        });
      });

      return () => {
        mm.revert();
      };
    });
  }, []);

  return (
    <div
      key={`history${idx}`}
      ref={historyRef}
      className="history-item relative flex justify-center md:justify-end md:pr-[3vw] items-center w-full md:aspect-[1/0.073] overflow-hidden aspect-[1/0.17] lg:rounded-2xl md:rounded-lg rounded-md"
      onClick={() => {
        handleClick(idx);
      }}
    >
      <div className="hover-background absolute opacity-0 bg-[#161616] left-0 bottom-0 w-full h-full"></div>
      <div className="history-content items-center flex h-auto w-5/7 md:w-1/3">
        {/* year */}
        <div className="flex h-full history-text align-middle w-1/4 text-[2.8vw]  lg:font-light font-light md:text-[0.9vw]  justify-center items-center year-title z-20">
          {year}
        </div>
        {/* title */}
        <div className="flex h-full history-text align-middle text-[3.6vw] min-w-[80px] w-3/4 font-[350] md:font-[350] md:text-[1.4vw] md:min-w-1/4 md:pl-[1%] items-center history-title z-20">
          {title}
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
