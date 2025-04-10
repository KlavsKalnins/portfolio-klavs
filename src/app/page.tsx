"use client";
import Image from 'next/image'
import Link from 'next/link';


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex flex-col gap-2">

      <div className="absolute inset-0 bg-[url('/partea/line_art.svg')] bg-cover bg-center opacity-10 z-0" />

        {/* <div className="fixed left-0 top-0 flex w-full justify-center gap-2 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div>Klāvs Kalniņš</div>
        </div> */}
        {/* <div className="bg-red-950 gap-4 fixed bottom-0 left-0 flex h-20 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div>Lietotnes</div>
          <div>Lietotnes</div>
        </div> */}
        {/* <p className='text-base'>Creatively Versatile Programmer</p> */}
        <p className='text-xl'>Klāvs Kalniņš</p>
        <Link
          href="https://www.linkedin.com/in/kl%C4%81vs-kalni%C5%86%C5%A1-877633207"
          className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white/80 hover:bg-white/20 transition-colors z-10"
        >
          Linkedin
        </Link>
        <Link
          href="/games"
          className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white/80 hover:bg-white/20 transition-colors z-10"
        >
          Games
        </Link>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div>
    </main>
  )
}
