import React from "react";

function Badge({ skill }) {
  return (
    <div className={`${skill.votes >= 5 ? "border-green-900" : "border-amber-400"} flex border border-black rounded m-3 p-1 `}>
      <p className={`${skill.votes >= 5 ? "text-green-900" : "text-amber-400"}`} >{skill.title}</p>
      <span>
      <p className={`${skill.votes >= 5 ? "bg-green-900" : "bg-amber-400"} text-white rounded w-0,5 mx-2`}>{skill.votes}</p>
      </span>
    </div>
  );
}

export default Badge;
