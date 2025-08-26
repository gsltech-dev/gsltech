import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import HistoryItem from "../components/HistoryItem";

import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("softBurst", "M0,0 C0.5,0.05,0.5,1,1,1");

const HistorySection = ({
  data,
  //  modalState
}) => {
  //모달 제어

  // const { setIsModalOpen, setModalId, setSection } = modalState;
  // const handleClick = (id) => {
  //   setModalId(id);
  //   setIsModalOpen(true);
  //   setSection("history");
  // };
  const btnRef = useRef();
  const [clickMore, setClickMore] = useState(false);
  const dataCount = data.length;
  let fourData = null;
  let lastData = null;
  if (dataCount > 4) {
    fourData = data.slice(0, 4);
    lastData = data.slice(4, dataCount);
  } else {
    fourData = data;
  }

  useEffect(() => {
    const btnEl = btnRef.current;
    const btnHoverCover = btnEl.querySelector(".hover-background");
    const btnText = btnEl.querySelector(".btn-text");

    const onEnter = () => {
      gsap
        .timeline()
        .fromTo(
          btnHoverCover,
          {
            scaleY: 0,
            transformOrigin: "bottom",
          },
          {
            scaleY: 1,
            duration: 0.2,
            ease: "softBurst",
          }
        )
        .to(btnHoverCover, { opacity: 1 }, "<")
        .to(btnText, { color: "#FFFFFF", duration: 0.2 }, "<");
    };

    const onLeave = () => {
      gsap
        .timeline()
        .fromTo(
          btnHoverCover,
          {
            scaleY: 1,
            transformOrigin: "bottom",
          },
          {
            scaleY: 0,
            duration: 0.2,
            ease: "softBurst",
          }
        )
        .to(btnText, { color: "#000000", duration: 0.2 }, "<");
    };

    const mm = gsap.matchMedia(); // matchMedia

    mm.add("(min-width: 768px)", () => {
      btnEl.addEventListener("mouseenter", onEnter);
      btnEl.addEventListener("mouseleave", onLeave);

      return () => {
        btnEl.removeEventListener("mouseenter", onEnter);
        btnEl.removeEventListener("mouseleave", onLeave);
      };
    });

    mm.add("(max-width: 767px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: btnEl,
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
      });
    });
    return () => {
      mm.revert(); // cleanup matchMedia 리스너
    };
  }, []);

  const itemRefs = useRef([]);
  const [isReady, setIsReady] = useState(false);
  const historySectionRef = useRef();
  useEffect(() => {
    if (itemRefs.current.length < 3) return;
    const items = itemRefs.current;
    items.push(btnRef.current);
    const historyEl = historySectionRef.current;
    const historyTl = gsap.timeline({
      scrollTrigger: {
        trigger: historyEl,
        start: "top 70%",
        end: "bottom 70%",
        // markers: true,
      },
    });
    historyTl.fromTo(
      items,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.2 }
    );
  }, [isReady]);

  return (
    <section
      ref={historySectionRef}
      className=" w-full h-auto section-history pt-[15vw]"
    >
      <div className="md:text-[3.5vw] text-[6.5vw] font-normal md:mb-[3vw] mb-[3vw]">
        Our Journey
      </div>
      <div className="flex flex-col items-center justify-start md:gap-[0.8vw] gap-[2.5vw]">
        {fourData.map((info, i) => (
          <HistoryItem
            setRef={(el) => {
              itemRefs.current[i] = el;
            }}
            // handleClick={handleClick}
            historyInfo={info}
            key={`history-${i}`}
            idx={i}
            setIsReady={setIsReady}
          />
        ))}
        {clickMore ? (
          lastData.map((info, i) => (
            <HistoryItem
              // handleClick={handleClick}
              historyInfo={info}
              key={`history-${i + 3}`}
              idx={i + 4}
              more={true}
              isLast={lastData.length - 1 === i ? true : false}
            />
          ))
        ) : (
          <button
            ref={btnRef}
            className="moreBtn w-full h-auto overflow-hidden relative py-[2.4vw] md:py-[1vw] hover:cursor-pointer align-middle text-[3.2vw] font-[350] md:font-[350] md:text-[1.1vw] lg:text-[1vw] md:min-w-[130px] flex justify-center items-center  lg:rounded-2xl md:rounded-lg rounded-md bg-white "
            onClick={() => {
              setClickMore(true);
            }}
          >
            <p className="btn-text z-20">More Projects</p>
            <div className="hover-background absolute opacity-0 bg-[#161616] left-0 bottom-0 w-full h-full"></div>
          </button>
        )}
      </div>
    </section>
  );
};

export default HistorySection;
