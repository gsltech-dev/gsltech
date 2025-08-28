// hooks/useAppReady.js
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FontFaceObserver from "fontfaceobserver";
import { homepageData } from "./homepageData";

gsap.registerPlugin(ScrollTrigger);

export default function useAppReady({ setProgress, setIsReady }) {
  const [lenis, setLenis] = useState(null);
  const [videoBlobUrls, setVideoBlobUrls] = useState([]);

  const videoPaths = homepageData.introSection.introVideos;

  useEffect(() => {
    let lenisInstance;
    let createdBlobUrls = [];

    //lenis 생성기
    const initLenis = async () => {
      lenisInstance = new Lenis({
        smooth: true,
        lerp: 0.07, // 부드러움 조절
        touchMultiplier: 0.7, //모바일 감도
        wheelMultiplier: 0.7, //  스크롤 거리 조절 0.5 -> 휠 한번에 화면의 10%이동
        normalizeWheel: true, // OS별 휠 차이를 보정
      });

      lenisInstance.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          return arguments.length
            ? lenisInstance.scrollTo(value, 0)
            : window.scrollY;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      const raf = (time) => {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return lenisInstance;
    };

    //video blob 생성기
    const loadVideosAsBlob = async () => {
      const blobs = await Promise.all(
        videoPaths.map(async (path) => {
          const res = await fetch(path);
          const blob = await res.blob();
          const blobUrl = URL.createObjectURL(blob);
          createdBlobUrls.push(blobUrl);
          return blobUrl;
        })
      );
      setVideoBlobUrls(blobs);
    };

    // fontface 사용가능 검사
    const checkFont = async () => {
      const fontConfigs = [
        { name: "Codec Pro", weights: [300, 350, 400] },
        { name: "Satoshi", weights: [500] },
        { name: "Fira Code", weights: [400] },
      ];
      const fontPromises = fontConfigs.flatMap(({ name, weights }) =>
        weights.map((weight) =>
          new FontFaceObserver(name, { weight }).load(null, 4000)
        )
      );
      try {
        await Promise.all(fontPromises);
        console.log("All ready");
      } catch (err) {
        console.warn("⚠️ 일부 폰트 로딩 실패", err);
      }
    };

    // 준비 작동 함수
    const loadResources = async () => {
      setProgress(0);

      // Step 1: Lenis
      const readyLenis = await initLenis();
      setLenis(readyLenis);
      setProgress(20);

      // Step 2: 비디오 준비 확인 (추후 Promise.all 등으로 확장 가능)
      await loadVideosAsBlob();
      setProgress(70);

      // Step 3: 폰트 로딩 등 추가 가능
      await checkFont();
      setProgress(100);

      //부트러운 화면 전환
      setTimeout(() => {
        setIsReady(true);
      }, 100);
    };

    loadResources();

    return () => {
      lenisInstance?.destroy();
      ScrollTrigger.kill();
      createdBlobUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [setProgress, setIsReady]);

  return {
    lenis,
    videoBlobUrls,
  };
}
