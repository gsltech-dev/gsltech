import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import useWindowSize from "../hooks/useWindowSize";

const PartnersSection = ({ data }) => {
  const windowSize = useWindowSize();
  const partnerRef = useRef();
  const arrowWrapperRef = useRef();
  const arrowUpRef = useRef();
  const arrowDownRef = useRef();
  const arrowWrapperH = useRef();
  const cardWrapper = useRef();
  const cardColor = ["#2e2e2e", "#252525", "#1c1c1c", "#121212"];
  const isAnimating = useRef(false);
  const isMobile = useRef(null);

  const currentCardIdx = useRef(0);

  const lastCardIdx = data.length - 1;
  const disableBtn = useRef();

  useEffect(() => {
    const arrowUp = arrowUpRef.current;
    arrowWrapperH.current = arrowUp.offsetHeight;
    if (windowSize < 768) {
      isMobile.current = true;
    } else {
      isMobile.current = false;
    }
  }, [windowSize]);

  useEffect(() => {
    const el = partnerRef.current;
    const words = el.querySelectorAll(".partner-one-word");
    const card = cardWrapper.current;
    const arrowUp = arrowUpRef.current;
    const arrowDown = arrowDownRef.current;
    const partnerTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        end: "bottom 70%",
        // markers: true,
      },
    });

    partnerTl
      .fromTo(
        el,
        { scale: 0.3, rotateZ: -30, transformOrigin: "center" },
        {
          scale: 1,
          autoAlpha: 1,
          rotateZ: 0,
          duration: 0.8,
          ease: "power2.out",
          immediateRender: false,
        }
      )
      .fromTo(
        words,
        { scale: 0.3, autoAlpha: 0, transformOrigin: "end" },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.7"
      )
      .fromTo(
        arrowUp,
        { scale: 0.3, autoAlpha: 0, transformOrigin: "center" },
        {
          scale: 0.75,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .fromTo(
        arrowDown,
        { scale: 0.3, autoAlpha: 0, transformOrigin: "center" },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.9"
      )
      .fromTo(
        card,
        { scale: 0.3, autoAlpha: 0, rotateZ: -20, transformOrigin: "center" },
        {
          scale: 1,
          rotateZ: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.9"
      );
    changeBtnState(0, 0); //초기 위로가기 화살표 비활성화
  }, []);

  const moveCard = (isUp) => {
    const el = cardWrapper.current;
    const first = el.querySelector(".first");
    const second = el.querySelector(".second");
    const third = el.querySelector(".third");
    const fourth = el.querySelector(".fourth");

    const gap = isMobile.current ? 5 : 2.6;

    if (isUp) {
      const upTl = gsap.timeline({
        onComplete: () => {
          fourth.remove();
          first.classList.remove("first");
          second.classList.remove("second");
          third.classList.remove("third");
          first.classList.add("second");
          second.classList.add("third");
          third.classList.add("fourth");

          const newDiv = document.createElement("div");
          newDiv.className =
            "first  md:px-[10%] md:pt-[7%] md:pb-[3%] px-[10%] pt-[10%] pb-[5%] flex-col flex items-center md:h-5/8 h-5/8 bg-[#2e2e2e] w-full absolute rounded-lg z-50 md:top-[0vw] top-[0vw] ";

          newDiv.innerHTML = `
           <div style="font-family: 'Fira Code'" class="w-full text-white md:text-[0.9vw] text-[2.2vw]">
    ${currentCardIdx.current + 1}/${lastCardIdx + 1}
  </div>
  <div class="partner-name w-full h-1/10 md:pt-[0.6vw] md:mt-[1vw] pt-[5vw] flex items-center justify-center text-white font-normal md:text-[3vw] text-[5vw]">
    ${data[currentCardIdx.current].name}
  </div>
  <div onclick="window.open('${data[currentCardIdx.current].link}', '_blank')"
       class="partner-img relative overflow-hidden cursor-pointer md:mt-[1.5vw] mt-[5vw] rounded-xl w-full aspect-16/9 flex">
    <div class="img-wrapper absolute w-full h-full bg-black opacity-0 hover:opacity-60 transition-all duration-[300ms] ease-in-out flex items-center justify-center">
      <p class="z-60 text-white md:text-[2vw] text-[4vw] font-light">
        홈페이지 이동
      </p>
    </div>
    <img
      loading="lazy"
      class="w-full h-full object-cover object-center"
      src="${data[currentCardIdx.current].img}"
      alt=""
    />
  </div>
          `;

          el.insertBefore(newDiv, el.firstChild);

          gsap.fromTo(
            newDiv,
            { opacity: 0, y: "-=5vw" },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              onComplete: () => {
                isAnimating.current = false;
              },
            }
          );
        },
      });

      upTl
        .to(
          first,
          {
            y: `+=${gap}vw`,
            backgroundColor: cardColor[1],
            duration: 0.4,
            zIndex: 40,
          },
          "<"
        )
        .to(
          second,
          {
            y: `+=${gap}vw`,
            backgroundColor: cardColor[2],
            duration: 0.4,
            zIndex: 30,
          },
          "<"
        )
        .to(
          third,
          {
            y: `+=${gap}vw`,
            backgroundColor: cardColor[3],
            duration: 0.4,
            zIndex: 20,
          },
          "<"
        )
        .to(
          fourth,
          {
            y: `+=${gap}vw`,
            opacity: 0,
            duration: 0.4,
          },
          "<"
        );
    } else {
      const downTl = gsap.timeline({
        onStart: () => {
          second.innerHTML = `
               <div style="font-family: 'Fira Code'" class="w-full text-white md:text-[0.9vw] text-[2.2vw]">
    ${currentCardIdx.current + 1}/${lastCardIdx + 1}
  </div>
  <div class="partner-name w-full h-1/10 md:pt-[0.6vw] md:mt-[1vw] pt-[5vw] flex items-center justify-center text-white font-normal md:text-[3vw] text-[5vw]">
    ${data[currentCardIdx.current].name}
  </div>
  <div onclick="window.open('${data[currentCardIdx.current].link}', '_blank')"
       class="partner-img relative overflow-hidden cursor-pointer md:mt-[1.5vw] mt-[5vw] rounded-xl w-full aspect-16/9 flex">
    <div class="img-wrapper absolute w-full h-full bg-black opacity-0 hover:opacity-60 transition-all duration-[300ms] ease-in-out flex items-center justify-center">
      <p class="z-60 text-white md:text-[2vw] text-[4vw] font-light">
        홈페이지 이동
      </p>
    </div>
    <img
      loading="lazy"
      class="w-full h-full object-cover object-center"
      src="${data[currentCardIdx.current].img}"
      alt=""
    />
  </div>
          `;
        },
        onComplete: () => {
          first.remove(); // 맨 위 카드 제거

          second.classList.remove("second");
          third.classList.remove("third");
          fourth.classList.remove("fourth");

          second.classList.add("first");
          third.classList.add("second");
          fourth.classList.add("third");

          const newDiv = document.createElement("div");
          newDiv.className = `fourth md:px-[10%] md:pt-[7%] md:pb-[3%] px-[10%] pt-[10%] pb-[5%] flex-col flex items-center md:h-5/8 h-3/8 bg-[#121212] w-full absolute rounded-lg z-20  md:top-[8.1vw] top-[15vw]`;
          el.appendChild(newDiv); // 마지막 자식으로 추가

          gsap.fromTo(
            newDiv,
            { opacity: 0, y: "+=5vw" },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              onComplete: () => {
                isAnimating.current = false;
              },
            }
          );
        },
      });
      downTl
        .to(
          first,
          {
            y: "-=15vw",
            opacity: 0,
            duration: 0.4,
          },
          "<"
        )
        .to(
          second,
          {
            y: `-=${gap}vw`,
            backgroundColor: cardColor[0],
            duration: 0.4,
            zIndex: 50,
          },
          "<"
        )
        .to(
          third,
          {
            y: `-=${gap}vw`,
            backgroundColor: cardColor[1],
            duration: 0.4,
            zIndex: 40,
          },
          "<"
        )
        .to(
          fourth,
          {
            y: `-=${gap}vw`,
            backgroundColor: cardColor[2],
            duration: 0.4,
            zIndex: 30,
          },
          "<"
        );
    }
  };

  const clickArrow = (isUp) => {
    if (isAnimating.current) return null;
    isAnimating.current = true;
    if (isUp) {
      if (currentCardIdx.current === 0) {
        // 더 올릴수 없는 경우
        isAnimating.current = false;
        return null;
      }
      if (currentCardIdx.current - 1 === 0) {
        //맨 처음 카드로 올린 경우 up 버튼 비활성화
        changeBtnState(0, 0);
      }
      if (currentCardIdx.current === lastCardIdx) {
        //맨 마지막에서 위로 올린경우 up버튼 활성화
        changeBtnState(1, 1);
      }
    } else {
      if (currentCardIdx.current === lastCardIdx) {
        // 더 내릴 수 없는 경우
        isAnimating.current = false;
        return null;
      }
      if (currentCardIdx.current === 0) {
        //맨 처음에서 아래로 내링경우 up버튼 활성화
        changeBtnState(0, 1);
      }
      if (currentCardIdx.current + 1 === lastCardIdx) {
        //마지막 카드로 내린경우 down 버튼 비활성화
        changeBtnState(1, 0);
      }
    }

    currentCardIdx.current = currentCardIdx.current + (isUp ? -1 : 1);
    moveCard(isUp);
  };

  const changeBtnState = (btn, to) => {
    // btn => 0:up / 1: down
    // to => 0:disable / 1:able
    const el = btn ? arrowDownRef.current : arrowUpRef.current;

    gsap.to(el, {
      scale: to ? 1 : 0.75,
      backgroundColor: to ? "#FFFFFF" : "#B0B0B0",
      duration: 0.4,
    });

    if (to) {
      el.classList.add("cursor-pointer");
    } else {
      el.classList.remove("cursor-pointer");
    }
    to ? (disableBtn.current = null) : (disableBtn.current = btn);
  };

  const mouseEnter = (isUp) => {
    if (disableBtn.current === (isUp ? 0 : 1)) return null;

    const el = isUp ? arrowUpRef.current : arrowDownRef.current;
    const arrowFirst = el.querySelector(".arrow-first");
    const arrowSecond = el.querySelector(".arrow-second");
    const y = arrowWrapperH.current;

    gsap
      .timeline()
      .fromTo(
        arrowFirst,
        { y: 0 },
        { y: isUp === true ? -y : y, duration: 0.6 },
        "<"
      )
      .fromTo(
        arrowSecond,
        { y: isUp === true ? y : -y },
        { y: 0, duration: 0.6 },
        "<"
      )
      .to(el, { scale: 0.85, duration: 0.4 }, "<");
  };

  const mouseLeave = (isUp) => {
    if (disableBtn.current === (isUp ? 0 : 1)) return null;

    gsap.to(isUp ? arrowUpRef.current : arrowDownRef.current, {
      scale: 1,
      duration: 0.4,
    });
  };

  return (
    <section
      ref={partnerRef}
      className="section-partner opacity-0 w-[100vw] relative left-1/2 -translate-x-1/2 md:w-full aspect-[1/1.7] md:aspect-[1/0.725] bg-[#191919]  md:rounded-xl rounded-2xl "
    >
      <div className="w-full h-full pt-[20vw] px-[8%] md:pt-[14vw] md:px-[8%] flex flex-col md:flex-row ">
        {/* partner-left */}
        <div className="partner-left flex md:w-2/5 md:flex-col md:h-full pb-[15vw] md:pb-0">
          {/* partner-left-title */}
          <div className="partner-left-title md:w-auto w-4/7">
            <div className="w-full partner-one-word font-normal  text-white md:text-[4vw] md:leading-[4.2vw]  text-[8.2vw] leading-[8.4vw] ">
              Partners
            </div>
            <div className="w-full partner-one-word font-normal text-white md:text-[4vw] md:leading-[4.2vw]  text-[8.2vw] leading-[8.4vw] ">
              who share
            </div>
            <div className="w-full partner-one-word font-normal text-white md:text-[4vw] md:leading-[4.2vw]  text-[8.2vw] leading-[8.4vw] ">
              our vision
            </div>
          </div>
          {/* arrow-wrapper */}
          <div
            ref={arrowWrapperRef}
            className="arrow-wrapper flex md:items-start md:justify-start  items-end justify-end md:w-full w-3/7 md:h-[6vw] md:mt-[3vw]"
          >
            {/* arrow-up-wrapper */}
            <div className="md:h-full h-3/7  arrow-up-wrapper aspect-square  flex justify-center items-center">
              {/* arrow-up */}
              <div
                onMouseEnter={() => {
                  mouseEnter(true);
                }}
                onMouseLeave={() => {
                  mouseLeave(true);
                }}
                onClick={() => {
                  clickArrow(true);
                }}
                ref={arrowUpRef}
                className="arrow-up overflow-hidden cursor-pointer flex justify-center items-center relative md:w-4/5 w-9/10 aspect-square bg-white rounded-full"
              >
                {/* arrow-up-first */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="arrow-first md:w-1/4 w-1/3  absolute"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>

                {/* arrow-up-second */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="arrow-second md:w-1/4 w-1/3  absolute"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              </div>
            </div>
            {/* arrow-down-wrapper */}
            <div className="md:h-full h-3/7  aspect-square  flex justify-center items-center">
              {/* arrow-down */}
              <div
                onMouseEnter={() => {
                  mouseEnter(false);
                }}
                onMouseLeave={() => {
                  mouseLeave(false);
                }}
                onClick={() => {
                  clickArrow(false);
                }}
                ref={arrowDownRef}
                className="arrow-down overflow-hidden cursor-pointer flex justify-center items-center relative md:w-4/5 w-9/10 aspect-square bg-white rounded-full"
              >
                {/* arrow-down-first */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="arrow-first absolute md:w-1/4 w-1/3 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
                {/* arrow-down-second */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="arrow-second absolute md:w-1/4 w-1/3 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* partner-right */}
        <div
          ref={cardWrapper}
          className="partner-right md:px-[0.6vw] flex w-full h-full md:w-3/5 md:h-full relative md:justify-center "
        >
          <div className="first md:px-[10%] md:pt-[7%] md:pb-[3%] px-[10%] pt-[10%] pb-[5%] flex-col flex items-center md:h-5/8 h-5/8 bg-[#2e2e2e] w-full absolute rounded-lg z-50 md:top-[0vw] top-[0vw]  ">
            <div
              style={{ fontFamily: "Fira Code" }}
              className="w-full text-white md:text-[0.9vw]  text-[2.2vw]"
            >
              1/{lastCardIdx + 1}
            </div>
            <div className="partner-name w-full h-1/10 md:pt-[0.6vw] md:mt-[1vw] pt-[5vw] flex items-center justify-center text-white font-normal md:text-[3vw] text-[5vw]">
              {data[0].name}
            </div>
            <div
              onClick={() => {
                window.open(data[0].link, "_blank");
              }}
              className="partner-img relative  overflow-hidden cursor-pointer md:mt-[1.5vw] mt-[5vw] rounded-xl w-full aspect-16/9  bg-amber-100 flex"
            >
              <div className="img-wrapper absolute w-full h-full bg-black opacity-0 hover:opacity-60 transition-all duration-[300ms] ease-in-out flex items-center justify-center">
                <p className="z-60 text-white md:text-[2vw] text-[4vw] font-light">
                  홈페이지 이동
                </p>
              </div>
              <img
                loading="lazy"
                className="w-full h-full object-cover object-center"
                src={data[0].img}
                alt=""
              />
            </div>
          </div>
          <div className="second md:px-[10%] md:py-[7%] px-[10%] py-[10%] flex-col flex items-center md:h-5/8 h-5/8 bg-[#252525] w-full absolute rounded-lg z-40 md:top-[2.7vw] top-[5vw] "></div>
          <div className="third md:px-[10%] md:py-[7%] px-[10%] py-[10%] flex-col flex items-center md:h-5/8 h-5/8 bg-[#1c1c1c] w-full absolute rounded-lg z-30 md:top-[5.4vw] top-[10vw] "></div>
          <div className="fourth md:px-[10%] md:py-[7%] px-[10%] py-[10%] flex-col flex items-center md:h-5/8 h-5/8 bg-[#121212] w-full absolute rounded-lg z-20 md:top-[8.1vw] top-[15vw] "></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
