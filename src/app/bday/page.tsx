"use client";

import { useState } from "react";

interface CardProps {
  headerText: string;
  headerHref: string;
  image?: string;
  imageStyle?: string;
}

const profiles: CardProps[] = [
  {
    headerText: "0.0.0 = Summary",
    image: "/bday/summary.png",
    headerHref: "#",
    imageStyle: "scale-[105%] ml-[10px] mt-[-4px]",
  },
  {
    headerText: "0.0.1 = 14:00 - Kartings.lv Kartinga Halle",
    headerHref:
      "https://www.google.com/maps/place/Kartings.lv+Kartinga+Halle/@56.9757236,24.1607293,17z/data=!4m6!3m5!1s0x46eecf05506c65ad:0xe4a7e388505727b1!8m2!3d56.9757207!4d24.1633096!16s%2Fg%2F11vsv4cz1x?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D",
    image: "/bday/spaceRacer.jpg",
    imageStyle: "",
  },
  {
    headerText: "0.0.2 = 16:00 - Picu Meistarklase Kuršos",
    headerHref: "https://maps.app.goo.gl/sjEt1ofTzoNFgJvNA",
    image: "/bday/pizza.png",
    imageStyle: "scale-[107%]",
  },
  {
    headerText: "0.0.3 = 18:00 - Gayming",
    headerHref: "https://maps.app.goo.gl/sjEt1ofTzoNFgJvNA",
    image: "/bday/badminton.jpg",
    imageStyle: "scale-[105%] rounded-full",
  },
];

export default function Page() {
  const [cardIndex, setcardIndex] = useState(0);
  return (
    // <main className="flex h-screen flex-col items-center gap-2 p-2 bg-white">
    //   <div className="w-full h-[100%] bg-black rounded-lg">
    //     <p>gjh</p>
    //     <div className="w-10 h-20 bg-red-500">a</div>
    //   </div>
    // </main>

    <main className="flex h-full flex-col items-center justify-between p-4 bg-white max-w-[600px]">
      <div className="z-10 h-full max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-2">
        <a
          className="w-full flex items-center gap-2"
          href={profiles[cardIndex].headerHref}
        >
          <img src="/bday/location.png" className="w-6 h-auto" />
          <p className="text-red-500 font- text-">
            {profiles[cardIndex].headerText}
          </p>
        </a>
        <a
          className="w-full flex items-center gap-2"
          href="https://forms.gle/EL96hskk7LPjs8Yp7"
        >
          <img src="/bday/excel.png" className="w-6 h-auto" />
          <p className="text-red-500">
            Click me! and fill out this form once
          </p>
        </a>

        <div className="relative w-full h-[100%] bg-black rounded-lg p-8">
          <div className="absolute top-4 left-4 w-10 h-10 bg-red-500 rotate-45"></div>
          <div className="absolute top-4 right-4 w-10 h-10 bg-red-500 rotate-45"></div>
          <div className="absolute bottom-4 left-4 w-10 h-10 bg-red-500 rotate-45"></div>

          <div
            className={`absolute w-[55%] h-[34%] top-[52%] left-[23%] rounded-full z-0 bg-center bg-cover ${
              profiles[cardIndex].imageStyle && profiles[cardIndex].imageStyle
            }`}
            style={{ backgroundImage: `url(${profiles[cardIndex].image})` }}
          ></div>
          <img src="/bday/6_okt.png" className="relative z-50 w-full h-auto" />
        </div>
        <div
          className="bg-red-900 p-4 rounded-3xl font-extrabold text-xl cursor-pointer"
          onClick={() => {
            if (cardIndex + 1 >= profiles.length) {
              setcardIndex(0);
            } else {
              setcardIndex(cardIndex + 1);
            }
          }}
        >
          {cardIndex >= profiles.length - 1 ? "back" : "continue"}
        </div>
      </div>

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div> */}
    </main>
  );
}