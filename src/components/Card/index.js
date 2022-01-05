// Global
import React from "react";

// styles
import "./styles.css";

export default function Card(props) {
  return (
    <div className="containerCard">
      <iframe
        width="600"
        height="340"
        src={props.url}
        title="Vídeo incorporado"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
