import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zini Latviju',
  description: 'Latvijas Viktorīna - Spēle, kas pārbauda Tavas zināšanas par Latviju! Uzzini interesantus faktus!',
  keywords: ['Latvia', 'Quiz Game', 'Viktorīna', 'Mobile Game', 'Android', 'iOS', 'Klāvs Kalniņš'],
  openGraph: {
    title: 'Zini Latviju',
    description: 'Latvijas Viktorīna - Spēle, kas pārbauda Tavas zināšanas par Latviju! Uzzini interesantus faktus!',
    url: 'https://klavs.lv/games/zinilatviju',
    siteName: 'Klāvs Kalniņš Portfolio',
    images: [
      {
        url: 'https://klavs.lv/partea/card_line_art.svg',
        width: 1200,
        height: 630,
        alt: 'zinilatviju',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://klavs.lv/games/zinilatviju',
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#063636] overflow-hidden">
      {/* Background Line Art */}
      <div className="absolute inset-0 bg-[url('/partea/line_art.svg')] bg-cover bg-center opacity-10 z-0" />

      <Link
        href="/games"
        className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white/80 hover:bg-white/20 transition-colors z-10"
      >
        ← Back
      </Link>

      {/* Header */}
      <div className="h-20 flex justify-center items-center z-10">
        <h1 className="text-4xl font-bold text-white/70 z-10">Zini Latviju</h1>
      </div>


      <div
        className="mt-8 flex gap-4 w-full"
        style={{
          width: '90vw', // Match card width
          maxWidth: '600px', // Match card max width
        }}
      >
        {/* Policy Button */}
        <Link
          href="https://play.google.com/store/apps/details?id=com.klavs.zinilatviju"
          className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 hover:bg-white/20 transition-colors flex justify-center items-center w-full"
        >
          <h3 className="text-xl font-bold text-white/80 text-center">Play On Android</h3>
        </Link>

        {/* Terms of Service Button */}
        <Link
          href="https://apps.apple.com/us/app/zinilatviju/id6740486255"
          className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 hover:bg-white/20 transition-colors flex justify-center items-center  w-full"
        >
          <h3 className="text-xl font-bold text-white/80 text-center">Play on IOS</h3>
        </Link>
      </div>

      {/* Scrolling Section */}
      <div className="mt-20 w-full max-w-4xl z-10" style={{
          width: '90vw', // Match card width
          maxWidth: '600px', // Match card max width
        }}>
        <h2 className="text-2xl font-bold text-white/80 mb-6">More Information</h2>

        {/* Privacy Policy and Terms of Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/games/zinilatviju/policy"
            className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 hover:bg-white/20 transition-colors"
          >
            <h3 className="text-xl font-bold text-white/80">Privacy Policy</h3>
            <p className="text-sm text-white/60">Learn how we handle your data.</p>
          </Link>
          <Link
            href="/games/zinilatviju/TermsOfService"
            className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 hover:bg-white/20 transition-colors"
          >
            <h3 className="text-xl font-bold text-white/80">Terms of Service</h3>
            <p className="text-sm text-white/60">Read our terms and conditions.</p>
          </Link>
        </div>

        {/* Card Examples */}
        {/*
         <div className="mt-12">
          <h3 className="text-2xl font-bold text-white/80 mb-6">Card Examples</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-40 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 flex justify-center items-center"
              >
                <p className="text-white/70">Card {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
      <div className="h-10"></div>
    </main>
  );
}