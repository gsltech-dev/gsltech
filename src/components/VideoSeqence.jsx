import { useEffect, useRef } from "react";
import gsap from "gsap";

// import glassIntroVideo from "../assets/videos/glass.mp4";
// import cookieIntroVideo from "../assets/videos/cookie.mp4";
// import ballwoonIntroVideo from "../assets/videos/ballwoon.mp4";

export default function VideoSequence({ introTextRefs, videoUrls }) {
  const videoRefs = useRef([]);
  const wrapperRef = useRef();
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (v) v.style.display = i === 0 ? "block" : "none";
    });

    let currentIndex = 0;
    const playNext = () => {
      // 비디오 전환 애니메이션
      const currentVideo = videoRefs.current[currentIndex];
      const nextIndex = (currentIndex + 1) % videoRefs.current.length;
      const nextVideo = videoRefs.current[nextIndex];
      // 글자 전환 애니메이션
      const currentTextSpans = [
        ...introTextRefs.current[currentIndex].current.children,
      ].reverse();
      const nextTextSpans = [
        ...introTextRefs.current[nextIndex].current.children,
      ].reverse();

      //   기존 글자 사라지기
      gsap.to(currentTextSpans, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        stagger: 0.02,
      });

      // 새 글자 들어오기
      gsap.fromTo(
        nextTextSpans,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
          stagger: 0.02,
          delay: 0.3,
        }
      );

      // console.log(nextVideo);
      // 다음 비디오 아래 배치
      gsap.set(nextVideo, {
        display: "block",
        y: "100%",
        opacity: 1,
        zIndex: 2,
      });

      // 다음 비디오 올라오는 효과
      gsap.to(nextVideo, {
        y: "0%",
        duration: 1,
        ease: "power3.out",
        onStart: () => {
          gsap.set(currentVideo, { zIndex: 1 });
        },
        onComplete: () => {
          gsap.set(currentVideo, { display: "none" });
          currentIndex = nextIndex;
          setTimeout(playNext, 7000);
        },
      });
    };

    //처음 playnext 시작 시간
    const timer = setTimeout(playNext, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute w-full h-full inset-0 overflow-hidden rounded-lg"
    >
      {videoUrls.map((src, i) => (
        <video
          key={i}
          ref={(el) => (videoRefs.current[i] = el)}
          className="absolute inset-0 w-full h-full object-cover"
          src={src}
          autoPlay
          muted
          playsInline
          loop
        />
      ))}
    </div>
  );
}
