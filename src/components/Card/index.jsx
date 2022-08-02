import "./style.css";
import formatValue from "../../util/format";

function Card(props) {
  if (props.transaction.type === "Entrada") {
    return (
      <div className="transaction entrada">
        <div className="description">
          <p className="transaction-name">{props.transaction.description}</p>
          <p className="transaction-type">{props.transaction.type}</p>
        </div>
        <div className="value">
          <p className="transaction-value">
            {formatValue(props.transaction.valor)}
          </p>
        </div>
        <div className="transaction-btn">
          <button
            id={props.index}
            className="delete"
            onClick={(e) => {
              props.handleRemove(e.target.id);
            }}
          >
            🗑️
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="transaction saida">
        <div className="description">
          <p className="transaction-name">{props.transaction.description}</p>
          <p className="transaction-type">{props.transaction.type}</p>
        </div>
        <div className="value">
          <p className="transaction-value">
            {formatValue(props.transaction.valor)}
          </p>
        </div>
        <div className="transaction-btn">
          <button
            id={props.index}
            className="delete"
            onClick={(e) => {
              props.handleRemove(e.target.id);
            }}
          >
            🗑️
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
