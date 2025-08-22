import { useEffect, useState } from "react";

export default function ResponsiveText({ data }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lineBreaks = data.lineBreaks;

  const text = data.text;

  const activeBreakWords = isMobile ? lineBreaks.mobile : lineBreaks.pc;

  let currentLine = [];
  let lines = [];

  text.split(" ").forEach((word, i, arr) => {
    currentLine.push(word);
    const isLast = i === arr.length - 1;
    const needsBreak = activeBreakWords.includes(word);
    if (needsBreak || isLast) {
      lines.push(currentLine);
      currentLine = [];
    }
  });

  return (
    <>
      {lines.map((lineWords, lineIdx) => (
        <div key={lineIdx} className="line">
          {lineWords.map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIdx) => (
                <span
                  key={charIdx}
                  className="inline-block introduction-text-one-word"
                  style={{ color: "#000000" }}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </span>
          ))}
        </div>
      ))}
    </>
  );
}
