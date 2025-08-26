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

      //디자인 팀 요청으로 인한 이미지, 애로우 애니매이션 삭제로 인한 el 요소 지정 주석 처리
      // const mainImage = el.querySelector(".main-image");
      // const btnGo = el.querySelector(".btn-go");
      // const fisrtArrow = el.querySelector(".history-arrow-fisrt");
      // const secondArrow = el.querySelector(".history-arrow-second");
      // const hoverImage1 = el.querySelector(".hover-image-1");
      // const hoverImage2 = el.querySelector(".hover-image-2");
      // const getBtnGoWidth = () => {
      //   return btnGo.offsetWidth;
      // };
      // const getMainImageWidth = () => {
      //   return mainImage.offsetWidth;
      // };

      // const getVh = (num = 1) => {
      //   return (window.innerWidth / 100) * num;
      // };

      // // arrow 이동기
      // const moveArrow = (arrow, from, to) => {
      //   gsap.fromTo(
      //     arrow,
      //     { x: from },
      //     {
      //       x: to,
      //       duration: 0.2,
      //     }
      //   );
      // };

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

        //arrow 애니매이션
        // let w = getBtnGoWidth();
        // moveArrow(fisrtArrow, -w, 0);
        // moveArrow(secondArrow, 0, w);

        // 이미지 애니매이션
        // let imageW = getMainImageWidth();
        // let imageGapW = getVh(0.6);

        // gsap
        //   .timeline()
        //   .fromTo(
        //     hoverImage1,
        //     { rotateZ: 10 },
        //     {
        //       rotateZ: 0,
        //       x: -1 * (imageW * 1 + imageGapW * 1),
        //       duration: 0.3,
        //     }
        //   )
        //   .fromTo(
        //     hoverImage1,
        //     {
        //       opacity: 0,
        //     },
        //     {
        //       opacity: 1,
        //       duration: 0.1,
        //     },
        //     "<"
        //   )
        //   .fromTo(
        //     hoverImage2,
        //     { rotateZ: 10 },
        //     {
        //       rotateZ: 0,
        //       x: -1 * (imageW * 2 + imageGapW * 2),
        //       duration: 0.3,
        //     },
        //     "<"
        //   )
        //   .fromTo(
        //     hoverImage2,
        //     {
        //       opacity: 0,
        //     },
        //     {
        //       opacity: 1,
        //       duration: 0.1,
        //     },
        //     "<"
        //   );
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

        //arrow 애니매이션
        // let w = getBtnGoWidth();
        // moveArrow(fisrtArrow, 0, -w);
        // moveArrow(secondArrow, w, 0);

        //이미지 애니매이션
        // gsap
        //   .timeline()
        //   .to(hoverImage1, { x: 0, duration: 0.3, rotateZ: 10 })
        //   .to(
        //     hoverImage1,
        //     {
        //       opacity: 0,
        //       duration: 0.4,
        //     },
        //     "<"
        //   )
        //   .to(hoverImage2, { x: 0, duration: 0.3, rotateZ: 10 }, "<")
        //   .to(
        //     hoverImage2,
        //     {
        //       opacity: 0,
        //       duration: 0.3,
        //     },
        //     "<"
        //   );
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
      className="history-item relative flex justify-end pr-[3vw] items-center w-full md:aspect-[1/0.073] overflow-hidden aspect-[1/0.17] lg:rounded-2xl md:rounded-lg rounded-md"
      onClick={() => {
        handleClick(idx);
      }}
    >
      <div className="hover-background absolute opacity-0 bg-[#161616] left-0 bottom-0 w-full h-full"></div>
      {/* year */}
      <div className="flex h-full history-text align-middle w-1/5 text-[2.8vw] md:w-1/10  lg:font-light font-light md:text-[0.9vw]  justify-center items-center year-title z-20">
        {year}
      </div>
      {/* title */}
      <div className="flex h-full history-text align-middle text-[3.6vw] min-w-[80px] font-[350] md:font-[350] md:text-[1.4vw] md:min-w-1/4 md:pl-[1%]  w-auto items-center history-title z-20">
        {title}
      </div>
      {/* images */}
      {/* <div className="flex relative h-full grow-1 items-center justify-end mr-[0.5%] history-img z-20">
        <div className="history-img-wrapper absolute hover-image-1 md:flex hidden items-center lg:rounded-2xl md:rounded-lg h-2/3 md:h-5/7 rounded-md overflow-hidden   w-3/7  md:w-1/9">
          <img
            src={hoverImage[0]}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="history-img-wrapper absolute hover-image-2 md:flex hidden items-center lg:rounded-2xl md:rounded-lg  h-2/3 md:h-5/7 rounded-md overflow-hidden  w-3/7  md:w-1/9">
          <img
            src={hoverImage[1]}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="history-img-wrapper main-image z-20 flex items-center lg:rounded-2xl md:rounded-lg  h-2/3 md:h-5/7 rounded-md overflow-hidden  w-[15vw]  md:w-1/9">
          <img
            src={mainImage}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div> */}
      {/* btn */}
      {/* <div className="flex h-full w-2/11 md:w-1/12 justify-center items-center history-btn z-20">
        <div className="btn-go flex w-6/11 md:w-6/11 aspect-square items-center relative overflow-hidden justify-center bg-[#FFFFFF] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="history-arrow-fisrt text-black absolute left-auto top-auto w-[30%] aspect-square"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="history-arrow-second text-black absolute left-auto top-auto w-[30%] aspect-square"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div> */}
    </div>
  );
};

export default HistoryItem;
