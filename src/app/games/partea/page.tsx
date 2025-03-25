import Link from "next/link";

export default function GamePartea() {
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
        <h1 className="text-4xl font-bold text-white/70 z-10">Partea</h1>
      </div>

      {/* Card Section */}
      <div
        className="relative bg-[#FFBEA9] backdrop-blur-md rounded-lg shadow-lg border border-white/10 flex flex-col justify-between items-center p-12 z-10"
        style={{
          width: '90vw', // Full width minus some padding for mobile
          maxWidth: '600px', // Max width based on your SVG dimensions
          height: 'auto',
          aspectRatio: '1121 / 1684', // Maintain aspect ratio (1121:1684)
        }}
      >
        {/* SVG Line Art (Absolute Positioning) */}
        <div className="absolute inset-0 flex justify-center items-center z-0 svg-container">
          <img
            src="/partea/card_line_art.svg"
            alt="Card Line Art"
            className="w-full h-full object-contain p-2"
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#063636]">Welcome to Partea!</h2>
        </div>

        {/* Middle Section */}
        <div className="text-center">
          <p className="text-[#063636]">
            Get ready for a night of fun, laughter, and unforgettable moments. Shuffle the deck, draw a card, and let the games begin!
          </p>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-sm text-[#063636]">Available now on mobile!</p>
        </div>
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
          href="https://play.google.com/store/apps/details?id=com.klavs.partea"
          className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 hover:bg-white/20 transition-colors flex justify-center items-center w-full"
        >
          <h3 className="text-xl font-bold text-white/80 text-center">Play On Android</h3>
        </Link>

        {/* Terms of Service Button */}
        <Link
          href="/games/partea/TermsOfService"
          className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 hover:bg-white/20 transition-colors flex justify-center items-center  w-full pointer-events-none opacity-50"
        >
          <h3 className="text-xl font-bold text-white/80 text-center">Soon on IOS</h3>
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
            href="/games/partea/policy"
            className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 hover:bg-white/20 transition-colors"
          >
            <h3 className="text-xl font-bold text-white/80">Privacy Policy</h3>
            <p className="text-sm text-white/60">Learn how we handle your data.</p>
          </Link>
          <Link
            href="/games/partea/TermsOfService"
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