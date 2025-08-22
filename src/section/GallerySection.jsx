import { useRef, useMemo, useEffect, useState } from "react";
import GalleryItem from "../components/GalleryItem";
import useWindowSize from "../hooks/useWindowSize";

const GallerySection = ({ data, modalState }) => {
  ("gallerysection");

  //모달 제어
  const { setIsModalOpen, setModalId, setSection } = modalState;
  const handleClick = (id) => {
    setModalId(id);
    setIsModalOpen(true);
    setSection("gallery");
  };

  const itemRefs = useRef([]);
  const width = useWindowSize(); // ✅ 컴포넌트 루트에서 한 번만 호출
  const isMobile = width < 768;

  const [refReady, setRefReady] = useState(false);
  useEffect(() => {
    const totalItemCount = data.flat().length;
    const isAllReady =
      itemRefs.current.filter(Boolean).length === totalItemCount;
    if (isAllReady) {
      ("itemref바뀜");
      itemRefs;
      setRefReady(true);
    }
  }, [itemRefs]);

  return (
    <section className="section-gallery flex flex-col items-center justify-start lg:mb-[1.1vw] mb-[4vw] md:gap-[1.1vw] gap-[4vw] w-full h-auto ">
      {data.map((arr, outerIdx) => {
        const mobileHeightAspect = arr.length * 0.9;
        // const w = useWindowSize();
        const aspectStyle = useMemo(() => {
          return isMobile
            ? { aspectRatio: `${1 / mobileHeightAspect}` }
            : undefined;
        }, [mobileHeightAspect, isMobile]);

        return (
          <div
            key={`gallery-row-${outerIdx}`}
            className={`w-full relative md:aspect-[2.216/1] flex flex-col md:flex-row md:gap-[1.1vw] gap-[4vw]`}
            style={aspectStyle}
          >
            {arr.map((info, innerIdx) => {
              const itemIdx =
                data
                  .slice(0, outerIdx)
                  .reduce((sum, item) => sum + item.length, 0) + innerIdx;

              return (
                <div
                  ref={(el) => (itemRefs.current[itemIdx] = el)}
                  className="md:flex-1 md:h-full md:min-w-0 flex-1 w-full"
                  key={`gallery-trigger-${itemIdx}`}
                >
                  {refReady ? (
                    <GalleryItem
                      galleryId={itemIdx}
                      info={info}
                      triggerRef={itemRefs.current[itemIdx]}
                      handleClick={handleClick}
                    />
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default GallerySection;
