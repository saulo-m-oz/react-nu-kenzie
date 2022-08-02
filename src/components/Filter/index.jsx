import "./style.css";
import { useState } from "react";

function Filter({ setFilteredTransactions }) {
  const [BTN, setBTN] = useState("Todos");
  return (
    <>
      <div className="Filter-Text">
        <p>Resumo Financeiro</p>
      </div>
      <div className="Filter-buttons">
        {["Todos", "Entrada", "Saída"].map((btn, index) => (
          <button
            key={index}
            value={btn}
            className={btn === BTN ? "active" : " "}
            onClick={(e) => {
              const type = e.target.value;
              setFilteredTransactions(type);
              setBTN(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
}

export default Filter;
