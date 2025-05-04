import Head from "next/head";
import Link from "next/link";

export default function TermsAndConditions() {
  const GAME_NAME = "Bubbly Friends";
  const EFFECTIVE_DATE = "18.01.2025.";
  const OWNER_NAME = "Klāvs Kalniņš";
  const OWNERS_RESIDENCE = "Latvia";
  const EMAIL = "klavskalninss@gmail.com";
  const AGE_REQUIRED = 18;

  return (
    <>
      <Head>
        <title>Terms and Conditions | {GAME_NAME}</title>
        <meta
          name="description"
          content={`Terms and Conditions for ${GAME_NAME} by ${OWNER_NAME}`}
        />
      </Head>
      <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#063636] overflow-hidden p-4">
        {/* Background Line Art */}
        <div className="absolute inset-0 bg-[url('/partea/line_art.svg')] bg-cover bg-center opacity-10 z-0" />

        {/* Back Button */}
        <Link
          href="/games/bubblyfriends"
          className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white/80 hover:bg-white/20 transition-colors z-10"
        >
          ← Back
        </Link>

        {/* Main Content */}
        <div
          className="relative bg-[#FFBEA9] backdrop-blur-md rounded-lg shadow-lg border border-white/10 flex flex-col items-center p-8 z-10 mt-20"
          style={{
            width: '90vw', // Match card width
            maxWidth: '800px', // Slightly wider for terms content
            height: 'auto',
          }}
        >
          <h1 className="text-3xl font-bold text-[#063636] mb-6">
            Terms and Conditions for {GAME_NAME}
          </h1>

          <div className="space-y-4 text-[#063636]">
            <p>
              Effective Date: <strong>{EFFECTIVE_DATE}</strong>
            </p>
            <p>
              Owner: <strong>{OWNER_NAME}</strong>
            </p>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. General Information
              </h2>
              <p>
                <em>{GAME_NAME}</em> is a freemium game, meaning it can be
                downloaded and played for free, with optional features available via
                a yearly subscription.
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  The game is owned and operated by <strong>{OWNER_NAME}</strong>.
                </li>
                <li>
                  The yearly subscription costs <strong>€8.99</strong> and unlocks
                  premium features and benefits. Prices may vary based on your
                  region or applicable taxes.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
              <ul className="list-disc pl-6">
                <li>
                  You must be at least {AGE_REQUIRED} years old to use{" "}
                  <em>
                    {GAME_NAME}. Age requirement can vary based on your region but
                    is disclosed on the platform you downloaded the game (e.g.,
                    Google Play Store, Apple App Store).
                  </em>
                  .
                </li>
                <li>
                  If you are under {AGE_REQUIRED}, you must have the permission of a
                  parent or legal guardian to use <em>{GAME_NAME}</em>.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Subscription and Payment
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Freemium Model:</strong> While the game is free to
                  download, certain features require a yearly subscription.
                </li>
                <li>
                  <strong>Subscription Price:</strong> The yearly subscription costs{" "}
                  <strong>€8.99</strong>. Prices may change with prior notice.
                </li>
                <li>
                  <strong>Payment Process:</strong> Subscriptions are processed
                  through the platform where you downloaded the game (e.g., Google
                  Play Store, Apple App Store).
                </li>
                <li>
                  <strong>Auto-Renewal:</strong> Subscriptions automatically renew
                  at the end of the billing period unless canceled at least 24 hours
                  before the renewal date.
                </li>
                <li>
                  <strong>Cancellation:</strong> You can cancel your subscription
                  through your platform’s account settings. Cancellation does not
                  provide refunds for unused time.
                </li>
                <li>
                  <strong>Refunds:</strong> Refunds are governed by the platform’s
                  refund policies and are not guaranteed.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">4. Usage and Conduct</h2>
              <p>
                You agree to use <em>{GAME_NAME}</em> for lawful purposes and in
                compliance with these terms.
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Hacking, cheating, or otherwise manipulating the game is
                  prohibited.
                </li>
                <li>
                  Sharing or distributing copyrighted or sensitive content without
                  authorization is prohibited.
                </li>
                <li>
                  Engaging in abusive, offensive, or inappropriate behavior toward
                  other users is prohibited.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. Intellectual Property
              </h2>
              <p>
                All content, including graphics, gameplay mechanics, and trademarks,
                is the property of <strong>{OWNER_NAME}</strong> or licensed to{" "}
                <em>{GAME_NAME}</em>.
              </p>
              <p>
                You are granted a limited, non-exclusive, and revocable license to
                use <em>{GAME_NAME}</em> for personal entertainment.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy</h2>
              <p>
                <em>{GAME_NAME}</em> collects and processes personal data in
                accordance with its{" "}
                <Link
                  href={"/games/partea/policy"}
                  className="text-[#063636] underline hover:text-[#052929]"
                >
                  Privacy Policy
                </Link>
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p>
                <em>{GAME_NAME}</em> is provided &quot;as is&quot; without any
                warranties, express or implied. <strong>{OWNER_NAME}</strong> does
                not guarantee that the game will be uninterrupted or error-free.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law,{" "}
                <strong>{OWNER_NAME}</strong> shall not be liable for indirect,
                incidental, or consequential damages.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                9. Changes to the Terms
              </h2>
              <p>
                These terms may be updated from time to time. Changes will be
                communicated through in-game notifications or on the official
                website. Continued use of the game after changes constitutes
                acceptance.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p>
                These terms are governed by the laws of{" "}
                <strong>{OWNERS_RESIDENCE}</strong>, without regard to conflict of
                law principles. Any disputes shall be resolved in the courts of{" "}
                <strong>{OWNERS_RESIDENCE}</strong>.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                11. Contact Information
              </h2>
              <p>
                If you have any questions or concerns about these Terms and
                Conditions, please contact:
              </p>
              <p>
                <strong>{OWNER_NAME}</strong>
                <br></br>
                {EMAIL}
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}