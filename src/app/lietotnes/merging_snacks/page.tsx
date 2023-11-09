"use client";
import { Unity, useUnityContext } from "react-unity-webgl";


export default function MergingSnacks() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/lietotnes/webgl/merging_snacks/webgl.loader.js",
    dataUrl: "/lietotnes/webgl/merging_snacks/webgl.data",
    frameworkUrl: "/lietotnes/webgl/merging_snacks/webgl.framework.js",
    codeUrl: "/lietotnes/webgl/merging_snacks/webgl.wasm",
  });

  return (
    <Unity unityProvider={unityProvider}
    className='aspect-unity w-full h-screen'
    />
  )
}
