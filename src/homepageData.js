export const homepageData = {
  introSection: {
    introVideos: [
      "videos/intro/technology.mp4",
      "videos/intro/wellness.mp4",
      "videos/intro/qualityOfLife.mp4",
      "videos/intro/ITDevelopment.mp4",
    ],
    introWords: {
      left: "GSLTECH",
      right: [
        "TECHNOLOGY",
        "WELLNESS",
        "QUALITY OF LIFE",
        "누나 이거 털박에 안보이는데요?",
      ],
    },
    introText: {
      text: "Building a healthy foundation for your daily life, with technology and empathy",
      lineBreaks: {
        pc: ["foundation", "life,"],
        mobile: ["healthy", "foundation", "life,", "technology"],
      },
    },
  },
  gallerySection: [
    [
      {
        title: "KOREREN",
        sub: ["Healthcare brand"],
        image: "/images/gallery/gallery-koreren.webp",
        video: "/videos/gallery/gallery-koreren.mp4",
      },
    ],
    [
      {
        title: "COSMETICS",
        sub: ["Cosmetic brand"],
        image: "/images/gallery/gallery-cosmetic.webp",
        video: "/videos/gallery/gallery-cosmetic.mp4",
      },
    ],
    [
      {
        title: "IT Devlopment",
        sub: ["Website", "CRM"],
        image: "/images/gallery/gallery-ITdevelop.webp",
        video: "/videos/gallery/gallery-ITdevelop.mp4",
      },
    ],
  ],
  historySection: [
    //순서대로 화면에 적용
    {
      year: 2025.07,
      title: "온천수 공급  MOU 계약 체결",
    },
    {
      year: 2025.05,
      title: "저주파 미용기기 독점 개발 착수",
    },
    {
      year: 2025.04,
      title: "하남 공장 오픈",
    },
    {
      year: 2025.01,
      title: "평택 공장 오픈",
    },
    {
      year: 2024.12,
      title: "제품 회원 관리 프로그램 제작",
    },
    {
      year: 2024.11,
      title: "(주)에이치피이앤씨 건설 웹사이트 제작",
    },
    {
      year: 2024.08,
      title: "저주파 미용기기 베타테스팅 시작",
    },
    {
      year: 2024.07,
      title: "GSLTECH 창립",
    },
  ],
  expertiseSection: {
    default_description: [
      "TECHNOLOGY",
      "QUALITY",
      "SOLUTION",
      "EXPERIENCE",
      "SOCIALVALUE",
      "INTEGRATION",
      "INNOVATION",
    ],
    default_video: "/videos/expertise/technology.mp4",
    //title과 description, video는 각 순서에 대응
    title: [
      "Product R&D",
      "Quality Management",
      "Manufacturing",
      "Website",
      "Application",
    ],
    description: [
      [
        "INNOVATION",
        "STRATEGY",
        "RESEACH",
        "DEVELOPMENT",
        "TECHNOLOGY",
        "SOLUTION",
        "CONCEPT",
      ],
      [
        "QUALITY",
        "ASSURANCE",
        "CONTROL",
        "TESTING",
        "STANDARD",
        "SAFETY",
        "COMPLIANCE",
        "RELIABILITY",
      ],
      ["PRODUCTION", "PRECISION", "EFFICIENCY", "ASSEMBLY", "CHAIN"],
      ["UX/UI", "BRADN", "RESPONSIVE", "DESIGN", "DIGITAL"],
      [
        "SOFTWARE",
        "DASHBOARD",
        "DATA",
        "ANALYTICS",
        "MOBILE",
        "USER ENGAGEMENT",
        "MANAGEMENT SYSTEM",
      ],
    ],
    video: [
      "/videos/expertise/productRD.mp4",
      "/videos/expertise/quality.mp4",
      "/videos/expertise/manufacturing.mp4",
      "/videos/expertise/website.mp4",
      "/videos/expertise/application.mp4",
    ],
  },
  partnersSection: [
    {
      name: "GSLAND",
      img: "/images/partner/gsland.webp",
      link: "https://www.gsland-global.com",
    },
  ],
  footerSection: {
    text: "Got a project in mind? We're listening :)",
    breakPoint: ["mind?"],
    email: "gslt@gsland.tech",
    tel: "02-515-2026",
    address: "서울특별시 강남구 언주로 634",
    addressDetail: "4층, 지에스엘텍",
    mobileVideo: "/videos/footer/mobile-footer.mp4",
    pcVideo: "/videos/footer/pc-footer.mp4",
  },
  modal: {
    //gallery와 history 색션으로 구분
    //위에 작성한 각 gallery와 hisroty Section DATA의 array idx에 대응
    //desc.texts.pc&mobile분리
    //album은 needTap false면 content.default에 바로 채워준거 반영
    //need Tap true면 taps : [itemName1, itemName2] 탭 배열에 분리할 이름 적어주고
    //content 는 itemName1, itemName2를 각자 키값으로 구성해주면 됨.
    gallery: [
      {
        info: {
          //btnText : null 로 할 경우 btn 영역 삭제
          types: ["Healthcare brand"],
          title: "KOREREN",
          // link: "https://homerun.today/",
          btnText: null,
        },
        mainImg: "/images/modal/gallery/main/modal-main-koreren.webp",
        desc: {
          texts: {
            pc: [
              "모든 웰니스의 시작점인 중심(core)을 다시 세우기 위해, 헬스케어 브랜드 KOREREN을 선보입니다. ",
              "한국의 기술력으로 완성된 KOREREN 제품들은 신체의 긴장을 완화하고 내면의 에너지를 회복시켜",
              "몸의 자연스러운 리듬과 균형을 되찾는 근본적인 솔루션을 제공합니다.",
              " ",
              "현재 KOREREN의 철학을 담은 디퍼웨이브를 시작으로 더 다양한 웰니스 솔루션을 선보일 것입니다.",
            ],
            mobile: [
              "모든 웰니스의 시작점인 중심(core)을",
              "다시 세우기 위해, 헬스케어 브랜드",
              "KOREREN을 선보입니다. ",
              " ",
              "한국의 기술력으로 완성된 KOREREN 제품들은",
              "신체의 긴장을 완화하고 내면의 에너지를 회복시켜",
              "몸의 자연스러운 리듬과 균형을 되찾는",
              "근본적인 솔루션을 제공합니다.",
              " ",
              "현재 KOREREN의 철학을 담은",
              "디퍼웨이브를 시작으로 더 다양한",
              "웰니스 솔루션을 선보일 것입니다.",
            ],
          },
          points: [
            "#회복",
            "#균형",
            "#휴식",
            "#에너지",
            "#Korea",
            "#Core",
            "Renew",
          ],
        },
        album: {
          needTap: false,
          content: {
            default: [
              //type은 꼭 image와 video 로 구분
              [
                {
                  type: "image",
                  src: "/images/modal/gallery/album/modal-album-koreren1.webp",
                },
              ],
              [
                {
                  type: "image",
                  src: "/images/modal/gallery/album/modal-album-koreren2.webp",
                },
              ],
            ],
          },
        },
      },
      {
        info: {
          //btnText : null 로 할 경우 btn 영역 삭제
          types: ["Cosmetic brand"],
          title: "COSMETICS",
          // link: "https://www.youtube.com/",
          btnText: null,
        },
        mainImg: "/images/modal/gallery/main/modal-main-cosmetic.webp",
        desc: {
          texts: {
            pc: [
              "자연이 주는 순수한 에너지를 피부에 온전히 전달하기 위해, 새로운 뷰티 솔루션을 연구합니다. ",
              "미네랄이 풍부한 온천수와 검증된 천연 성분을 바탕으로 비누부터 스킨케어, 화장품 까지",
              "피부에 가장 이상적인 제품 라인업을 개발하고 있습니다.",
              "자연과 기술이 만나 탄생한 차별화된 효능으로, 피부 본연의 건강함을 되찾는 경험을 약속합니다.",
            ],
            mobile: [
              "자연이 주는 순수한 에너지를",
              "피부에 온전히 전달하기 위해,",
              "새로운 뷰티 솔루션을 연구합니다. ",
              " ",
              "미네랄이 풍부한 온천수와",
              "검증된 천연 성분을 바탕으로",
              "비누부터 스킨케어, 화장품 까지",
              " ",
              "피부에 가장 이상적인 제품 라인업을 개발하고 있습니다.",
              "자연과 기술이 만나 탄생한 차별화된 효능으로,",
              "피부 본연의 건강함을 되찾는 경험을 약속합니다.",
            ],
          },
          points: ["#온천수", "#자연유래", "#미네랄", "#더마솔루션"],
        },
        album: {
          needTap: false,
          //type은 꼭 image와 video 로 구분
          content: {
            default: [
              [
                {
                  type: "image",
                  src: "/images/modal/gallery/album/modal-album-cosmetic1.webp",
                },
              ],
              [
                {
                  type: "video",
                  src: "/videos/modal/gallery/album/modal-album-cosmetic1.mp4",
                },
                {
                  type: "video",
                  src: "/videos/modal/gallery/album/modal-album-cosmetic2.mp4",
                },
              ],
              [
                {
                  type: "image",
                  src: "/images/modal/gallery/album/modal-album-cosmetic2.webp",
                },
              ],
            ],
          },
        },
      },
      {
        info: {
          //btnText : null 로 할 경우 btn 영역 삭제
          types: ["Website", "CRM"],
          title: "IT Devlopment",
          // link: "https://homerun.today/",
          btnText: null,
        },
        mainImg: "/images/modal/gallery/main/modal-main-ITdevelop.webp",
        desc: {
          texts: {
            pc: [
              "GSLTECH의 IT개발팀은 브랜드와 비즈니스 운영에 필요한 핵심 디지털 솔루션을 직접 개발합니다",
              "현재 브랜드 웹사이트와 효율적인 운영을 위한 관리 프로그램을 제작하고 있으며,",
              "파트너사의 요청에 따른 맞춤형 솔루션 개발도 지원합니다.",
              "향후 디바이스와 연동되는 모바일 앱까지 사업영역을 확장할 수 있는 잠재력을 보유하고 있습니다.",
            ],
            mobile: [
              "GSLTECH의 IT개발팀은 브랜드와 비즈니스 운영에",
              "필요한 핵심 디지털 솔루션을 직접 개발합니다",
              " ",
              "현재 브랜드 웹사이트와 효율적인 운영을 위한",
              "관리 프로그램을 제작하고 있으며,",
              "파트너사의 요청에 따른 맞춤형 솔루션 개발도 지원합니다.",
              " ",
              "향후 디바이스와 연동되는 모바일 앱까지",
              "사업영역을 확장할 수 있는 잠재력을 보유하고 있습니다.",
            ],
          },
          points: ["#정보", "#소프트웨어", "#디지털", "#관리"],
        },
        album: {
          //type은 꼭 image와 video 로 구분
          needTap: true,
          taps: ["Website", "CRM"],
          content: {
            Website: [
              [
                {
                  type: "image",
                  src: "/images/modal/gallery/album/modal-album-ITdevelop1.webp",
                  href: "http://hpenc.com/",
                },
              ],
            ],
            CRM: [
              [
                {
                  type: "image",
                  src: "/images/modal/gallery/album/modal-album-ITdevelop2.webp",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
