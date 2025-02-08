"use client";

import Image from "next/image";
import { useState } from "react";

import {
  faArrowRight,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Palette de couleurs
const colors = {
  textPrimary: "#323334",
  textSecondary: "#8c949d",
  primaryBlue: "#1b76ff",
  backgroundGray: "#f0f6fb",
};

const leagues = [
  { name: "Soccer", icon: "/icons/soccer.png" },
  { name: "Football", icon: "/icons/football.png" },
  {
    name: "Hockey",
    icon: "/icons/hockey.png",
    subLeagues: ["NHL", "KHL", "OHL", "Liiga", "AHL"],
  },
  { name: "Basketball", icon: "/icons/basketball.png" },
  { name: "Tennis", icon: "/icons/tennis.png" },
];

const upcomingGames = [
  { league: "NHL", home: "Columbus", away: "Pittsburgh", time: "23:10" },
  {
    league: "NHL",
    home: "Tampa Bay",
    away: "Carolina",
    time: "23:10",
    active: true,
  },
  { league: "NHL", home: "Chicago", away: "Minnesota", time: "24:10" },
  { league: "NHL", home: "San Jose", away: "Anaheim", time: "N/A" },
];

const myTeam = [
  {
    name: "Nikita Kucherov",
    team: "Tampa Bay",
    salary: "$23.9 mln",
    image: "/players/1.png",
  },
  {
    name: "Leon Draisaitl",
    team: "Edmonton",
    salary: "$16.4 mln",
    image: "/players/1.png",
  },
  {
    name: "Kirill Kaprizov",
    team: "Minnesota",
    salary: "$22.0 mln",
    image: "/players/1.png",
  },
  {
    name: "David Pastrnak",
    team: "Boston",
    salary: "$18.4 mln",
    image: "/players/1.png",
  },
];

const playerList = [
  {
    name: "Brayden Point",
    team: "Tampa Bay",
    nationality: "🇨🇦 Canada",
    position: "C",
    gp: 81,
    g: 46,
    a: 44,
    p: 90,
    plusMinus: -16,
  },
  {
    name: "Victor Hedman",
    team: "Tampa Bay",
    nationality: "🇸🇪 Sweden",
    position: "D",
    gp: 78,
    g: 13,
    a: 63,
    p: 76,
    plusMinus: 18,
  },
  {
    name: "Sebastian Aho",
    team: "Carolina",
    nationality: "🇫🇮 Finland",
    position: "C",
    gp: 78,
    g: 36,
    a: 53,
    p: 89,
    plusMinus: 34,
  },
];

export default function Home() {
  const [openLeague, setOpenLeague] = useState("Hockey");

  return (
    <div
      className="flex h-screen"
      style={{ backgroundColor: colors.backgroundGray }}
    >
      <aside className="w-72 bg-white shadow-md flex flex-col p-4">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/globe.svg" alt="Logo" width={40} height={40} />
          <span
            className="font-semibold text-lg"
            style={{ color: colors.textPrimary }}
          >
            Golden-Stats
          </span>
        </div>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none"
            style={{
              backgroundColor: colors.backgroundGray,
              borderColor: colors.textSecondary,
              color: colors.textPrimary,
            }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-3 top-3"
            style={{ color: colors.textSecondary }}
          />
        </div>
        <nav className="flex flex-col gap-2">
          {leagues.map((league) => (
            <div key={league.name}>
              <div
                className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer`}
                style={{
                  backgroundColor:
                    openLeague === league.name
                      ? colors.primaryBlue
                      : "transparent",
                  color:
                    openLeague === league.name ? "white" : colors.textPrimary,
                }}
                onClick={() => setOpenLeague(league.name)}
              >
                <span className="flex items-center gap-3">
                  <Image
                    src={league.icon}
                    alt={league.name}
                    width={20}
                    height={20}
                  />
                  {league.name}
                </span>
                {league.subLeagues && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ color: colors.textPrimary }}
                  />
                )}
              </div>
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-lg font-semibold"
            style={{ color: colors.textPrimary }}
          >
            Upcoming Games
          </h2>
          <button
            className="text-sm flex items-center"
            style={{ color: colors.primaryBlue }}
          >
            See full calendar{" "}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {upcomingGames.map((game, index) => (
            <div
              key={index}
              className="p-4 rounded-md border shadow-md"
              style={{
                borderColor: game.active
                  ? colors.primaryBlue
                  : colors.textSecondary,
                backgroundColor: game.active ? "#E3F2FD" : "white",
              }}
            >
              <p
                className="text-sm font-semibold"
                style={{ color: colors.textPrimary }}
              >
                {game.home} vs {game.away}
              </p>
              <span
                className="text-lg font-bold"
                style={{ color: colors.primaryBlue }}
              >
                {game.time}
              </span>
            </div>
          ))}
        </div>
        <h2
          className="text-lg font-semibold mt-6 mb-4"
          style={{ color: colors.textPrimary }}
        >
          My Team
        </h2>
        <div className="flex gap-4">
          {myTeam.map((player, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg text-center shadow-md"
              style={{ backgroundColor: "white" }}
            >
              <Image
                src={player.image}
                alt={player.name}
                width={80}
                height={80}
                className="rounded-full mx-auto"
              />
              <p
                className="font-semibold mt-2"
                style={{ color: colors.textPrimary }}
              >
                {player.name}
              </p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                {player.salary}
              </p>
            </div>
          ))}
        </div>
        <h2
          className="text-lg font-semibold mt-6 mb-4"
          style={{ color: colors.textPrimary }}
        >
          Search Players
        </h2>
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Player</th>
              <th className="p-3 text-left">Team</th>
              <th className="p-3 text-left">Nationality</th>
              <th className="p-3 text-left">Position</th>
              <th className="p-3 text-left">GP</th>
              <th className="p-3 text-left">G</th>
              <th className="p-3 text-left">A</th>
              <th className="p-3 text-left">P</th>
              <th className="p-3 text-left">+/-</th>
            </tr>
          </thead>
          <tbody>
            {playerList.map((player, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{player.name}</td>
                <td className="p-3">{player.team}</td>
                <td className="p-3">{player.nationality}</td>
                <td className="p-3">{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
