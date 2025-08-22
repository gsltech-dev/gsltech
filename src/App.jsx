//react
import { useState, useEffect } from "react";

//react-router-dom
import { Routes, Route } from "react-router-dom";

//tailwind
import "./styles/tailwind.css";
import "./styles/fonts.css";
import "./styles/main.css";

//lenis
import { LenisContext } from "./context/LenisContext";

//gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//pages
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";

//appReady
import useAppReady from "./useAppReady";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const { lenis, videoBlobUrls } = useAppReady({
    setProgress,
    setIsReady,
  });

  if (!isReady) {
    return <LoadingPage progress={progress} />;
  }

  return (
    <LenisContext.Provider value={lenis}>
      <Routes>
        <Route path="/" element={<HomePage videoUrls={videoBlobUrls} />} />
      </Routes>
    </LenisContext.Provider>
  );
}

export default App;
