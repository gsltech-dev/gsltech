import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ExpertiseDesc = ({
  descriptionData,
  defaultdescriptionData,
  descTarget,
  isExperEnter,
}) => {
  const descWrapperRef = useRef();
  const [animateLevel, setAnimateLevel] = useState(0);
  const [targetData, setTargetData] = useState(defaultdescriptionData);
  const currentTarget = useRef();
  const tlRef = useRef();

  const runIdRef = useRef(0);
  const intervalsRef = useRef(new Set());
  const timeoutsRef = useRef(new Set());

  function clearTimers() {
    intervalsRef.current.forEach((id) => clearInterval(id));
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    intervalsRef.current.clear();
    timeoutsRef.current.clear();
  }

  const updateTargetData = (i) => {
    const data = i === -1 ? defaultdescriptionData : descriptionData[i];
    setTargetData(data);
  };

  //진입 관련 애니매이션
  useEffect(() => {
    if (!isExperEnter) return;

    currentTarget.current = descTarget;

    const el = descWrapperRef.current;
    let wordWrapper = null;

    //생성기
    const createLogic = () => {
      tlRef.current?.kill();
      tlRef.current = null;
      clearTimers();

      setAnimateLevel(2);
      updateTargetData(currentTarget.current); //dom 반영
      requestAnimationFrame(() => {
        //dom 반영된 element ref 확보
        wordWrapper = el.querySelectorAll(".desc-word-wrapper");
        const createTl = gsap.timeline({
          onComplete: () => {
            setAnimateLevel(0);
          },
        });
        tlRef.current = createTl;

        Array.from(wordWrapper).forEach((word) => {
          const spans = word.querySelectorAll("span");

          const stagger = 0.05; //span간 글자 생성 delay
          const duration = 0.05; //span 생성 시간
          const changeInterval = 50; //글자 하나하나 바뀌는 시간 ms
          const animationTime = 500; //글자 바뀌는게 보이는 시간 ms
          const charset = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;

          // ✔ runId는 루프 밖에서 한번만 증가
          const runId = ++runIdRef.current;

          // function changeText(span) {
          //   span.textContent =
          //     charset[Math.floor(Math.random() * charset.length)];
          // }

          spans.forEach((span, i) => {
            const originText = span.textContent;

            const iid = setInterval(() => {
              if (runId !== runIdRef.current) return;
              if (originText.trim() === "") return; // 공백은 건너뛰기(선택)
              span.textContent =
                charset[Math.floor(Math.random() * charset.length)];
            }, changeInterval);
            intervalsRef.current.add(iid);

            const tid = setTimeout(() => {
              clearInterval(iid);
              intervalsRef.current.delete(iid);
              if (runId === runIdRef.current) {
                span.textContent = originText;
              }
            }, i * duration * 1000 + animationTime);
            timeoutsRef.current.add(tid);
          });

          // spans.forEach((span, i) => {
          //   const originText = span.textContent;
          //   const intervalId = setInterval(() => {
          //     changeText(span);
          //   }, changeInterval);
          //   setTimeout(() => {
          //     clearInterval(intervalId);
          //     span.textContent = originText;
          //   }, i * duration * 1000 + animationTime);
          // });

          createTl.fromTo(
            spans,
            { opacity: 0 },
            {
              opacity: 1,
              stagger: stagger,
              duration: duration,
            },
            "<"
          );
        });
      });
    };

    const targetEl = descWrapperRef.current;
    gsap.fromTo(
      targetEl,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.01,
        onComplete: () => {
          createLogic(); // 최초 1회만 실행됨
        },
      }
    );

    return () => {
      tlRef.current?.kill();
      tlRef.current = null;
      clearTimers();
    };
  }, [isExperEnter]);

  // desc 관련 애니매이션
  useEffect(() => {
    //PC에서만 실행
    currentTarget.current = descTarget;

    const el = descWrapperRef.current;
    const deleteWrapper = el.querySelector(".delete-wrapper");
    let wordWrapper = null;

    //생성기
    const createLogic = () => {
      tlRef.current?.kill();
      tlRef.current = null;
      clearTimers();

      setAnimateLevel(2);
      updateTargetData(currentTarget.current); //dom 반영
      requestAnimationFrame(() => {
        //dom 반영된 element ref 확보
        wordWrapper = el.querySelectorAll(".desc-word-wrapper");
        const createTl = gsap.timeline({
          onComplete: () => {
            setAnimateLevel(0);
          },
        });
        tlRef.current = createTl;

        Array.from(wordWrapper).forEach((word) => {
          const spans = word.querySelectorAll("span");
          gsap.set(spans, { opacity: 0 });

          const stagger = 0.05; //span간 글자 생성 delay
          const duration = 0.05; //span 생성 시간
          const changeInterval = 50; //글자 하나하나 바뀌는 시간 ms
          const animationTime = 500; //글자 바뀌는게 보이는 시간 ms
          const charset = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;

          // ✔ runId는 루프 밖에서 한번만 증가
          const runId = ++runIdRef.current;

          // function changeText(span) {
          //   span.textContent =
          //     charset[Math.floor(Math.random() * charset.length)];
          // }

          // spans.forEach((span, i) => {
          //   const originText = span.textContent;
          //   const intervalId = setInterval(() => {
          //     changeText(span);
          //   }, changeInterval);
          //   setTimeout(() => {
          //     clearInterval(intervalId);
          //     span.textContent = originText;
          //   }, i * duration * 1000 + animationTime);
          // });

          spans.forEach((span, i) => {
            const originText = span.textContent;

            const iid = setInterval(() => {
              if (runId !== runIdRef.current) return;
              if (originText.trim() === "") return;
              span.textContent =
                charset[Math.floor(Math.random() * charset.length)];
            }, changeInterval);
            intervalsRef.current.add(iid);

            const tid = setTimeout(() => {
              clearInterval(iid);
              intervalsRef.current.delete(iid);
              if (runId === runIdRef.current) {
                span.textContent = originText;
              }
            }, i * duration * 1000 + animationTime);
            timeoutsRef.current.add(tid);
          });

          createTl
            .to(deleteWrapper, { opacity: 0, duration: 0 }, "<")
            .to(wordWrapper, { opacity: 1, duration: 0 }, "<")
            .fromTo(
              spans,
              { opacity: 0 },
              {
                opacity: 1,
                stagger: stagger,
                duration: duration,
              },
              "<"
            );
        });
      });
    };

    //삭제기
    const deleteLogic = () => {
      setAnimateLevel(1);
      wordWrapper = el.querySelectorAll(".desc-word-wrapper");

      const deleteTl = gsap.timeline({
        onComplete: () => {
          tlRef.current?.kill();
          tlRef.current = null;
          clearTimers();
          createLogic();
          // gsap.set(deleteWrapper, { opacity: 0 });
        },
      });

      deleteTl
        .fromTo(
          deleteWrapper,
          { scaleX: 0, transformOrigin: "left" },
          {
            scaleX: 0.8,
            duration: 0.4,
            ease: "power2.out",
          }
        )
        .fromTo(
          deleteWrapper,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.25 },
          "<"
        )
        .to(wordWrapper, { opacity: 0, duration: 0 }, "-=0");
    };

    if (animateLevel !== 1) {
      if (animateLevel === 2) {
        tlRef.current?.kill();
        tlRef.current = null;
      }
      deleteLogic();
    }
    return () => {
      tlRef.current?.kill();
      tlRef.current = null;
      clearTimers();
    };
  }, [descTarget]);

  return (
    <div
      ref={descWrapperRef}
      className="opacity-0 desc-wrapper relative w-auto h-auto"
    >
      <div className="delete-wrapper absolute top-0 left-0 w-full h-full bg-white opacity-0 z-10"></div>
      {targetData.map((text, outerIdx) => (
        <div
          key={`desc-word-wrapper-${outerIdx}`}
          className="desc-word-wrapper w-full h-auto"
        >
          {text.split("").map((w, innerIdx) => (
            <span
              key={`desc-wrapper-${outerIdx}-one-word-${innerIdx}`}
              className="desc-one-word "
            >
              {w}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExpertiseDesc;
