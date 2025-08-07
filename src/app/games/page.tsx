import Link from "next/link";

const games = [
  { 
    href: "/games/bubblyFriends", 
    title: "Bubbly Friends", 
    description: "Development from 2025 Feb till present", 
    isEnabled: true,
    badges: ["in-development", "collaborative"]
  },
  { 
    href: "/games/partea", 
    title: "Partea", 
    description: "3 month project, since 2025", 
    isEnabled: true,
    badges: ["completed", "in-production", "collaborative"]
  },
  { 
    href: "https://youtu.be/R5VZKEHlj4U", 
    title: "Red Star: Colosseum Iron Legion", 
    description: "48h Global Game Jam Riga 2024", 
    isEnabled: true,
   //  badges: ["completed", "collaborative"]
  },
  { 
    href: "/games/donutgame", 
    title: "Donut Game", 
    description: "18h project, 25 nov 2023", 
    isEnabled: true,
    badges: ["completed", "solo", "in-production"]
  },
  {
    href: "https://youtu.be/dgBIaIJHS_A?si=vXcRLeROvvU7RG07&t=73",
    title: "Latvia Quiz",
    description: "2 week project, 2018",
    isEnabled: true,
    badges: ["completed"]
  },
];

const getBadgeStyles = (badge) => {
  const styles = {
    "in-development": "bg-blue-500/20 text-blue-200 border-blue-400/30",
    "in-production": "bg-green-500/20 text-green-200 border-green-400/30",
    "completed": "bg-gray-500/20 text-gray-200 border-gray-400/30",
    "solo": "bg-purple-500/20 text-purple-200 border-purple-400/30",
    "collaborative": "bg-orange-500/20 text-orange-200 border-orange-400/30",
    "team-lead": "bg-red-500/20 text-red-200 border-red-400/30",
  };
  return styles[badge] || "bg-white/10 text-white/70 border-white/20";
};

/*
if (games.length % 2 !== 0) {
  games.push({ href: "#", title: "Coming Soon", description: "", isEnabled: false });
}
*/

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
        <h1 className="text-4xl font-bold text-white/70 z-10">All Projects</h1>
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
                className={`min-h-40 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 flex flex-col justify-center items-start p-6 w-full transition-colors text-left
                  ${game.isEnabled ? "hover:bg-white/20" : "pointer-events-none opacity-50"}`}
              >
                <div className="flex flex-wrap gap-2 mb-3 justify-center w-full">
                  {game.badges?.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getBadgeStyles(badge)}`}
                    >
                      {badge.replace("-", " ")}
                    </span>
                  ))}
                </div>
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold text-white/80 mb-2">{game.title}</h3>
                  {game.description && (
                    <span className="text-base text-white/80">{game.description}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </main>
  );
}