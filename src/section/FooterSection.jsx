import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const FooterSection = ({ data }) => {
  let currentline = [];
  let lines = [];

  data.text.split(" ").forEach((word, outerIdx, arr) => {
    currentline.push(word);
    const needBreak = data.breakPoint.includes(word);
    const isLast = arr.length - 1 === outerIdx;
    if (needBreak || isLast) {
      lines.push(currentline);
      currentline = [];
    }
  });

  const footrerRef = useRef();
  useEffect(() => {
    const mm = gsap.matchMedia(); // matchMedia

    const el = footrerRef.current;
    const words = el.querySelectorAll(".footer-one-word");

    mm.add("(min-width: 769px)", () => {
      const pcVideoEl = el.querySelector(".pc-footer-video");
      const footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          end: "+=60%",
          scrub: true,
          // markers: true,
          pin: el,
          onLeave: () => {
            pcVideoEl.classList.remove("opacity-0");
            pcVideoEl.classList.add("opacity-100");
            pcVideoEl.muted = true;
            pcVideoEl.play().catch((e) => {
              console.warn("PC video play failed:", e);
            });
          },
        },
      });

      footerTl.to(words, {
        color: "#000000",
        stagger: 0.2,
      });
    });

    mm.add("(max-width: 768px)", () => {
      const mobileVideoEl = el.querySelector(".mobile-footer-video");

      const footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "+=50%",
          scrub: true,
          // markers: true,
          pin: el,
          onLeave: () => {
            mobileVideoEl.classList.remove("opacity-0");
            mobileVideoEl.classList.add("opacity-100");
            mobileVideoEl.muted = true;
            mobileVideoEl?.play(); // 스크롤이 end 지점에 도달했을 때 비디오 재생
          },
        },
      });
      footerTl.to(words, {
        color: "#000000",
        stagger: 0.2,
        duration: 0.8,
      });
    });

    // 컴포넌트 언마운트 시 해제
    return () => mm.revert();
  }, []);

  return (
    <section ref={footrerRef} className="h-auto md:h-auto w-full flex flex-col">
      <div className="footer-wrapper  flex flex-col md:flex-row w-full h-auto md:mt-[10vh] mt-[10vh] md:pb-[5vh]">
        <div className="footer-text md:w-4/7 md:h-[25vh] w-full h-[15vh] flex justify-start flex-col text-[8vw] md:text-[4vw] md:leading-[4.8vw] leading-[9vw]  font-[350] text-[#efefef] ">
          {lines.map((line, lIdx) => (
            <div key={`footer-${lIdx}`}>
              {line.map((word, wIdx) => (
                <span key={`footer-word-${wIdx}`} className="footer-one-word">
                  {word}&nbsp;
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-info  md:w-3/7 md:h-[25vh] w-full h-[25vh] flex">
          <div className="  info-left w-1/2 h-full ">
            <div className="email-wrapper w-full h-auto md:mb-[3vw] mb-[6vw]">
              <div className="email-text text-black font-[350] md:text-[1.3vw] md:mb-[0.5vw] mb-[1vw] text-[3.4vw]">
                To apply
              </div>
              <div className="email text-[3.3vw] md:text-[1.2vw] text-[#9c9c9c] underline cursor-pointer">
                {data.email}
              </div>
            </div>
            <div className="tel-wrapper w-full h-auto">
              <div className="tel-text text-black font-[350] md:text-[1.3vw] md:mb-[0.5vw] mb-[1vw] text-[3.4vw]">
                For inquiries
              </div>
              <div className="tel text-[3.3vw] md:text-[1.2vw] text-[#9c9c9c] underline cursor-pointer">
                {data.tel}
              </div>
            </div>
          </div>
          <div className=" info-right w-1/2 h-full">
            <div className="visit-text text-black font-[350] md:text-[1.3vw] md:mb-[0.5vw] mb-[1vw] text-[3.4vw]">
              Visit us
            </div>
            <div className="visit text-[3.3vw] md:text-[1.2vw] text-[#9c9c9c]">
              {data.address}
            </div>
            <div className="visit text-[3.3vw] md:text-[1.2vw] md:mt-[0.2vw] text-[#9c9c9c] ">
              {data.addressDetail}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-video relative bg-indigo-100 md:w-[100vw] left-1/2 -translate-x-1/2 w-[100vw] md:aspect-[5.106/1]  aspect-[1.233/1]  overflow-hidden">
        <video
          className="mobile-footer-video absolute opacity-0 w-full h-auto object-contain"
          src={data.mobileVideo}
          muted
        ></video>
        <video
          className="pc-footer-video absolute opacity-0 w-full h-auto object-contain"
          src={data.pcVideo}
          muted
        ></video>
      </div>
    </section>
  );
};

export default FooterSection;
