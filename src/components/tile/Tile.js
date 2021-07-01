import React from "react";

export const Tile = ({props}) => {
  return (
    <div className="tile-container">
      {Object.values(props).map((item, idx) => <p key={idx}>{item}</p>)}
    </div>
  );
};
