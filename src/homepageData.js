export const homepageData = {
  introSection: {
    introWords: {
      left: "test STUDIO",
      right: ["test", "INGENIOUS", "AGILE"],
    },
    introText: {
      text: "Combining creativity and expertise, we reveal the character of brands that stand out in their time.",
      lineBreaks: {
        pc: ["expertise,", "that"],
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
        title: "Homerun",
        sub: ["3D", "Website"],
        image: "/images/gallery/gallery-item1.jpeg",
        video: "/videos/gallery/gallery-item1.mp4",
      },
      {
        title: "Baa Concept",
        sub: ["Branding", "Website"],
        image: "/images/gallery/gallery-item2.jpeg",
        video: "/videos/gallery/gallery-item2.mp4",
      },
    ],
    [
      {
        title: "Agore space",
        sub: ["Branding", "Website", "Server", "Print"],
        image: "/images/gallery/gallery-item3.jpeg",
        video: "/videos/gallery/gallery-item3.mp4",
      },
    ],
    [
      {
        title: "Airporting",
        sub: ["Website", "Service design"],
        image: "/images/gallery/gallery-item4.jpeg",
        video: "/videos/gallery/gallery-item4.mp4",
      },
      {
        title: "Chais d'Oeurve",
        sub: ["App", "Shopify"],
        image: "/images/gallery/gallery-item5.jpeg",
        video: "/videos/gallery/gallery-item5.mp4",
      },
    ],
  ],
  historySection: [
    //순서대로 화면에 적용
    {
      year: 2023,
      title: "bloo",
      mainImage: "/images/history/history-item1-main.jpeg",
      hoverImage: [
        "/images/history/history-item1-hover1.jpeg",
        "/images/history/history-item1-hover2.jpeg",
      ],
    },
    {
      year: 2023,
      title: "Encounter Stories",
      mainImage: "/images/history/history-item2-main.jpeg",
      hoverImage: [
        "/images/history/history-item2-hover1.jpeg",
        "/images/history/history-item2-hover2.jpeg",
      ],
    },
    {
      year: 2024,
      title: "Chlinque Oraline",
      mainImage: "/images/history/history-item3-main.jpeg",
      hoverImage: [
        "/images/history/history-item3-hover1.jpeg",
        "/images/history/history-item3-hover2.jpeg",
      ],
    },
    {
      year: 2025,
      title: "Spage",
      mainImage: "/images/history/history-item4-main.jpeg",
      hoverImage: [
        "/images/history/history-item4-hover1.jpeg",
        "/images/history/history-item4-hover2.jpeg",
      ],
    },
    {
      year: 2026,
      title: "Spage",
      mainImage: "/images/history/history-item4-main.jpeg",
      hoverImage: [
        "/images/history/history-item4-hover1.jpeg",
        "/images/history/history-item4-hover2.jpeg",
      ],
    },
    {
      year: 2026,
      title: "Spage",
      mainImage: "/images/history/history-item4-main.jpeg",
      hoverImage: [
        "/images/history/history-item4-hover1.jpeg",
        "/images/history/history-item4-hover2.jpeg",
      ],
    },
    {
      year: 2026,
      title: "Spage",
      mainImage: "/images/history/history-item4-main.jpeg",
      hoverImage: [
        "/images/history/history-item4-hover1.jpeg",
        "/images/history/history-item4-hover2.jpeg",
      ],
    },
  ],
  expertiseSection: {
    default_description: [
      "STRATEGY",
      "BRANDING",
      "CONCEPT",
      "AD",
      "TON OF VOICE",
      "PRINT",
      "UX/UI",
      "3D / MOTION",
      "ILLUSTRATION",
    ],
    default_video: "/videos/gallery/gallery-item3.mp4",
    //title과 description, video는 각 순서에 대응
    title: [
      "Branding",
      "Website",
      "Service desgin",
      "Web experiment",
      "E-commerce",
      "3D & motion",
      "Social media",
    ],
    description: [
      [
        "BRANDING",
        "COULEURS",
        "TYPOGRAPHIE",
        "TONALITÉ",
        "ICONOGRAPHIE",
        "PRINT",
        "CHARTE GRAPHIQUE",
        "PPTX TEMPLATE",
      ],
      [
        "WEBSITE",
        "ABOUT",
        "SERVICES",
        "PORTFOLIO",
        "CONTACT",
        "BLOG",
        "FAQ",
        "TERMS & CONDITIONS",
        "PRIVACY POLICY",
      ],
      ["SERVICEDESIGN", "ABOUT", "PORTFOLIO", "FAQ"],
      ["WEBEXPER", "PORTFOLIO", "BLOG"],
      ["E_COMMERCE", "FAQ", "TERMS & CONDITIONS", "PRIVACY POLICY"],
      ["3DMOTION", "PORTFOLIO", "ABOUT"],
      ["SOCIAL", "ABOUT", "CONTACT"],
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
      name: "KIA",
      img: "/images/partner/kia.jpeg",
      link: "https://www.kia.com/kr",
    },
    {
      name: "HYUNDDAI",
      img: "/images/partner/hyundai.jpeg",
      link: "https://www.hyundai.com/kr",
    },
    {
      name: "POSCO",
      img: "/images/partner/posco.jpeg",
      link: "https://www.posco.co.kr/homepage/docs/kor7/jsp/s91a0000001i.jsp",
    },
    {
      name: "PLATECH",
      img: "/images/partner/plantech.jpeg",
      link: "https://epro.poscoplantec.co.kr/",
    },
  ],
  footerSection: {
    text: "Got a project in mind? We're listening :)",
    breakPoint: ["mind?"],
    email: "gsltech@gsltech.com",
    tel: "02-515-2026",
    address: "서울특별시 강남구 학동로 309",
    addressDetail: "6층, 지에스엘택",
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
          types: ["3D", "WEBSITE"],
          title: "HOMERUN",
          link: "https://homerun.today/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item0.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            { title: "ROLE", text: "UX-UI / 3D / Development" },
            {
              title: "AWARDS",
              text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            { title: "PROJECT DURATION", text: "2 months" },
          ],
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
          types: ["BRANDING", "WEBSITE"],
          title: "Boa Concept",
          link: "https://www.youtube.com/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item1.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere",
            " obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            {
              title: "ROLE",
              text: "Art Direction / UX-UI / Copywriting/ Development",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            {
              title: "CREDITS",
              text: "In partnership with Sapag",
            },
            { title: "PROJECT DURATION", text: "6 months" },
          ],
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
          types: ["3D", "WEBSITE"],
          title: "HOMERUN",
          link: "https://homerun.today/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item0.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            { title: "ROLE", text: "UX-UI / 3D / Development" },
            {
              title: "AWARDS",
              text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            { title: "PROJECT DURATION", text: "2 months" },
          ],
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
          types: ["BRANDING", "WEBSITE"],
          title: "Boa Concept",
          link: "https://www.youtube.com/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item1.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere",
            " obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            {
              title: "ROLE",
              text: "Art Direction / UX-UI / Copywriting/ Development",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            {
              title: "CREDITS",
              text: "In partnership with Sapag",
            },
            { title: "PROJECT DURATION", text: "6 months" },
          ],
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
          types: ["3D", "WEBSITE"],
          title: "HOMERUN",
          link: "https://homerun.today/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item0.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            { title: "ROLE", text: "UX-UI / 3D / Development" },
            {
              title: "AWARDS",
              text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            { title: "PROJECT DURATION", text: "2 months" },
          ],
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
    history: [
      {
        info: {
          //btnText : null 로 할 경우 btn 영역 삭제
          types: ["3D", "WEBSITE"],
          title: "HOMERUN",
          link: "https://homerun.today/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item0.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            { title: "ROLE", text: "UX-UI / 3D / Development" },
            {
              title: "AWARDS",
              text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            { title: "PROJECT DURATION", text: "2 months" },
          ],
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
          types: ["BRANDING", "WEBSITE"],
          title: "Boa Concept",
          link: "https://www.youtube.com/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item1.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere",
            " obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            {
              title: "ROLE",
              text: "Art Direction / UX-UI / Copywriting/ Development",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            {
              title: "CREDITS",
              text: "In partnership with Sapag",
            },
            { title: "PROJECT DURATION", text: "6 months" },
          ],
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
          types: ["3D", "WEBSITE"],
          title: "HOMERUN",
          link: "https://homerun.today/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item0.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            { title: "ROLE", text: "UX-UI / 3D / Development" },
            {
              title: "AWARDS",
              text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            { title: "PROJECT DURATION", text: "2 months" },
          ],
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
          types: ["BRANDING", "WEBSITE"],
          title: "Boa Concept",
          link: "https://www.youtube.com/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item1.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere",
            " obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            {
              title: "ROLE",
              text: "Art Direction / UX-UI / Copywriting/ Development",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            {
              title: "CREDITS",
              text: "In partnership with Sapag",
            },
            { title: "PROJECT DURATION", text: "6 months" },
          ],
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
          types: ["3D", "WEBSITE"],
          title: "HOMERUN",
          link: "https://homerun.today/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item0.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            { title: "ROLE", text: "UX-UI / 3D / Development" },
            {
              title: "AWARDS",
              text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            { title: "PROJECT DURATION", text: "2 months" },
          ],
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
          types: ["BRANDING", "WEBSITE"],
          title: "Boa Concept",
          link: "https://www.youtube.com/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item1.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere",
            " obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            {
              title: "ROLE",
              text: "Art Direction / UX-UI / Copywriting/ Development",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            {
              title: "CREDITS",
              text: "In partnership with Sapag",
            },
            { title: "PROJECT DURATION", text: "6 months" },
          ],
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
          types: ["3D", "WEBSITE"],
          title: "HOMERUN",
          link: "https://homerun.today/",
          btnText: "Visit website",
        },
        mainImg: "/images/modal/gallery/main/item0.jpeg",
        desc: {
          texts: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Voluptas perferendis fugit cumque corrupti? Voluptatum facere obcaecati odio itaque repellendus eius praesentium beatae!",
          ],
          points: [
            { title: "ROLE", text: "UX-UI / 3D / Development" },
            {
              title: "AWARDS",
              text: "SOTD AWWWARDS - FWA - CSS DESIGN - GSAP",
            },
            { title: "SOLUTIONS", text: "stroyblock / Netilfy / spline" },
            { title: "PROJECT DURATION", text: "2 months" },
          ],
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
  },
};
