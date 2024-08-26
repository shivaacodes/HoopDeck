import React from "react";
import lakersLogo from "../assets/NBA-PNGs/58419d0aa6515b1e0ad75a6c.png";

export default function Card() {
  return (
    <div className="Card">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold flex-grow ml-12">Lakers</h1>
        <img src={lakersLogo} alt="Lakers Logo" className="w-19 h-12 mr-6" />
      </div>
      <h2 className="font-bold text-lg text-center font-bold">Description</h2>
      <p className="text-md font-semibold text-center mt-4 p-3">
        The Los Angeles Lakers, a legendary NBA team, are known for their rich
        history, star-studded rosters, and passionate fan base. As a powerhouse
        in the league, they've solidified their status as one of the most iconic
        teams in sports history.
      </p>
    </div>
  );
}
