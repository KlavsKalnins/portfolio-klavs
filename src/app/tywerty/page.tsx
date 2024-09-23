"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import React from "react";
import { TypingGame } from "./core/TypingGame";
import { appTitle } from "./core/logic";
import { Prompting } from "./core/Prompting";

const inter = Inter({ subsets: ["latin"] });

enum GameState {
  Prompting,
  Playing,
  Finished,
}

export default function Home() {
  const [gameState, setgameState] = useState<GameState>(GameState.Prompting);
  const [generatedResponse, setgeneratedResponse] = useState<string>("");
  const [timeRecordInSeconds, settimeRecordInSeconds] = useState<number>();

  useEffect(() => {
    if (generatedResponse.length > 1) {
    }
  }, [generatedResponse]);

  function handlePromptResponse(text) {
    const sanatizedTextForGame = text.replace(/\n/g, " ");
    setgeneratedResponse(sanatizedTextForGame);
    setgameState(GameState.Playing);
  }

  function handleGameWin(time) {
    const timeInSeconds = time / 1000;
    settimeRecordInSeconds(timeInSeconds);
    setgeneratedResponse("");
    setgameState(GameState.Finished);
    console.warn(`completed in ${timeInSeconds}s`);
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-8 p-8 sm:p-24 ${inter.className}`}
    >
      {gameState === GameState.Prompting && (
        <>
          <div className="w-full flex flex-col sm:flex-row justify-between min-h-[450px] sm:min-h-[500px]">
            <div className="w-full bg-red-400/0 items-center justify-center flex-col sm:flex-row sm:hidden">
              <img
                src="/tywerty/keyboard_logo.png"
                className="w-full h-auto hover:rotate-[1deg] duration-500 hover:translate-y-4 brightness-75 hover:brightness-110"
              />
            </div>
            <div className="w-full bg-red-400/0">
              <div className="h-8"></div>
              <div className="w-full justify-center items-center flex flex-col">
                <h1 className="font-bold text-6xl">{appTitle}</h1>
                <div className="h-2"></div>
                <p className="font-medium sm:ml-14">
                  Welcome to {appTitle}, the ultimate playground for writers and
                  speed demons! Here, you can:
                </p>
                <div className="h-1"></div>
                <ul className="list-disc mx-0">
                  <li>Craft captivating stories</li>
                  <li>Real-time typing battles</li>
                  <li>Sharpen your skills</li>
                  <li>Global leaderboard</li>
                </ul>
              </div>
            </div>
            <div className="w-full bg-red-400/0 items-center justify-center hidden sm:flex ">
              <img
                src="/tywerty/keyboard_logo_v.png"
                className="w-1/3 h-auto hover:rotate-[10deg] duration-500 hover:translate-x-20 brightness-75 hover:brightness-110"
              />
            </div>
          </div>
          <Prompting onComplete={(text) => handlePromptResponse(text)} />
        </>
      )}

      {gameState === GameState.Playing && (
        <TypingGame
          fullText={generatedResponse}
          onComplete={(time) => handleGameWin(time)}
        />
      )}

      {gameState === GameState.Finished && (
        <div className="flex flex-col gap-4">
          <p>completed in {timeRecordInSeconds}s</p>
          <button
            className="bg-slate-800 p-2"
            onClick={() => setgameState(GameState.Prompting)}
          >
            Go Prompting
          </button>
        </div>
      )}
    </main>
  );
}
