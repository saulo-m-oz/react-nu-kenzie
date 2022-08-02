import formatValue from "../../util/format";
import "./style.css";

function TotalMoney({ listTransactions }) {
  const income = listTransactions
    .filter((transaction) => transaction.type === "Entrada")
    .reduce((acc, { valor }) => acc + Number(valor), 0);

  const outcome = listTransactions
    .filter((transaction) => transaction.type === "Saída")
    .reduce((acc, { valor }) => acc + Number(valor), 0);

  const totalValue = income - outcome;

  return (
    <div className="TotalMoney">
      <div className="container-p">
        <p className="totalValue">Valor total:</p>
        <p className="total">{formatValue(totalValue)}</p>
      </div>
      <span className="warning">O valor se refere ao saldo total.</span>
    </div>
  );
}

export default TotalMoney;
