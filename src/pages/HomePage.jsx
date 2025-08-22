//react
import { useRef, useEffect, useState } from "react";

//section
import IntroSection from "../section/IntroSection";
import GallerySection from "../section/GallerySection";
import HistorySection from "../section/HistorySection";
import ExpertiseSection from "../section/ExpertiseSection";
import FooterSection from "../section/FooterSection";
import PartnersSection from "../section/PartnersSection";

//Modal
import Modal from "../section/Modal";

//data
import { homepageData } from "../homepageData";

//lenis
import { useLenis } from "../context/LenisContext";

export default function HomePage({ videoUrls }) {
  const container = useRef();

  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (container) {
      setReady(true);
    }
  }, [container]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [section, setSection] = useState(null);

  const lenis = useLenis();
  //모달 오픈 시 메인화면 휠 작동 제어
  useEffect(() => {
    if (isModalOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isModalOpen]);

  return (
    <div
      ref={container}
      className="main-container w-full h-screen bg-white md:p-[1.1vw] p-[4vw]"
    >
      {/* section-introduction */}
      {ready ? (
        <>
          <IntroSection
            data={homepageData.introSection}
            container={container}
            videoUrls={videoUrls}
          />
          <div className="faker-spacer md:h-[80vh] h-[20vh] w-auto mb-1"></div>
          {/* section-gallery */}
          <GallerySection
            data={homepageData.gallerySection}
            modalState={{ setIsModalOpen, setModalId, setSection }}
          />
          {/* section-history */}
          <HistorySection
            data={homepageData.historySection}
            modalState={{ setIsModalOpen, setModalId, setSection }}
          />
          {/* section-expertise */}
          <ExpertiseSection data={homepageData.expertiseSection} />
          {/* section-partners */}
          <PartnersSection data={homepageData.partnersSection} />
          {/* section-fotter */}
          <FooterSection data={homepageData.footerSection} />
          {isModalOpen && (
            <Modal
              onClose={() => setIsModalOpen(false)}
              section={section}
              modalId={modalId}
              data={homepageData.modal}
            ></Modal>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
