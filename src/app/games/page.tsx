import Link from "next/link";

const games = [
  { href: "/games/partea", title: "Partea", description: "3 month project, since 2025", isEnabled: true },
  { href: "/games/bubblyFriends", title: "Bubbly Friends", description: "Development from 2025 Mar till present", isEnabled: true },
  { href: "https://youtu.be/R5VZKEHlj4U", title: "Red Star: Colosseum Iron Legion", description: "48h Global Game Jam Riga 2024", isEnabled: true },
  { href: "/games/donutgame", title: "Donut Game", description: "18h project, dec 2024", isEnabled: true },
  { href: "/lietotnes/latvian", title: "Latvia Quiz", description: "2 week project, 2018", isEnabled: false },
];

// Ensure even number of items by adding a "Coming Soon" card if necessary
if (games.length % 2 !== 0) {
  games.push({ href: "#", title: "Coming Soon", description: "", isEnabled: false });
}

export default function Games() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#063636] overflow-hidden">
      {/* Background Line Art */}
      <div className="absolute inset-0 bg-[url('/partea/line_art.svg')] bg-cover bg-center opacity-10 z-0" />

      <Link
        href="/"
        className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white/80 hover:bg-white/20 transition-colors z-10"
      >
        ← Back
      </Link>

      {/* Header */}
      <div className="h-20 flex justify-center items-center z-10">
        <h1 className="text-4xl font-bold text-white/70 z-10">All Games</h1>
      </div>

      {/* Scrolling Section */}
      <div className="mt-20 w-full max-w-4xl z-10" style={{ width: '90vw', maxWidth: '900px' }}>
        <div className="mt-0">
          <h3 className="text-2xl font-bold text-white/80 mb-6">Featured</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {games.map((game, index) => (
              <Link
                key={index}
                href={game.isEnabled ? game.href : "#"}
                className={`h-40 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 flex justify-center items-center p-6 w-full transition-colors text-center flex-col
                  ${game.isEnabled ? "hover:bg-white/20" : "pointer-events-none opacity-50"}`}
              >
                <h3 className="text-xl font-bold text-white/80">{game.title}</h3>
                {game.description && <span className="text-base font-bold text-white/80">{game.description}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </main>
  );
}
