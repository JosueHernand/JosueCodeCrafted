import React from "react";
import NavTabs from "./NavTabs";
import "../../src/app.css";

export default function Header() {
  return (
    <header className="custom-navbar nav justify-content-between p-4 mb-3">
      <h1 className="custom-heading">Josue Hernandez</h1>
      <NavTabs />
    </header>
  );
}