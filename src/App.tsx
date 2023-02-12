import "./App.css";
import CardHolder from "./components/CardHolder/CardHolder";
import Developer from "./models/Developer";

import igor from "./assets/images/igor.jpeg";
import kaike from "./assets/images/kaike.jpeg";
import kelson from "./assets/images/kelson.jpeg";

function App() {
  const cardHolderTitle = "Programação para Internet";
  const developers = [
    new Developer(
      "Igor Julliano",
      ["Jogar", "programar", "cinema", "animes"],
      ["Dart", "Flutter", "git", "linux", "Jogos", "C#", "DotNet", "inglês intermediário"],
      igor
    ),
    new Developer(
      "Kelson Eduardo",
      ["Jogar", "ler", "cinema", "música", "cozinhar"],
      ["JavaScript", "TypeScript", "React", "git", "Svelte", "inglês fluente"],
      kelson
    ),
    new Developer(
      "Kaike Dias",
      ["Corrida", "jogar", "ler", "música"],
      ["Dart", "Flutter", "JavaScript", "git", "inglês"],
      kaike
    ),
  ];

  return (
    <>
      <CardHolder title={cardHolderTitle} deuses={developers} />
    </>
  );
}

export default App;
