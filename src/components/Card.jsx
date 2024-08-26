import React from "react";
import lakersLogo from "../assets/NBA-PNGs/58419d0aa6515b1e0ad75a6c.png";

export default function Card() {
  return (
    <div className="w-80 h-88 bg-gray-900 border-solid border-2 border-black rounded-2xl p-4 mx-auto my-24 font-serif">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold text-white flex-grow ml-6">Lakers</h1>
        <img src={lakersLogo} alt="Lakers Logo" className="w-19 h-12" />
      </div>
      <p className="text-md font-semibold text-center text-white">
        The Los Angeles Lakers are a storied NBA franchise renowned for their
        rich history and success. With a legacy featuring legends like Magic
        Johnson, Kareem Abdul-Jabbar, and Kobe Bryant, the Lakers have clinched
        numerous championships and built fierce rivalries, particularly with the
        Boston Celtics. Known for their star-studded rosters and vibrant fan
        base, the Lakers continue to be a powerhouse in the league, captivating
        audiences with their dynamic play and historic achievements.
      </p>
    </div>
  );
}
