import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("powerBurst", "M0,0 C0.6,0.07,0,1,1,1");

export function animateIntro(lenis, onComplete) {
  lenis.stop(); // 스크롤 정지
  const introTl = gsap.timeline({
    onComplete: () => {
      lenis.start(); // 애니메이션 끝나면 다시 시작
    },
  });

  introTl
    .from(".introduction-words__left-item", {
      opacity: 0,
      y: 55,
      duration: 0.7,
      ease: "power3.out",
    })
    .add(
      () =>
        gsap.from(".introduction-words__left-item span", {
          opacity: 0,
          color: "#fff",
          duration: 0.5,
          stagger: 0.035,
          ease: "power3.out",
        }),
      "<"
    )
    .from(
      ".introduction-words__right-item",
      {
        opacity: 0,
        y: 55,
        duration: 0.7,
        ease: "power3.out",
      },
      "+=0.1"
    )
    .add(
      () =>
        gsap.from(".introduction-words__right-item span", {
          opacity: 0,
          color: "#fff",
          duration: 0.5,
          stagger: 0.035,
          ease: "power3.out",
        }),
      "<"
    )
    .to(".video__wrapper", {
      opacity: 1,
      scale: 1,
      transformOrigin: "top left",
      duration: 1.3,
      ease: "powerBurst",
      onComplete: () => {
        onComplete?.(); // ✅ 함수가 전달됐을 때만 실행 (optional chaining)
      },
    })
    .to(
      ".introduction-one-word",
      {
        color: "#fff",
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    );
}
