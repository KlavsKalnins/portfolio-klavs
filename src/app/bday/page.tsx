"use client";

import React, { useEffect } from "react";
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
    headerText: "0.0.1 = 14:00 - Kartings.lv",
    headerHref:
      "https://www.google.com/maps/place/Kartings.lv+Kartinga+Halle/@56.9757236,24.1607293,17z/data=!4m6!3m5!1s0x46eecf05506c65ad:0xe4a7e388505727b1!8m2!3d56.9757207!4d24.1633096!16s%2Fg%2F11vsv4cz1x?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D",
    image: "/bday/spaceRacer.jpg",
    imageStyle: "",
  },
  {
    headerText: "0.0.2 = 16:00 - Picu Meistarklase",
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

const shuffleArray = (array: string[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap
  }
  console.log("shuffled");
  console.log(shuffledArray.map((prompt) => `"${prompt}"`).join(",\n"));
  return shuffledArray;
};

const copyFromGoogleForum: string = `
<div class="PlcjTc"><div class="NC79P">I’ve smashed my head onto an apple 3 times</div><div class="NC79P">Man ir bijis haskijs</div><div class="NC79P">Es izdzertu 3 kafija brikastīs</div><div class="NC79P">i have crashed a car while drunk</div><div class="NC79P">I don't associate with Niggers</div></div>
<div class="PlcjTc"><div class="NC79P">I’ve fucked in līvu akvaparks</div><div class="NC79P">Es nekad neesmu bijusi Igaunijā</div><div class="NC79P">Esmu lecis no 12m trampalīna</div><div class="NC79P">i swam in 6 degrees in Gauja</div><div class="NC79P">Im a night person</div></div>
<div class="PlcjTc"><div class="NC79P">I don’t like cats</div><div class="NC79P">Es neesmu salauzusi nevienu kaulu</div><div class="NC79P">Esmu iesprūdis liftā </div><div class="NC79P">I have had gonorhea</div><div class="NC79P">I tried heroine </div></div>
`;

const promptsTruthsAndLies: string[] = [
  "Esmu lecis no 12m trampalīna",
  "I don’t like cats",
  "Im a night person",
  "Es nekad neesmu bijusi Igaunijā",
  "i have crashed a car while drunk",
  "Man ir bijis haskijs",
  "Man agrāk ļoti raustijās valoda",
  "I tried heroine",
  "i swam in 6 degrees in Gauja",
  "Es izdzertu 3 kafija brikastīs",
  "I’ve fucked in līvu akvaparks",
  "Es neesmu salauzusi nevienu kaulu",
  "I have had gonorhea",
  "Es ienīstu androidus",
  "I’ve smashed my head onto an apple 3 times",
  "Es māku taisīt cocktails",
  "Esmu piedalijies florbola sacensībās",
  "Esmu iesprūdis liftā",
];

export default function Page() {
  // const [promptsTruthsAndLies, setPromptsTruthsAndLies] = useState<string[]>(promptsTruthsAndLies);

  const [cardIndex, setcardIndex] = useState(0);
  const [truthAndLiesEnabled, settruthAndLiesEnabled] = useState(false);
  const [truthAndLiesIndex, settruthAndLiesIndex] = useState(0);

  // useEffect(() => {
  //   const tempDiv = document.createElement("div");
  //   tempDiv.innerHTML = copyFromGoogleForum;

  //   // Select all divs with class NC79P (ignore classes, rely on the structure)
  //   const divs = tempDiv.querySelectorAll("div.NC79P");

  //   // Extract text content from each NC79P div
  //   const extractedText = Array.from(divs).map((div) => div.textContent || "");

  //   // Update the state with the extracted text
  //   console.log("From google docs");
  //   console.log(extractedText);
  //   shuffleArray(extractedText);
  //   // Update the state with the extracted text
  //   setPromptsTruthsAndLies(extractedText);
  // }, []);

  const currentDate = new Date();
  const targetDate = new Date("2024-10-06T12:00:00");

  return (
    <main className="flex h-full flex-col items-center justify-between p-4 bg-white max-w-[600px]">
      <div className="z-10 h-full max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-2">
        {truthAndLiesEnabled && (
          <>
            <div className="relative w-full h-[100%] bg-black rounded-lg p-8 min-h-[70vh] flex flex-col justify-between">
              <div className="absolute top-4 left-4 w-10 h-10 bg-red-500 rotate-45"></div>
              <div className="absolute top-4 left-4 w-10 h-10 flex justify-center items-center text-xl font-bold">
                <p>{truthAndLiesIndex + 1}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-red-500 rotate-45"></div>
              <div className="absolute top-4 right-4 w-10 h-10 flex justify-center items-center text-xl font-bold">
                <p>{truthAndLiesIndex + 1}</p>
              </div>
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-red-500 rotate-45"></div>
              <div className="absolute bottom-4 left-4 w-10 h-10 flex justify-center items-center text-xl font-bold">
                <p>{truthAndLiesIndex + 1}</p>
              </div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-red-500 rotate-45"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 flex justify-center items-center text-xl font-bold">
                <p>{truthAndLiesIndex + 1}</p>
              </div>

              <div className="h-20"></div>
              <p className="text-xl text-center">
                {promptsTruthsAndLies[truthAndLiesIndex]}
              </p>
              <div className="w-full flex justify-center gap-4 mb-16">
                <button
                  className={`bg-red-900 p-4 rounded-3xl font-extrabold text-xl cursor-pointer text-center ${
                    truthAndLiesIndex <= 0 && "opacity-50"
                  }`}
                  disabled={truthAndLiesIndex <= 0}
                  onClick={() => {
                    settruthAndLiesIndex(
                      truthAndLiesIndex <= 0 ? 0 : truthAndLiesIndex - 1
                    );
                  }}
                >
                  Prev Truth
                </button>
                <button
                  className={`bg-red-900 p-4 rounded-3xl font-extrabold text-xl cursor-pointer ${
                    truthAndLiesIndex >= promptsTruthsAndLies.length - 1 &&
                    "opacity-50"
                  }`}
                  disabled={
                    truthAndLiesIndex >= promptsTruthsAndLies.length - 1
                  }
                  onClick={() => {
                    settruthAndLiesIndex(
                      truthAndLiesIndex >= promptsTruthsAndLies.length - 1
                        ? promptsTruthsAndLies.length - 1
                        : truthAndLiesIndex + 1
                    );
                  }}
                >
                  Next Truth
                </button>
              </div>
            </div>
          </>
        )}

        {!truthAndLiesEnabled && (
          <>
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
                  profiles[cardIndex].imageStyle &&
                  profiles[cardIndex].imageStyle
                }`}
                style={{ backgroundImage: `url(${profiles[cardIndex].image})` }}
              ></div>
              <img
                src="/bday/6_okt.png"
                className="relative z-50 w-full h-auto"
              />
            </div>
          </>
        )}

        {/* {cardIndex >= 3 && currentDate >= targetDate && (
          <div
            className="bg-red-900 p-4 rounded-3xl font-extrabold text-xl cursor-pointer"
            onClick={() => {
              settruthAndLiesEnabled(!truthAndLiesEnabled);
            }}
          >
            {!truthAndLiesEnabled ? "Play Truths" : "Close Truths"}
          </div>
        )} */}
        {!truthAndLiesEnabled && (
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
        )}
      </div>

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div> */}
    </main>
  );
}
