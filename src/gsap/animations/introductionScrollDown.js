import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("powerBurst", "M0,0 C0.6,0.07,0,1,1,1");
gsap.registerPlugin(ScrollTrigger);

export function introductionScrollDown(scopeElement) {
  let mm = gsap.matchMedia(); // matchMedia

  const ctx = gsap.context(() => {
    //PC
    mm.add("(min-width: 768px)", () => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: scopeElement.current,
          start: "top top",
          end: "+=80%",
          pin: ".section-introduction",
          pinSpacing: false,
          scrub: true,
          // markers: true,
        },
      });

      const introTextTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".introduction-text",
          start: "top 50%",
          end: "top -10%",
          scrub: true,
          // markers: true,
        },
      });

      //introText 한글자 색상 변환
      introTextTl
        .fromTo(
          ".introduction-text-one-word",
          { opacity: 0.11 },
          {
            opacity: 1,
            stagger: 0.2,
            ease: "powerBurst",
            duration: 4,
          }
        )
        .to({}, { duration: 0.5 })
        .to(".line", {
          yPercent: -130,
          stagger: 2,
          duration: 4,
        });

      scrollTl
        //video_wrapper 축소, 위로 이동
        .add(
          gsap
            .timeline()
            .fromTo(
              ".video__wrapper",
              {
                scale: 1,
                xPercent: 0,
                yPercent: 0,
              },
              {
                scale: 0.3,
                xPercent: 0,
                yPercent: 0,
                ease: "none",
                transformOrigin: "top right",
                duration: 6,
              }
            )
            .to(".video__wrapper", {
              ease: "none",
              duration: 1,
              yPercent: -25,
            })
            .to(".video__wrapper", {
              ease: "none",
              duration: 1,
              yPercent: -40,
            })
            .to({}, { duration: 1 }),
          0
        )
        //introduction-words 투명처리
        .add(
          gsap
            .timeline()
            .to({}, { duration: 1 })
            .to(".introduction-words", {
              opacity: 0,
              ease: "none",
              duration: 1,
            })
            .to({}, { duration: 7 }),
          0
        )
        //introduction-text 올라오기
        .add(
          gsap
            .timeline()
            .to({}, { duration: 2.5 })
            .fromTo(
              ".introduction-text",
              {
                rotate: -20,
                opacity: 1,
                yPercent: 150,
              },
              {
                rotate: 0,
                ease: "none",
                yPercent: 0,
                duration: 2,
              }
            )
            .to({}, { duration: 4.5 }),
          0
        );
    });

    //Mobile
    mm.add("(max-width: 767px)", () => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: scopeElement.current,
          start: "top top",
          end: "+=20%",
          pin: ".section-introduction",
          scrub: true,
          pinSpacing: false,
          // markers: true,
        },
      });

      const introTextTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".introduction-text",
          start: "top 100%",
          end: "top 10%",
          scrub: true,
          // markers: true,
        },
      });

      introTextTl
        .to({}, { duration: 0.3 })
        .fromTo(
          ".introduction-text-one-word",
          { opacity: 0.11 },
          {
            opacity: 1,
            stagger: 0.04,
            ease: "powerBurst",
            duration: 2,
          }
        )
        // .to({}, { duration: 0.1 })
        .to(".line", {
          yPercent: -160,
          stagger: 0.5,
          duration: 5,
          ease: "powerBurst",
        });

      scrollTl //video_wrapper 축소, 위로 이동
        .add(
          gsap.timeline().fromTo(
            ".video__wrapper",
            {
              scale: 1,
              xPercent: 0,
              yPercent: 0,
            },
            {
              scale: 0.4,
              xPercent: 0,
              yPercent: 0,
              ease: "none",
              transformOrigin: "top right",
              duration: 2,
            }
          ),
          0
        )
        //introduction-words 투명처리
        .add(
          gsap
            .timeline()
            .to(".introduction-words", {
              opacity: 0,
              ease: "none",
              duration: 1,
            })
            .to({}, { duration: 1 }),
          0
        )
        //introduction-words 투명처리
        .add(
          gsap.timeline().fromTo(
            ".introduction-text",
            { opacity: 1, yPercent: 120 },
            {
              ease: "none",
              yPercent: 0,
              duration: 2,
            }
          ),
          0
        );
    });
  }, scopeElement); // gsap context

  return () => {
    ctx.revert();
    mm.revert();
  }; // cleanup
}
