import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const ExpertiseWord = ({
  title,
  outerIdx,
  setDescTarget,
  totalIdx,
  mouseRatio,
  isExperEnter,
}) => {
  const expertiseRowRef = useRef();
  const windowWidth = useWindowSize();
  const [motionMeta, setMotionMeta] = useState(null);

  //색션 진입 관리 애니매이션
  useEffect(() => {
    if (isExperEnter) {
      const mm = gsap.matchMedia(); // matchMedia

      const el = expertiseRowRef.current;
      const spans = el.querySelectorAll("span");

      mm.add("(min-width: 769px)", () => {
        gsap
          .timeline()
          .fromTo(
            el,
            { y: 120 },
            {
              y: 0,
              duration: 1,
              delay: outerIdx * 0.2 + 0.1,
              ease: "power2.out",
            }
          )
          .fromTo(
            spans,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, stagger: 0.02 },
            "<"
          );
      });

      mm.add("(max-width: 768px)", () => {
        gsap
          .timeline()
          .fromTo(
            el,
            { y: 120 },
            {
              y: 0,
              duration: 1,
              delay: outerIdx * 0.2 + 0.1,
              ease: "power2.out",
            }
          )
          .fromTo(
            spans,
            { opacity: 0 },
            { opacity: 1, duration: 0.8, stagger: 0.02 },
            "<"
          );
      });

      // 컴포넌트 언마운트 시 해제
      return () => mm.revert();
    }
  }, [isExperEnter]);

  //마우스 위치 기반 word 애니매이션을 위한 변수제어 (화면 비율 인식)
  useEffect(() => {
    if (windowWidth > 787) {
      const el = expertiseRowRef.current;
      if (!el) return;

      const elHeightVh = (el.offsetHeight / window.innerHeight) * 100;
      const tenVwInVh = (window.innerWidth * 10) / window.innerHeight;

      const center =
        (tenVwInVh + (elHeightVh / 2) * (outerIdx * 2 + 1)) /
        (2 * tenVwInVh + totalIdx * elHeightVh);

      const halfIntervalRatio =
        (elHeightVh + (tenVwInVh / 3) * 2) /
        (2 * tenVwInVh + totalIdx * elHeightVh) /
        2;

      setMotionMeta({
        rangeStart: center - halfIntervalRatio,
        rangeEnd: center + halfIntervalRatio,
        moveX: window.innerWidth * 0.15,
        halfInterval: halfIntervalRatio,
      });
    }
  }, [windowWidth]);

  //마우스 위치 기반 word 애니매이션
  useEffect(() => {
    if (!motionMeta) return;
    const el = expertiseRowRef.current;
    if (!el) return;

    const { rangeStart, rangeEnd, moveX, halfInterval } = motionMeta;

    if (mouseRatio > rangeStart && mouseRatio < rangeEnd) {
      const actionRatio =
        1 - Math.abs((mouseRatio - rangeStart) / (halfInterval * 2) - 0.5) * 2;

      gsap.to(el, {
        x: moveX * actionRatio,
        ease: "power2.out",
        duration: 2,
      });
    } else {
      gsap.to(el, {
        x: 0,
        ease: "power2.out",
        duration: 2,
      });
    }
  }, [mouseRatio, motionMeta]);

  //descTarget 애 대한 설정
  useEffect(() => {
    const el = expertiseRowRef.current;

    const mm = gsap.matchMedia(); // matchMedia

    const onEnter = () => {
      setDescTarget(outerIdx);
      const spans = el.querySelectorAll("span");
      gsap.to(spans, {
        color: "#000000",
        duration: 0.2, // 더 부드럽게
        stagger: 0.03, // 순차적으로 자연스럽게
        ease: "power2.out", // 가속도 추가
      });
    };
    const onLeave = () => {
      setDescTarget(-1);
    };

    mm.add("(min-width: 769px)", () => {
      // PC 전용
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);

      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      };
    });

    mm.add("(max-width: 768px)", () => {
      const mbTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "bottom-=5 70%",
          onEnter: onEnter,
          onLeave: onLeave,
          onEnterBack: onEnter,
          onLeaveBack: onLeave,
          // markers: true, // 개발용
        },
      });

      return () => {
        mbTl.scrollTrigger?.kill();
        mbTl.kill();
      };
    });

    // 컴포넌트 언마운트 시 해제
    return () => mm.revert();
  }, []);

  return (
    <div
      ref={expertiseRowRef}
      key={`expertise-title-word-${outerIdx}`}
      className="expertise-row md:w-full md:h-[9.5vw] md:text-[7.5vw] text-[10vw] py-[5vw] align-middle flex md:justify-start justify-center md:items-center "
    >
      {title.split("").map((char, innerIdx) => (
        <span
          key={`expertise-title-word-${outerIdx}-${innerIdx}`}
          className="inline-block opacity-0 md:text-[#efefef] expertise-one-word"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default ExpertiseWord;
