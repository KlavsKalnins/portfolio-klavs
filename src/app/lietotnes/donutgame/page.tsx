"use client";
import { Unity, useUnityContext } from "react-unity-webgl";


export default function MergingSnacks() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/lietotnes/webgl/donutgame/webgl.loader.js",
    dataUrl: "/lietotnes/webgl/donutgame/webgl.data",
    frameworkUrl: "/lietotnes/webgl/donutgame/webgl.framework.js",
    codeUrl: "/lietotnes/webgl/donutgame/webgl.wasm",
  });

  return (
    <Unity unityProvider={unityProvider}
    className='aspect-unity w-full h-screen'
    />
  )
}
