"use client";
import Link from 'next/link';

const featuredProjects = [
  { href: "/games/partea", title: "Partea", description: "3 month project, since 2025", isEnabled: true, badges: ["completed", "collaborative"] },
  { href: "/games/bubblyFriends", title: "Bubbly Friends", description: "Development from 2025 Mar till present", isEnabled: true, badges: ["in-development", "collaborative"] },
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

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#063636] overflow-hidden">
      {/* Background Line Art */}
      <div className="absolute inset-0 bg-[url('/partea/line_art.svg')] bg-cover bg-center opacity-10 z-0" />

      {/* Header Section */}
      <div className="z-10 max-w-4xl w-full items-center justify-center font-mono text-center mb-16">
        <h1 className="text-5xl font-bold text-white/90 mb-4">Klāvs Kalniņš</h1>
        <p className="text-xl text-white/70 mb-8">Fullstack Developer & Creative Technologist</p>

        {/* Navigation Links */}
        <div className="flex gap-4 justify-center mb-12">
          <Link
            href="https://www.linkedin.com/in/kl%C4%81vs-kalni%C5%86%C5%A1-877633207"
            className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-md text-white/80 hover:bg-white/20 transition-colors z-10"
          >
            LinkedIn
          </Link>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="z-10 w-full max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-white/80 mb-8 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <Link
              key={index}
              href={project.isEnabled ? project.href : "#"}
              className={`bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6 transition-all duration-300 text-left
                ${project.isEnabled ? "hover:bg-white/20 hover:scale-105 hover:shadow-xl" : "pointer-events-none opacity-50"}`}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {project.badges?.map((badge, badgeIndex) => (
                  <span
                    key={badgeIndex}
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getBadgeStyles(badge)}`}
                  >
                    {badge.replace("-", " ")}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white/90 mb-3">{project.title}</h3>
              {project.description && (
                <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
              )}
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/games"
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-8 py-4 rounded-lg text-white/90 hover:bg-white/25 transition-all duration-300 font-semibold text-lg"
          >
            View All Projects
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>

      {/* Footer Space */}
      <div className="h-16"></div>
    </main>
  )
}