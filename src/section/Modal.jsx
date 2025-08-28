import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useWindowSize from "../hooks/useWindowSize";

const Modal = ({ onClose, modalId, data, section }) => {
  // 모달 열릴 때 스크롤 막고, 닫힐 때 복구
  const w = useWindowSize();
  const isMobile = w < 768;
  const modalData = data[section][modalId];
  const mainModalRef = useRef();
  const totalModalRef = useRef();

  // 1) 초기 키 계산
  const hasTabs = !!modalData?.album?.needTap;
  const firstKey = hasTabs
    ? modalData?.album?.taps?.[0] ?? "default"
    : "default";

  // 2) 초기 상태 설정(초기자 함수 사용)
  const [albumKey, setAlbumKey] = useState(() => firstKey);

  // 3) 안전하게 콘텐츠 열기 (없으면 빈 배열)
  const raw = modalData.album.content[albumKey][isMobile ? "mobile" : "pc"];

  console.log(raw);

  const [modalY, setModalY] = useState(0); // 현재 Y 위치 상태

  //휠 동작 시 모달 움짐임 및 변수 제어
  useEffect(() => {
    const mm = gsap.matchMedia(); // matchMedia

    const totalEl = totalModalRef.current;
    const mainEl = mainModalRef.current;
    const cancelBtnEl = mainEl.querySelector(".cancel-btn");
    const bgBlack = mainEl.querySelector(".btn-black-bg");
    const btnIcon = mainEl.querySelector(".btn-icon");

    const modalTl = gsap.timeline();
    const getVw = (n) => {
      return (window.innerWidth / 100) * n;
    };

    modalTl.fromTo(
      mainEl,
      {
        y: getVw(9) * -1,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    const onEnterCancel = () => {
      const cancelTl = gsap.timeline();
      cancelTl
        .fromTo(bgBlack, { opacity: 0 }, { opacity: 1, duration: 0 })
        .fromTo(
          bgBlack,
          { scaleY: 0, transformOrigin: "bottom" },
          { scaleY: 1, duration: 0.5 }
        )
        .to(btnIcon, { color: "#FFFFFF", duration: 0.5, rotateZ: 90 }, "<");
    };

    const onLeaveCancel = () => {
      const cancelTl = gsap.timeline();
      cancelTl
        .fromTo(
          bgBlack,
          { scaleY: 1, transformOrigin: "bottom" },
          { scaleY: 0, duration: 0.5 }
        )
        .to(btnIcon, { color: "#000000", duration: 0.5, rotateZ: 0 }, "<");
    };

    const handleWheel = (e) => {
      e.preventDefault(); // 브라우저 기본 스크롤 막기

      const delta = e.deltaY;

      setModalY((prev) => {
        let next = prev - delta; // 아래로 내리면 더 작아짐
        next = Math.min(next, 0); // 위로 못 넘게 제한 (원점 이상으로 안올라가게)

        return next;
      });
    };

    const checkBounds = () => {
      if (!mainModalRef.current) return;

      const rectBottom = mainModalRef.current.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      const background = (rectBottom / windowHeight) * 0.75;

      // 예시: 모달의 bottom이 화면 위로 완전히 사라졌을 때 닫기
      if (rectBottom < 0) {
        onClose(); // 닫기 트리거
      }

      // 또는 top이 특정 위치를 넘었을 때
      if (rectBottom < windowHeight * 1) {
        gsap.to(totalEl, {
          backgroundColor: `RGBA(0 0 0 ${background})`,
        });
      }
    };

    totalEl.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault(); // 기본 스크롤 막기
        handleWheel(e); // 위치 이동 처리
        checkBounds(); // 모달의 위치가 특정 기준 지났는지 판단
      },
      { passive: false }
    );

    mm.add("(min-width: 769px)", () => {
      cancelBtnEl.addEventListener("mouseenter", onEnterCancel);
      cancelBtnEl.addEventListener("mouseleave", onLeaveCancel);

      return () => {
        window.removeEventListener("wheel", checkBounds);
        totalEl.removeEventListener("wheel", handleWheel);
        cancelBtnEl.removeEventListener("mouseenter", onEnterCancel);
        cancelBtnEl.removeEventListener("mouseleave", onLeaveCancel);
      };
    });

    // ✅ 모바일 터치 처리용 변수와 함수

    let startY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const rawDelta = currentY - startY;
      const delta = rawDelta * 2.5; // 여기만 가속 적용
      setModalY((prev) => Math.min(prev + delta, 0));
      startY = currentY;
      checkBounds();
    };

    mm.add("(max-width: 768px)", () => {
      const el = totalModalRef.current;
      if (!el) return;

      el.addEventListener("touchstart", handleTouchStart, { passive: false });
      el.addEventListener("touchmove", handleTouchMove, { passive: false });

      return () => {
        el.removeEventListener("touchstart", handleTouchStart);
        el.removeEventListener("touchmove", handleTouchMove);
      };
    });

    // 컴포넌트 언마운트 시 해제
    return () => mm.revert();
  }, []);

  //모달 Y 제어 로직
  useEffect(() => {
    // 컴포넌트 언마운트 시 해제
    if (!mainModalRef.current) return;
    gsap.to(mainModalRef.current, {
      y: modalY,
      duration: 1,
      ease: "power2.out",
    });
  }, [modalY]);

  return (
    // 모달 배경
    <div
      className="fixed inset-0 z-50 bg-black/70 flex md:pt-[2vw] md:px-[7.5vw] px-[2.5vw] pt-[4.5vw] items-start justify-center"
      onClick={onClose} // 배경 누르면 닫기
      ref={totalModalRef}
    >
      {/* 모달 메인 컨텐츠 */}
      <div
        ref={mainModalRef}
        className="bg-white flex flex-col rounded-xl md:rounded-xl w-full h-auto overflow-auto md:p-[1.1vw] p-[4vw]"
        onClick={(e) => e.stopPropagation()} // 내용 클릭은 이벤트 전파 막기
      >
        {/* cancel-btn-wrapper */}
        <div className="cancel-btn-wrapper w-full h-auto flex justify-end ">
          {/* cancel-btn */}
          <div
            className="cancel-btn relative flex justify-center items-center md:w-[3.3vw] md:h-[3.3vw] w-[11.5vw] h-[11.5vw] overflow-hidden aspect-square rounded-xl bg-[#efefef] hover:cursor-pointer"
            onClick={onClose}
          >
            {/* black-background */}
            <div className="btn-black-bg w-full h-full absolute opacity-0 bg-black "></div>
            {/* black cancel */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke=" currentColor "
              className="btn-icon absolute w-[40%]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        {/* main-info-wrapper */}
        <div className="main-info-wrapper w-full md:h-[6vw] flex flex-col md:flex-row md:mt-[8vw] leading-[3.7vw] md:leading-[1.2vw] mt-[8vw]">
          {/* types */}
          <div
            className="types md:text-[0.85vw] text-[3vw] w-1/6 "
            style={{ fontFamily: "Fira Code" }}
          >
            {modalData.info.types.map((type, i) => (
              <div className="type" key={i}>
                {type}
              </div>
            ))}
          </div>
          {/* title */}
          <div
            className="title md:w-2/3 w-full  text-[8vw]  md:text-[3.8vw] font-normal flex md:mt-0 mt-[8vw] justify-start items-center leading-none
            "
          >
            {modalData.info.title}
          </div>
          {/* link-btn */}
          {modalData.info?.btnText === null ||
          modalData.info?.btnText === undefined ? (
            ""
          ) : (
            <div className="link-btn grow flex items-center md:justify-end">
              <div
                className="md:w-[9.2vw] md:h-[3.3vw] w-[33vw] h-[12vw] md:mt-0 mt-[7vw] text-white  text-[3.8vw]  md:text-[1.1vw] rounded-xl md:rounded-lg font-bold bg-black flex justify-center items-center hover:cursor-pointer"
                onClick={() => {
                  window.open(modalData.info.link, "_blank");
                }}
              >
                {modalData.info.btnText}
              </div>
            </div>
          )}
        </div>
        {/* main-img-wrapper */}
        <div className="main-img-wrapper w-full aspect-[1/0.45] md:aspect-[1/0.45] mt-[6vw] md:mt-[1vw]  rounded-xl overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-center object-cover"
            src={modalData.mainImg}
            alt=""
          />
        </div>
        {/* desc-wrapper */}
        <div className="desc-wrapper flex flex-col w-full h-auto  mt-[5vw] font-normal pl-[0.5vw]">
          {/* desc-text */}

          {isMobile ? (
            <div className="desc-text w-full md:w-2/3 mt-[7vw] md:mt-0 text-[4vw] leading-[6vw] md:leading-[1.9vw] md:text-[1.3vw] h-auto ">
              {modalData.desc.texts.mobile.map((text, i) =>
                text === " " ? <br key={i} /> : <p key={i}>{text}</p>
              )}
            </div>
          ) : (
            <div className="desc-text w-full md:w-2/3 mt-[7vw] md:mt-0 text-[4vw] leading-[6vw] md:leading-[1.9vw] md:text-[1.3vw] h-auto ">
              {modalData.desc.texts.pc.map((text, i) =>
                text === " " ? <br key={i} /> : <p key={i}>{text}</p>
              )}
            </div>
          )}
          {/* desc-point */}
          <div className=" desc-point w-full h-auto mt-[6vw] md:mt-[4vw] flex flex-col md:gap-[0vw] gap-[1vw] items-end">
            {modalData.desc.points.map((point, i) => (
              <div
                key={i}
                className=" point-title font-[500] md:text-[1.6vw] text-[4.3vw]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
        {/* album */}
        <div className="albums-wrapper w-full h-auto md:mt-[6vw] mt-[18vw] flex flex-col md:gap-[1.1vw] gap-[4vw] ">
          {modalData.album.needTap ? (
            <div className="album-tap text-[4.5vw] md:text-[2.1vw] font-[400] flex w-full md:h-[4vw] h-[8vw] md:gap-[1vw] gap-[3vw]">
              {modalData.album.taps.map((tap, i) => (
                <div
                  ket={i}
                  className={`tap-item flex justify-center items-center md:w-[14.5%] w-[25%] cursor-pointer border-b-2
                  ${
                    albumKey === tap
                      ? "text-black border-black"
                      : "text-[#e1e1e1] border-[#e1e1e1]"
                  }`}
                  onClick={() => {
                    setAlbumKey(tap);
                  }}
                >
                  {tap}
                </div>
              ))}
            </div>
          ) : (
            " "
          )}
          {raw.map((row, i) => (
            <div
              key={i}
              className="album-wrapper w-full flex flex-col md:flex-row gap-[4vw] md:gap-[1.1vw]"
            >
              {row.map((item, idx) => {
                return item.type === "image" ? (
                  <div
                    key={idx}
                    className="album-box grow-1 h-auto overflow-hidden rounded-xl md:rounded-xl "
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block w-full h-full"
                      >
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                          src={item.src}
                          alt=""
                        />
                        {/* 오버레이 */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white font-[300] text-[5vw]">
                            Visit Website
                          </span>
                        </div>
                      </a>
                    ) : (
                      <img
                        loading="lazy"
                        className="img w-full h-full object-cover object-center"
                        src={item.src}
                        alt=""
                      />
                    )}
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="album-box grow-1 h-auto overflow-hidden rounded-xl md:rounded-xl "
                  >
                    <video
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="video w-full h-full object-cover object-center"
                      src={item.src}
                    ></video>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
