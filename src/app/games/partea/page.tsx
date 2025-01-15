"use client";

import Link from "next/link";
import { FC } from "react";


export default function GamePartea() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <div className="h-20 flex justify-center items-center z-10">
        <h1 className="text-4xl font-bold text-white/70 z-10">Partea</h1>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center gap-10 z-10">
      <Link href={"/games/partea/policy"} className="w-20 h-20 bg-orange-600 font-bold flex justify-center items-center rounded-md"><p>Privacy Policy</p></Link>

      </div>
    </main>
  )
}
