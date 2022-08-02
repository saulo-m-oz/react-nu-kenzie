import "./Reset.css";
import "./App.css";
import { useState } from "react";
import Home from "./Pages/Home/home";
import LandingPage from "./Pages/Landing/landing";

function App(props) {
  const [listTransactions, setListTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  function addNewTransaction(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
    setFilteredTransactions([...listTransactions, newTransaction]);
  }

  function addFiltered(type) {
    if (type === "Todos") {
      setFilteredTransactions([...listTransactions]);
    } else {
      const filtered = listTransactions.filter(
        (transaction) => transaction.type === type
      );
      setFilteredTransactions([...filtered]);
    }
  }

  function handleRemove(button) {
    listTransactions.map((element, index) => {
      element.key = index;
    });

    setFilteredTransactions(
      listTransactions.filter((element) => element.key !== Number(button))
    );

    setListTransactions(
      filteredTransactions.filter((element) => element.key !== Number(button))
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="NuKenzie">Nu Kenzie</h1>
        <button className="Inicio" onClick={() => props.setHome(false)}>
          Inicio
        </button>
      </header>
      <main className="App-main">
        {listTransactions.length === 0 ? (
          <LandingPage
            addNewTransaction={addNewTransaction}
            addFiltered={addFiltered}
            filteredTransactions={filteredTransactions}
          />
        ) : (
          <Home
            addNewTransaction={addNewTransaction}
            listTransactions={listTransactions}
            addFiltered={addFiltered}
            filteredTransactions={filteredTransactions}
            handleRemove={handleRemove}
          />
        )}
      </main>
    </div>
  );
}

export default App;
