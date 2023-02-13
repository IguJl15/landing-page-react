import Developer from "../../models/Developer";
import "./styles/Card.css"

interface CardParam {
    deus: Developer;
}

function Card(param: CardParam) {
    return (
        <div className="card">
            <img src={param.deus.imageUrl} className="card-image"></img>
            <div className="card-details">
                <h2>{param.deus.name}</h2>
                <p>Hobbies: {param.deus.hobbies.join(", ")}</p>
                <p>Habilidades: {param.deus.habilities.join(", ")}</p>
            </div>
        </div>
    );
}

export default Card;