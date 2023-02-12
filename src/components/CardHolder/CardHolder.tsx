import Developer from "../../models/Developer";
import Card from "../Card/Card";
import "./styles/CardHolder.css";

interface CardHolderParam {
  title: string;
  deuses: Developer[];
}

function CardHolder(param: CardHolderParam) {
  return (
    <div className="card-holder">
      <header>
        <h1>{param.title}</h1>
      </header>
      <main>
        <div className="flex-row">
          {param.deuses.map((v) => (
            <Card deus={v} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default CardHolder;
