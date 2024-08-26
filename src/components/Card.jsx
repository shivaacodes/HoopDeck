import React from "react";
import lakersLogo from "../assets/NBA-PNGs/58419d0aa6515b1e0ad75a6c.png";

export default function Card() {
  return (
    <div className="Card">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold text-white flex-grow ml-12">
          Lakers
        </h1>
        <img src={lakersLogo} alt="Lakers Logo" className="w-19 h-12 mr-6" />
      </div>
      <p className="text-md font-semibold text-center text-white">
        The Los Angeles Lakers are a storied NBA franchise renowned for their
        rich history and success. Known for star-studded rosters and vibrant fan
        base, the Lakers continue to be a powerhouse in the league, captivating
        audiences with their dynamic play and historic achievements.Lakers have
        solidified their legacy as one of the most iconic teams in sports
        history.
      </p>
    </div>
  );
}
