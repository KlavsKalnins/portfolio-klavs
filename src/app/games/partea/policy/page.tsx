import Link from "next/link";

export default function GameParteaPolicy() {
  const GAME_NAME = "Partea";
  const EFFECTIVE_DATE = "18.01.2025.";
  const OWNER_NAME = "Klāvs Kalniņš";
  const OWNERS_RESIDENCE = "Latvia";
  const EMAIL = "klavskalninss@gmail.com";

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#063636] overflow-hidden p-4">
      {/* Background Line Art */}
      <div className="absolute inset-0 bg-[url('/partea/line_art.svg')] bg-cover bg-center opacity-10 z-0" />

      {/* Back Button */}
      <Link
        href="/games/partea"
        className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white/80 hover:bg-white/20 transition-colors z-10"
      >
        ← Back
      </Link>

      {/* Main Content */}
      <div className="relative bg-[#FFBEA9] backdrop-blur-md rounded-lg shadow-lg border border-white/10 flex flex-col items-center p-8 z-10 mt-20"
        style={{
          width: '90vw', // Match card width
          maxWidth: '800px', // Slightly wider for policy content
          height: 'auto',
        }}
      >
        <h2 className="text-2xl font-bold text-[#063636] mb-6">Privacy Policy</h2>

        <div className="space-y-4 text-[#063636]">
          <p>
            {OWNER_NAME} built the {GAME_NAME} game as a Freemium game. This
            SERVICE is provided by {OWNER_NAME} at no cost and is intended for use
            as is.
          </p>
          <p>
            This page is used to inform visitors regarding my policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use my Service.
          </p>
          <p>
            If you choose to use my Service, then you agree to the collection and
            use of information in relation to this policy. The Personal
            Information that I collect is used for providing and improving the
            Service. I will not use or share your information with anyone except
            as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in our
            Terms and Conditions, which is accessible at {GAME_NAME} unless
            otherwise defined in this Privacy Policy.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">
            Information Collection and Use
          </h3>
          <p>
            For a better experience, while using our Service, I may require you to
            provide us with certain personally identifiable information. The
            information that I request will be retained on your device and is not
            collected by me in any way.
          </p>
          <p>
            The game does use third party services that may collect information
            used to identify you.
          </p>
        </div>
      </div>
    </main>
  );
}