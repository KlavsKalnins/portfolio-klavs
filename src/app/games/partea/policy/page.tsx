import Link from "next/link";

export default function GameParteaPolicy() {
  const GAME_NAME = "Partea";
  const EFFECTIVE_DATE = "18.01.2025.";
  const OWNER_NAME = "Klāvs Kalniņš";
  const OWNERS_RESIDENCE = "Latvia";
  const EMAIL = "klavskalninss@gmail.com";

  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-4">
      <Link
        href="/games/partea"
        className="absolute top-4 left-4 bg-orange-600 px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
      >
        ← Back
      </Link>
      <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
      <div className="max-w-2xl space-y-4">
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
    </main>
  );
}
