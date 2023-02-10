import Deus from "../../models/Deus";
import "./styles/Card.css"

interface CardParam {
    deus: Deus;
}

function Card(param: CardParam) {
    return (
        <div className="card">
            
            <img src={param.deus.urlImagem} className="card-image"></img>
            <div className="card-details">
                <h2>{param.deus.nome}</h2>
                <p>Hobbies: {param.deus.hobbies.join(", ")}</p>
                <p>Habilidades: {param.deus.habilidades.join(", ")}</p>
            </div>
        </div>
    );
}

export default Card;