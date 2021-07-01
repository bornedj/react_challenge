import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = ({props}) => {
  return (
    <div>
      {props.map((item, idx) => {
        return <Tile key={idx} props={item} />
      })}
    </div>
  );
};
