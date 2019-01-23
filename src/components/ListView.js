import React from "react";

export default function ListView({ volumes }) {
  return (
    <ul>
      {volumes.map(volume => (
        <li>{volume.volumeInfo.title}</li>
      ))}
    </ul>
  );
}
