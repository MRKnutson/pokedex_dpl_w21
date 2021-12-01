import React from "react";

const Pokecard = (props) => {
  const borderColor = props.borderColor ? props.borderColor : "black";
  return (
    <div
      style={{
        border: `3px solid ${borderColor}`,
        margin: "20px",
        padding: "10px",
        backgroundColor: 'rgb(237, 237, 237',
        maxWidth: '500px',
        borderRadius: '10px',
        lineHeight: '10px',

      }}
    >
      {/* JSX GOES HERE */}
      {props.children}
    </div>
  );
};

export default Pokecard;
