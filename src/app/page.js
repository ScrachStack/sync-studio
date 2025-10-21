"use client";
import { useState } from "react"
import "./globals.css";

export default function Home() {
  const projects = [
    { name: "sMenu", link: "https://github.com/ScrachStack/sMenu", description: "A powerful and sleek in-game menu for FiveM servers.", tags: ["FiveM"] },
    { name: "LeagueBot", link: "https://github.com/ScrachStack/LeagueBot", description: "A Discord bot for managing competitive gaming leagues.", tags: ["Utility"] },
    { name: "auth-system", link: "https://github.com/ScrachStack/auth-system", description: "A robust authentication system for server and web integrations.", tags: [ "Utility"] },
    { name: "Link Shirinker", link: "https://github.com/ScrachStack/link-shrinker", description: "Express Shortens Links Saves Data by Cookies and SQL.", tags: [ "Utility"] },
    { name: "RedTrainer", link: "https://github.com/ScrachStack/RedTrainer", description: "A developer tool and trainer for RedM script debugging.", tags: ["RedM"] },
    { name: "qb-moneywash", link: "https://github.com/ScrachStack/qb-moneywash", description: "A realistic money laundering system for QBCore servers.", tags: ["FiveM"] },
    { name: "twotter", link: "https://github.com/ScrachStack/twotter", description: "Early NUI based Twotter System for FiveM.", tags: ["FiveM"] },
    { name: "Scratch Shops", link: " https://github.com/ScrachStack/scratch_shops", description: "An Shops Resource for ESX & QBCore. Utilizing Ox_LIb Menus.", tags: ["FiveM"] },
    { name: "vulcan-ac", link: "https://github.com/ScrachStack/vulcan-ac", description: "An anti-cheat system designed for maximum FiveM security.", tags: ["FiveM", "RedM"] },
    { name: "ps4plus", link: "https://github.com/ScrachStack/ps4plus", description: "An advanced FiveM script emulating console features.", tags: ["Exploit", "Utility"] },
    { name: "bus-stops", link: "https://github.com/ScrachStack/bus-stops", description: "Immersive public transport and bus stop interactions for RedM and FiveM.", tags: ["FiveM", "RedM"] },
    { name: "scratch_moonshine", link: "https://github.com/ScrachStack/scratch_moonshine", description: "A detailed moonshining system for RedM servers.", tags: ["RedM"] },
    { name: "Rockstar Editor", link: " https://github.com/ScrachStack/rockstar-editor", description: "oxlib rockstar editor.", tags: ["FiveM"] },
    { name: "EUP UI", link: "https://github.com/ScrachStack/eup-ui", description: "oxlib /eup command to bring up the menu edit oufits.json.", tags: ["FiveM"] },
    { name: "Icebox Robbery", link: "https://github.com/ScrachStack/icebox-robbery", description: "", tags: ["FiveM"] },



  ];// 

  const allTags = ["All", "FiveM", "RedM", "Utility", "Exploit"];
  const [activeTag, setActiveTag] = useState("All");
  const filteredProjects = activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <main className="relative flex flex-col items-center min-h-screen text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-900 to-black animate-gradient" />

      <div className="relative z-10 p-10 w-full flex flex-col items-center">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Sync Studios
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Innovative development studio crafting premium scripts and systems for
            the FiveM and RedM communities.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full border transition-colors duration-200 ${
                activeTag === tag
                  ? "bg-white text-black border-white"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {filteredProjects.map((proj) => (
            <a
              key={proj.name}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition duration-200 group backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">
                {proj.name}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </section>

        <footer className="mt-20 text-gray-500 text-sm">
          © {new Date().getFullYear()} Sync Studios — All rights reserved.
        </footer>
      </div>
    </main>
  );
}
