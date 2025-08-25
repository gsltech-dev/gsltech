export const homepageData = {
  introSection: {
    introWords: {
      left: "GSLTECH",
      right: ["TECHNOLOGY", "WELLNESS", "QUALITY OF LIFE"],
    },
    introText: {
      text: "Building a healthy foundation for your daily life, with technology and empathy",
      lineBreaks: {
        pc: ["foundation", "life,"],
        mobile: [
          "Combining",
          "and",
          "expertise,",
          "the",
          "of",
          "that",
          "their",
          "time",
        ],
      },
    },
  },
  gallerySection: [
    [
      {
        title: "KOREREN",
        sub: ["Healthcare brand"],
        image: "/images/gallery/gallery-item1.jpeg",
        video: "/videos/gallery/gallery-item1.mp4",
      },
    ],
    [
      {
        title: "COSMETICS",
        sub: ["Cosmetic brand"],
        image: "/images/gallery/gallery-item3.jpeg",
        video: "/videos/gallery/gallery-item3.mp4",
      },
    ],
    [
      {
        title: "IT Devlopment",
        sub: ["Website", "CRM"],
        image: "/images/gallery/gallery-item4.jpeg",
        video: "/videos/gallery/gallery-item4.mp4",
      },
    ],
  ],
  historySection: [
    //순서대로 화면에 적용
    {
      year: 2024.07,
      title: "GSLTECH 창립",
      mainImage: "/images/history/history-item1-main.jpeg",
      hoverImage: [
        "/images/history/history-item1-hover1.jpeg",
        "/images/history/history-item1-hover2.jpeg",
      ],
    },
    {
      year: 2024.08,
      title: "저주파 미용기기 베타테스팅 시작",
      mainImage: "/images/history/history-item2-main.jpeg",
      hoverImage: [
        "/images/history/history-item2-hover1.jpeg",
        "/images/history/history-item2-hover2.jpeg",
      ],
    },
    {
      year: 2024.11,
      title: "(주)에이치피이앤씨 건설 웹사이트 제작",
      mainImage: "/images/history/history-item3-main.jpeg",
      hoverImage: [
        "/images/history/history-item3-hover1.jpeg",
        "/images/history/history-item3-hover2.jpeg",
      ],
    },
    {
      year: 2024.12,
      title: "제품 회원 관리 프로그램 제작",
      mainImage: "/images/history/history-item4-main.jpeg",
      hoverImage: [
        "/images/history/history-item4-hover1.jpeg",
        "/images/history/history-item4-hover2.jpeg",
      ],
    },
    {
      year: 2025.01,
      title: "평택 공장 오픈",
      mainImage: "/images/history/history-item4-main.jpeg",
      hoverImage: [
        "/images/history/history-item4-hover1.jpeg",
        "/images/history/history-item4-hover2.jpeg",
      ],
    },
    {
      year: 2025.04,
      title: "하남 공장 오픈",
      mainImage: "/images/history/history-item4-main.jpeg",
      hoverImage: [
        "/images/history/history-item4-hover1.jpeg",
        "/images/history/history-item4-hover2.jpeg",
      ],
    },
    {
      year: 2025.05,
      title: "저주파 미용기기 독점 개발 착수",
      mainImage: "/images/history/history-item4-main.jpeg",
      hoverImage: [
        "/images/history/history-item4-hover1.jpeg",
        "/images/history/history-item4-hover2.jpeg",
      ],
    },
    {
      year: 2025.07,
      title: "온천수 공급  MOU 계약 체결",
      mainImage: "/images/history/history-item4-main.jpeg",
      hoverImage: [
        "/images/history/history-item4-hover1.jpeg",
        "/images/history/history-item4-hover2.jpeg",
      ],
    },
  ],
  expertiseSection: {
    default_description: [
      "TECHNOLOGY",
      "QUALITY",
      "SOLUTION",
      "EXPERIENCE",
      "SOCIAL VALUE",
      "INTEGRATION",
      "INNOVATION",
    ],
    default_video: "/videos/gallery/gallery-item3.mp4",
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
      ["PRODUCTION", "PRECISION", "EFFICIENCY", "ASSEMBLY", "SUPPLY CHAIN"],
      ["UX/UI", "BRADN IDENTITY", "RESPONSIVE", "DESIGN", "DIGITAL PLATFORM"],
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
      "/videos/expertise/expertise-item1.mp4",
      "/videos/expertise/expertise-item2.mp4",
      "/videos/expertise/expertise-item3.mp4",
      "/videos/expertise/expertise-item4.mp4",
      "/videos/expertise/expertise-item5.mp4",
      "/videos/expertise/expertise-item1.mp4",
      "/videos/expertise/expertise-item2.mp4",
    ],
  },
  partnersSection: [
    {
      name: "GSLAND",
      img: "/images/partner/kia.jpeg",
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
    gallery: [
      {
        info: {
          //btnText : null 로 할 경우 btn 영역 삭제
          types: ["Healthcare brand"],
          title: "KOREREN",
          link: "https://homerun.today/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item0.jpeg",
        desc: {
          texts: [
            "모든 웰니스의 시작점인 중심(core)을 다시 세우기 위해, 헬스케어 브랜드 KOREREN을 선보입니다. ",
            "한국의 기술력으로 완성된 KOREREN 제품들은 신체의 긴장을 완화하고 내면의 에너지를 회복시켜",
            "몸의 자연스러운 리듬과 균형을 되찾는 근본적인 솔루션을 제공합니다.",
            "현재 KOREREN의 철학을 담은 디퍼웨이브를 시작으로 더 다양한 웰니스 솔루션을 선보일 것입니다.",
          ],
          points: [
            "#회복",
            "#균형",
            "#휴식",
            "#에너지",
            "#Korea",
            "#Core",
            "Renew",
          ],
          // points: [
          //   { title: "#회복", text: "#균형" },
          //   {
          //     title: "#휴식",
          //     text: "#에너지",
          //   },
          //   { title: "#Korea", text: "#Core" },
          //   { title: "Renew", text: "Renew" },
          // ],
        },
        album: [
          //type은 꼭 image와 video 로 구분
          [
            {
              type: "image",
              src: "/images/modal/gallery/album/item0-1.jpeg",
            },
          ],
          [
            {
              type: "video",
              src: "/videos/modal/gallery/album/item0-2.mp4",
            },
          ],
          [
            {
              type: "video",
              src: "/videos/modal/gallery/album/item0-3.mp4",
            },
          ],
          [
            {
              type: "video",
              src: "/videos/modal/gallery/album/item0-4.mp4",
            },
            {
              type: "image",
              src: "/images/modal/gallery/album/item0-5.jpeg",
            },
          ],
          [
            {
              type: "image",
              src: "/images/modal/gallery/album/item0-6.jpeg",
            },
          ],
        ],
      },
      {
        info: {
          //btnText : null 로 할 경우 btn 영역 삭제
          types: ["Cosmetic brand"],
          title: "COSMETICS",
          link: "https://www.youtube.com/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item1.jpeg",
        desc: {
          texts: [
            "자연이 주는 순수한 에너지를 피부에 온전히 전달하기 위해, 새로운 뷰티 솔루션을 연구합니다. ",
            "미네랄이 풍부한 온천수와 검증된 천연 성분을 바탕으로 비누부터 스킨케어, 화장품 까지",
            "피부에 가장 이상적인 제품 라인업을 개발하고 있습니다.",
            "자연과 기술이 만나 탄생한 차별화된 효능으로, 피부 본연의 건강함을 되찾는 경험을 약속합니다.",
          ],
          points: ["#온천수", "#자연유래", "#미네랄", "#더마솔루션"],
          // points: [
          //   {
          //     title: "#온천수",
          //     text: "#자연유래",
          //   },
          //   { title: "#미네랄", text: "#더마솔루션" },
          // ],
        },
        album: [
          //type은 꼭 image와 video 로 구분
          [
            {
              type: "video",
              src: "/videos/modal/gallery/album/item1-1.mp4",
            },
          ],
          [
            {
              type: "video",
              src: "/videos/modal/gallery/album/item1-2.mp4",
            },
            {
              type: "video",
              src: "/videos/modal/gallery/album/item1-3.mp4",
            },
          ],
          [
            {
              type: "image",
              src: "/images/modal/gallery/album/item1-4.jpeg",
            },
          ],
          [
            {
              type: "video",
              src: "/videos/modal/gallery/album/item1-5.mp4",
            },
          ],
        ],
      },
      {
        info: {
          //btnText : null 로 할 경우 btn 영역 삭제
          types: ["Website", "CRM"],
          title: "IT Devlopment",
          link: "https://homerun.today/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item0.jpeg",
        desc: {
          texts: [
            "GSLTECH의 IT개발팀은 브랜드와 비즈니스 운영에 필요한 핵심 디지털 솔루션을 직접 개발합니다",
            "현재 브랜드 웹사이트와 효율적인 운영을 위한 관리 프로그램을 제작하고 있으며,",
            "파트너사의 요청에 따른 맞춤형 솔루션 개발도 지원합니다.",
            "향후 디바이스와 연동되는 모바일 앱까지 사업영역을 확장할 수 있는 잠재력을 보유하고 있습니다.",
          ],
          points: ["#정보", "#소프트웨어", "#디지털", "#관리"],

          // points: [
          //   { title: "#정보", text: "#소프트웨어" },
          //   {
          //     title: "#디지털",
          //     text: "#관리",
          //   },
          // ],
        },
        album: [
          //type은 꼭 image와 video 로 구분
          [
            {
              type: "image",
              src: "/images/modal/gallery/album/item0-1.jpeg",
            },
          ],
          [
            {
              type: "video",
              src: "/videos/modal/gallery/album/item0-2.mp4",
            },
          ],
          [
            {
              type: "video",
              src: "/videos/modal/gallery/album/item0-3.mp4",
            },
          ],
          [
            {
              type: "video",
              src: "/videos/modal/gallery/album/item0-4.mp4",
            },
            {
              type: "image",
              src: "/images/modal/gallery/album/item0-5.jpeg",
            },
          ],
          [
            {
              type: "image",
              src: "/images/modal/gallery/album/item0-6.jpeg",
            },
          ],
        ],
      },
    ],
    // history: [
    //   {
    //     info: {
    //       //btnText : null 로 할 경우 btn 영역 삭제
    //       types: ["3D", "WEBSITE"],
    //       title: "HOMERUN",
    //       link: "https://homerun.today/",
    //       btnText: "Visit website",
    //     },
    //     mainImg: "/images/modal/gallery/main/item0.jpeg",
    //     desc: {
    //       texts: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //         "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
    //       ],
    //       points: [
    //         { title: "ROLE", text: "UX-UI / 3D / Development" },
    //         {
    //           title: "AWARDS",
    //           text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
    //         },
    //         { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
    //         { title: "PROJECT DURATION", text: "2 months" },
    //       ],
    //     },
    //     album: [
    //       //type은 꼭 image와 video 로 구분
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-1.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-2.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-3.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-4.mp4",
    //         },
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-5.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-6.jpeg",
    //         },
    //       ],
    //     ],
    //   },
    //   {
    //     info: {
    //       //btnText : null 로 할 경우 btn 영역 삭제
    //       types: ["BRANDING", "WEBSITE"],
    //       title: "Boa Concept",
    //       link: "https://www.youtube.com/",
    //       btnText: "Visit website",
    //     },
    //     mainImg: "/images/modal/gallery/main/item1.jpeg",
    //     desc: {
    //       texts: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //         "Voluptas perferendis fugit cumque corrupti? Voluptatum facere",
    //         " obcaecati odio itaque repellendus eius praesentium beatae!",
    //       ],
    //       points: [
    //         {
    //           title: "ROLE",
    //           text: "Art Direction / UX-UI / Copywriting/ Development",
    //         },
    //         { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
    //         {
    //           title: "CREDITS",
    //           text: "In partnership with Sapag",
    //         },
    //         { title: "PROJECT DURATION", text: "6 months" },
    //       ],
    //     },
    //     album: [
    //       //type은 꼭 image와 video 로 구분
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-1.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-2.mp4",
    //         },
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-3.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item1-4.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-5.mp4",
    //         },
    //       ],
    //     ],
    //   },
    //   {
    //     info: {
    //       //btnText : null 로 할 경우 btn 영역 삭제
    //       types: ["3D", "WEBSITE"],
    //       title: "HOMERUN",
    //       link: "https://homerun.today/",
    //       btnText: "Visit website",
    //     },
    //     mainImg: "/images/modal/gallery/main/item0.jpeg",
    //     desc: {
    //       texts: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //         "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
    //       ],
    //       points: [
    //         { title: "ROLE", text: "UX-UI / 3D / Development" },
    //         {
    //           title: "AWARDS",
    //           text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
    //         },
    //         { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
    //         { title: "PROJECT DURATION", text: "2 months" },
    //       ],
    //     },
    //     album: [
    //       //type은 꼭 image와 video 로 구분
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-1.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-2.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-3.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-4.mp4",
    //         },
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-5.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-6.jpeg",
    //         },
    //       ],
    //     ],
    //   },
    //   {
    //     info: {
    //       //btnText : null 로 할 경우 btn 영역 삭제
    //       types: ["BRANDING", "WEBSITE"],
    //       title: "Boa Concept",
    //       link: "https://www.youtube.com/",
    //       btnText: "Visit website",
    //     },
    //     mainImg: "/images/modal/gallery/main/item1.jpeg",
    //     desc: {
    //       texts: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //         "Voluptas perferendis fugit cumque corrupti? Voluptatum facere",
    //         " obcaecati odio itaque repellendus eius praesentium beatae!",
    //       ],
    //       points: [
    //         {
    //           title: "ROLE",
    //           text: "Art Direction / UX-UI / Copywriting/ Development",
    //         },
    //         { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
    //         {
    //           title: "CREDITS",
    //           text: "In partnership with Sapag",
    //         },
    //         { title: "PROJECT DURATION", text: "6 months" },
    //       ],
    //     },
    //     album: [
    //       //type은 꼭 image와 video 로 구분
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-1.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-2.mp4",
    //         },
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-3.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item1-4.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-5.mp4",
    //         },
    //       ],
    //     ],
    //   },
    //   {
    //     info: {
    //       //btnText : null 로 할 경우 btn 영역 삭제
    //       types: ["3D", "WEBSITE"],
    //       title: "HOMERUN",
    //       link: "https://homerun.today/",
    //       btnText: "Visit website",
    //     },
    //     mainImg: "/images/modal/gallery/main/item0.jpeg",
    //     desc: {
    //       texts: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //         "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
    //       ],
    //       points: [
    //         { title: "ROLE", text: "UX-UI / 3D / Development" },
    //         {
    //           title: "AWARDS",
    //           text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
    //         },
    //         { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
    //         { title: "PROJECT DURATION", text: "2 months" },
    //       ],
    //     },
    //     album: [
    //       //type은 꼭 image와 video 로 구분
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-1.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-2.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-3.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-4.mp4",
    //         },
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-5.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-6.jpeg",
    //         },
    //       ],
    //     ],
    //   },
    //   {
    //     info: {
    //       //btnText : null 로 할 경우 btn 영역 삭제
    //       types: ["BRANDING", "WEBSITE"],
    //       title: "Boa Concept",
    //       link: "https://www.youtube.com/",
    //       btnText: "Visit website",
    //     },
    //     mainImg: "/images/modal/gallery/main/item1.jpeg",
    //     desc: {
    //       texts: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //         "Voluptas perferendis fugit cumque corrupti? Voluptatum facere",
    //         " obcaecati odio itaque repellendus eius praesentium beatae!",
    //       ],
    //       points: [
    //         {
    //           title: "ROLE",
    //           text: "Art Direction / UX-UI / Copywriting/ Development",
    //         },
    //         { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
    //         {
    //           title: "CREDITS",
    //           text: "In partnership with Sapag",
    //         },
    //         { title: "PROJECT DURATION", text: "6 months" },
    //       ],
    //     },
    //     album: [
    //       //type은 꼭 image와 video 로 구분
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-1.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-2.mp4",
    //         },
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-3.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item1-4.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item1-5.mp4",
    //         },
    //       ],
    //     ],
    //   },
    //   {
    //     info: {
    //       //btnText : null 로 할 경우 btn 영역 삭제
    //       types: ["3D", "WEBSITE"],
    //       title: "HOMERUN",
    //       link: "https://homerun.today/",
    //       btnText: "Visit website",
    //     },
    //     mainImg: "/images/modal/gallery/main/item0.jpeg",
    //     desc: {
    //       texts: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    //         "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
    //       ],
    //       points: [
    //         { title: "ROLE", text: "UX-UI / 3D / Development" },
    //         {
    //           title: "AWARDS",
    //           text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
    //         },
    //         { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
    //         { title: "PROJECT DURATION", text: "2 months" },
    //       ],
    //     },
    //     album: [
    //       //type은 꼭 image와 video 로 구분
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-1.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-2.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-3.mp4",
    //         },
    //       ],
    //       [
    //         {
    //           type: "video",
    //           src: "/videos/modal/gallery/album/item0-4.mp4",
    //         },
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-5.jpeg",
    //         },
    //       ],
    //       [
    //         {
    //           type: "image",
    //           src: "/images/modal/gallery/album/item0-6.jpeg",
    //         },
    //       ],
    //     ],
    //   },
    // ],
  },
};
