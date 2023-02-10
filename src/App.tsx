import { useState } from "react";
import "./App.css";
import CardHolder from "./components/CardHolder/CardHolder";
import Deus from "./models/Deus";

import igor from "./assets/images/igor.jpeg";
import kaike from "./assets/images/kaike.jpeg";
import kelson from "./assets/images/kelson.jpeg";

function App() {
  const cardHolderTitle = "Programação para Internet";
  const deuses = [
    new Deus(
      "Igor Julliano",
      ["Jogar", "programar", "dormir"],
      ["TypeScript", "Dart", "Flutter", "etc"],
      igor
    ),
    new Deus(
      "Kelson Eduardo",
      ["Jogar", "ler", "cinema", "música"],
      ["JavaScript", "TypeScript", "React", "etc"],
      kelson
    ),
    new Deus(
      "Kaike Dias",
      ["Malhar", "jogar", "ler", "dormir"],
      ["Dart", "Flutter", "JavaScript", "etc"],
      kaike
    ),
  ];

  return (
    <>
      <CardHolder title={cardHolderTitle} deuses={deuses} />
    </>
  );
}

export default App;
