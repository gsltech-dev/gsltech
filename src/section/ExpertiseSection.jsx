import { useState, useEffect, use, useRef } from "react";
import ExpertiseWord from "../components/ExpertiseWord";
import ExpertiseDesc from "../components/ExpertiseDesc";
import useWindowSize from "../hooks/useWindowSize";
import gsap from "gsap";

const ExpertiseSection = ({ data }) => {
  const expertiseRef = useRef();
  const sectionExpertiseRef = useRef();
  const [descTarget, setDescTarget] = useState(-1);
  const [mouseRatio, setMouseRatio] = useState(0);
  const dataLength = data.title.length;
  const windowWidth = useWindowSize();

  const [isExperEnter, setIsExperEnter] = useState(false);
  const defaultVideoPosRef = useRef({ x: 0, y: 0 });
  const mousePosRef = useRef({ x: 0, y: 0 });
  const isOnExper = useRef(false);
  const throttledMove = useRef(null);
  const itemRefs = useRef([]);

  const videoRef = useRef();
  const getVw = (num) => {
    return (window.innerWidth * num) / 100;
  };

  const CURSOR_OFFSET_X = getVw(5);
  const CURSOR_OFFSET_Y = getVw(6);

  //PC에서 호버관련 인식 시작점 & 호버시 비디오 디브 관련 애니매이션 로직
  useEffect(() => {
    //PC 에서만 실행
    if (windowWidth > 768) {
      const el = expertiseRef.current;
      const videoEl = videoRef.current;
      if (!el) return;

      const updateVideoPosition = () => {
        const rect = el.getBoundingClientRect();
        const { x: clientX, y: clientY } = mousePosRef.current;

        // 📌 여기서 다시 계산
        const offsetX = clientX - rect.left;
        const offsetY = clientY - rect.top;

        const ratio = (offsetY / rect.height).toFixed(2);
        setMouseRatio(ratio);

        gsap.to(videoEl, {
          x: offsetX - defaultVideoPosRef.current.x + CURSOR_OFFSET_X,
          y: offsetY - defaultVideoPosRef.current.y - CURSOR_OFFSET_Y,
          duration: 1.8,
          ease: "power2.out",
        });
      };

      const handleMouseMove = (e) => {
        mousePosRef.current = {
          x: e.clientX,
          y: e.clientY,
        };
        updateVideoPosition(); // ← 여기서 계산
      };

      const handleScroll = () => {
        if (!isOnExper.current) return;

        updateVideoPosition();
      };

      //호버 시 기존 비디오 위치 기억 (커서위치 이동하기위한 값 계산)
      const handleEnter = () => {
        isOnExper.current = true;

        const defaultX = videoEl.offsetLeft;
        const defaultY = videoEl.offsetTop;
        defaultVideoPosRef.current = { x: defaultX, y: defaultY };
      };

      //원 위치 복구
      const handleLeave = () => {
        isOnExper.current = false;

        gsap.to(videoEl, {
          x: 0,
          y: 0,
          duration: 1.8,
          ease: "power2.out",
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
      window.addEventListener("scroll", handleScroll);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleLeave);
        el.removeEventListener("mouseenter", handleEnter);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [windowWidth]);

  //진입시 video 스케일, 위치 애니매이션 제어
  useEffect(() => {
    const mm = gsap.matchMedia(); // matchMedia

    mm.add("(min-width: 769px)", () => {
      if (isExperEnter) {
        const el = expertiseRef.current;
        const wrapperEl = el.querySelector(".description-wrapper");
        const videoEl = videoRef.current;

        gsap
          .timeline()
          .set(videoEl, {
            top: 0,
            right: wrapperEl.offsetWidth + getVw(2.5),
            duration: 0,
          })
          .fromTo(
            videoEl,
            {
              opacity: 0,
              scale: 0,
              transformOrigin: "center",
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
            }
          );
      }
    });

    mm.add("(max-width: 768px)", () => {
      if (isExperEnter) {
        const videoEl = videoRef.current;

        gsap
          .timeline()
          .set(videoEl, {
            top: "3%",
            duration: 0,
            left: "50%",
            xPercent: -50, // ← 이게 핵심
          })
          .fromTo(
            videoEl,
            {
              opacity: 0,
              scale: 0,
              transformOrigin: "center",
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
            }
          );
      }
    });

    // 컴포넌트 언마운트 시 해제
    return () => mm.revert();
  }, [isExperEnter]);

  //word, desc Section 관련 진입 변수 제어
  useEffect(() => {
    const ele = sectionExpertiseRef.current;

    const mm = gsap.matchMedia(); // matchMedia

    mm.add("(min-width: 769px)", () => {
      const enterExperPcTl = gsap.timeline({
        scrollTrigger: {
          trigger: ele,
          start: "top+=200 70%",
          end: "bottom 70%",
          // markers: true, // 개발용
          onEnter: () => {
            setIsExperEnter(true);
          },
        },
      });
    });

    mm.add("(max-width: 768px)", () => {
      const enterExperMbTl = gsap.timeline({
        scrollTrigger: {
          trigger: ele,
          start: "top 70%",
          end: "bottom 70%",
          // markers: true, // 개발용
          onEnter: () => {
            setIsExperEnter(true);
          },
        },
      });
    });

    // 컴포넌트 언마운트 시 해제
    return () => mm.revert();
  }, []);

  //word 호버시 비디오 src 변경
  useEffect(() => {
    const videoEl = videoRef.current;
    const targetVideo =
      descTarget === -1 ? data.default_video : data.video[descTarget];
    const currentVideoEl = videoEl.querySelector(".current-video");
    const readyVideoEl = videoEl.querySelector(".ready-video");

    const videoTl = gsap.timeline({
      onStart: () => {
        readyVideoEl.src = targetVideo;
        currentVideoEl.classList.remove("current-video");
        currentVideoEl.classList.add("ready-video");
        readyVideoEl.classList.remove("ready-video");
        readyVideoEl.classList.add("current-video");
      },
    });

    videoTl
      .to(readyVideoEl, { zIndex: 20, duration: 0 })
      .to(currentVideoEl, { zIndex: 10, duration: 0 }, "<")
      .fromTo(
        readyVideoEl,
        { scale: 0.3, transformOrigin: "center" },
        {
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "<"
      );
  }, [descTarget]);

  return (
    <section
      ref={sectionExpertiseRef}
      className=" section-expertise cursor-default md:py-[10vh] pt-[15vh] md:pl-[8.4vw]  md:mt-0 md:mb-0 mb-[35vw] mt-[8vw] md:w-full h-auto "
    >
      <div
        ref={expertiseRef}
        className="expertise md:py-[10vw] flex md:flex-row flex-col w-full h-auto"
      >
        {/* title-wrapper */}
        <div
          className="title-wrapper relative font-[350] md:w-full w-full md:auto h-full flex md:flex-col flex-col  md:justify-start "
          style={{
            fontFamily: "Codec Pro",
            color: "#000000",
          }}
        >
          {/* following-video-wrapper */}
          <div
            ref={videoRef}
            className="following-video-wrappe overflow-hidden md:w-1/5 w-5/11 rounded-3xl aspect-[1/0.7] pointer-events-none opacity-0 absolute z-50"
          >
            <div className="relative w-full h-full">
              <video
                className="following-video rounded-3xl ready-video object-cover absolute w-full h-full"
                autoPlay
                muted
                loop
                playsInline
                src=""
              ></video>
              <video
                className="following-video rounded-3xl current-video object-cover absolute w-full h-full"
                autoPlay
                muted
                loop
                playsInline
                src=""
              ></video>
            </div>
          </div>

          {/* description-wrapper */}
          <div className="description-wrapper md:absolute md:w-1/6 md:min-w-[170px]  w-full h-full md:right-[1vw] md:top-[0]">
            {/* description */}
            <div
              className=" description text-[14px] md:text-[clamp(10px,0.9vw,16px)] font-normal left-0 md:w-full w-full md:h-auto h-[50vw] md:sticky md:top-10 "
              style={{ fontFamily: "Fira Code" }}
            >
              <ExpertiseDesc
                descriptionData={data.description}
                defaultdescriptionData={data.default_description}
                descTarget={descTarget}
                isExperEnter={isExperEnter}
              />
            </div>
          </div>

          {data.title.map((title, outerIdx) => (
            <ExpertiseWord
              key={outerIdx}
              title={title}
              totalIdx={dataLength}
              outerIdx={outerIdx}
              setDescTarget={setDescTarget}
              mouseRatio={mouseRatio}
              isExperEnter={isExperEnter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
