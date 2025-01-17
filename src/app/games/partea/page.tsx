import Link from "next/link";

export default function GamePartea() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <div className="h-20 flex justify-center items-center z-10">
        <h1 className="text-4xl font-bold text-white/70 z-10">Partea</h1>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center gap-10 z-10">
        <Link
          href={"/games/partea/policy"}
          className="w-40 h-40 bg-orange-600 font-bold flex justify-center items-center rounded-md"
        >
          <p className="text-center p-2">Privacy Policy</p>
        </Link>
        <Link
          href={"/games/partea/TermsOfService"}
          className="w-40 h-40 bg-orange-600 font-bold flex justify-center items-center rounded-md"
        >
          <p className="text-center p-2">Terms Of Service</p>
        </Link>
      </div>
    </main>
  );
}
