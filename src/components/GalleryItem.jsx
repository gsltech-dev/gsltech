import { useEffect, useRef } from "react";
import gsap from "gsap";

const GalleryItem = ({ triggerRef, info, galleryId, handleClick }) => {
  const itemRef = useRef();

  useEffect(() => {
    const el = itemRef.current;
    const el_trigger = triggerRef;
    const video = el.querySelector("video");
    const subButtons = el.querySelectorAll(".overlay-sub-btn");
    const arrowWhite = el.querySelector(".arrow-white");
    const arrowBlack = el.querySelector(".arrow-black");
    const btnGo = el.querySelector(".btn-go");

    const getBtnGoWidth = () => {
      return btnGo.offsetWidth;
    };

    //sub btn text 애니매이션 작동기
    const spanUp = (subButton) => {
      const spans = subButton.querySelectorAll(".sub-one-text");
      const spanBox = subButton.querySelectorAll(".sub-total-text");
      const totalTime = 0.5;
      const c = spans.length;
      const value = totalTime / c;

      gsap.fromTo(
        spanBox,
        { y: 30 },
        {
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        spans,
        { opacity: 0 },
        {
          opacity: 1,
          duration: value,
          stagger: value,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    };

    //arrow 이동기
    const moveArrow = (arrow, from, to) => {
      gsap.fromTo(
        arrow,
        { x: from },
        {
          x: to,
          duration: 0.3,
        }
      );
    };

    //호버 시
    const onEnter = () => {
      //비디오 생성
      gsap.to(video, { opacity: 1, duration: 0.5 });

      //sub-btn 생성
      gsap.fromTo(
        subButtons,
        {
          opacity: 0,
          scaleY: 0,
          transformOrigin: "bottom", // 아래에서 위로 펼쳐짐
        },
        {
          opacity: 1,
          scaleY: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );

      //sub-button text 생성
      subButtons.forEach((e) => {
        spanUp(e);
      });

      //이동 버튼 배경 변경
      gsap.to(btnGo, {
        backgroundColor: "#000000",
        duration: 0.3,
      });

      //이동 화살표 이동
      let w = getBtnGoWidth();
      moveArrow(arrowWhite, -w, 0);
      moveArrow(arrowBlack, 0, w);

      //비디오 시작
      video.play();
    };

    //호버 아웃 시
    const onLeave = () => {
      gsap.to(video, { opacity: 0, duration: 0.5 });
      gsap.to(subButtons, {
        scaleY: 0,
        duration: 0.5,
        ease: "power3.out",
        transformOrigin: "bottom", // 아래에서 위로 펼쳐짐
      });

      //이동 버튼 배경 변경
      gsap.to(btnGo, {
        backgroundColor: "#efefef",
        duration: 0.3,
      });

      //이동 화살표 이동
      let w = getBtnGoWidth();
      moveArrow(arrowWhite, 0, -w);
      moveArrow(arrowBlack, w, 0);

      //비디오 중지
      video.pause();
      // video.currentTime = 0;
    };

    const mm = gsap.matchMedia(); // matchMedia

    //갤러리 아이템 스크롤 다운 중 회전 및 확장 애니매이션
    //PC
    mm.add("(min-width: 768px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el_trigger,
            start: "top 70%",
            end: "top 70%",
            // markers: true,
          },
        })
        .fromTo(
          el,
          { scale: 0.5, rotateZ: -15 },
          {
            scale: 1,
            rotateZ: 0,
            duration: 0.7,
            ease: "power3.out",
          }
        )
        .fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "<"); // 동시에 실행하려면 "<"

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);

      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      };
    });

    //Mobile
    mm.add("(max-width: 767px)", () => {
      // const tweentyVh = window.innerHeight * 0.2;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el_trigger,
            start: `top 70%`,
            end: `bottom 70%`,
            // markers: true,
            onEnter: () => {
              onEnter(); // 스크롤 아래에서 위로 들어왔을 때
            },
            onLeave: () => {
              onLeave(); // 아래로 나갈 때
            },
            onEnterBack: () => {
              onEnter(); // 위에서 다시 들어올 때
            },
            onLeaveBack: () => {
              onLeave(); // 위로 나갈 때
            },
          },
        })
        .fromTo(
          el,
          { scale: 0.5, rotateZ: -15 },
          {
            scale: 1,
            rotateZ: 0,
            duration: 0.7,
            ease: "power3.out",
          }
        )
        .fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "<");
    });

    return () => {
      mm.revert(); // cleanup matchMedia 리스너
    };
  }, [triggerRef]);

  return (
    <div
      id={`gallery-${galleryId}`}
      ref={itemRef}
      className="gallery-item bg-violet-200 relative w-full h-full overflow-hidden lg:rounded-xl rounded-lg hover:cursor-pointer"
      onClick={() => {
        handleClick(galleryId);
      }}
    >
      <img
        src={info.image}
        className="w-full h-full object-cover opacity-100 absolute left-0 top-0 z-10"
        alt=""
        loading="lazy"
      />
      <video
        src={info.video}
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-0 left-0 top-0 pointer-events-none z-20"
      />
      {/* btn-place */}
      <div className="btn-place absolute flex flex-col justify-end left-0 bottom-0 w-auto h-auto lg:pb-[1.1vh] lg:pl-[1.1vh] md:pb-[0.9vh] md:pl-[0.9vh] pb-[0.9vh] pl-[0.9vh]  z-40">
        {/* overlay-sub-btn */}
        {info.sub.map((sub, i) => (
          <div key={i} className="overlay-sub-btn w-auto h-auto opacity-0 z-30">
            <button className="bg-black text-white lg:mb-[1.1vh] md:mb-[0.9vh] mb-[0.9vh] flex justify-center items-center md:px-[1.5vw] md:py-[0.8vw] md:text-[1vw] px-[clamp(12px,4vw,1.3rem)] py-[clamp(8px,2.5vw,0.8rem)] text-[clamp(0.1rem,3.2vw,0.9rem)] font-light w-auto h-auto lg:rounded-lg rounded-md cursor-pointer ">
              <div className="w-auto h-auto sub-total-text flex items-center">
                {sub.split("").map((t, i) => (
                  <p key={i} className="sub-one-text inline-block ">
                    {t}
                  </p>
                ))}
              </div>
            </button>
          </div>
        ))}

        {/* overlay-main-btn */}
        <div className="overlay-main-btn w-auto h-auto opacity-100 z-30">
          <button className="bg-white text-black flex justify-center items-center  leading-0 md:pl-[1.5vw] md:pr-[0.7vw] md:py-[0.7vw] md:text-[1.3vw]   py-[clamp(1px,3.8vw,0.7rem)] pl-[clamp(8px,3vw,1.4rem)] pr-[clamp(8px,3vw,0.9rem)]  text-[clamp(0.1rem,3.6vw,1.2rem)] md:font-[350] font-normal w-auto h-auto lg:rounded-lg rounded-lg shadow cursor-pointer">
            {info.title}
            <div className="btn-go flex items-center relative overflow-hidden justify-center bg-[#efefef] ml-[clamp(0rem,2.4vw,100rem)] md:ml-[clamp(0rem,0.9vw,100rem)]  md:w-[2.7vw] w-[7.3vw] max-w-[2.5rem] aspect-square rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="arrow-black absolute left-auto top-auto w-[45%] aspect-square"
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
                className="arrow-white text-white absolute left-auto top-auto w-[45%] aspect-square"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
