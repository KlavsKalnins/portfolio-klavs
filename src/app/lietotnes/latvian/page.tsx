"use client";
import { Unity, useUnityContext } from "react-unity-webgl";


export default function Latvian() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/lietotnes/webgl/latvian/latvian.loader.js",
    dataUrl: "/lietotnes/webgl/latvian/latvian.data",
    frameworkUrl: "/lietotnes/webgl/latvian/latvian.framework.js",
    codeUrl: "/lietotnes/webgl/latvian/latvian.wasm",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center gap-2 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div>Klāvs Kalniņš</div>
        </div>
        <div className="bg-red-950 gap-4 fixed bottom-0 left-0 flex h-20 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div>Lietotnes</div>
          <div>Lietotnes</div>
        </div>
      </div> */}
        <Unity unityProvider={unityProvider}
          className='h-[80vh] aspect-unity'
        />

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div> */}
    </main>
  )
}
