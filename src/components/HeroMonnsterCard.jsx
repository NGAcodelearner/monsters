import React from "react";

const HeroMonnsterCard = () => {
  return (
    <div>
      {" "}
      <img
        alt={`monster ${monster.name}`}
        src={`https://robohash.org/${monster.id}?set=set2&size=120x120`}
      />
    </div>
  );
};

export default HeroMonnsterCard;
