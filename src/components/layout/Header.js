import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>React Apps</h1>
    </header>
  );
}

const headerStyle = {
  background: "#282c34",
  color: "#fff",
  textAlign: "center",
  padding: "3px",
};
