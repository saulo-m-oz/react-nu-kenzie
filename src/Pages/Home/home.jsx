import Form from "../../components/Form";
import TotalMoney from "../../components/TotalMoney";
import Filter from "../../components/Filter";
import List from "../../components/List";

function Home(props) {
  return (
    <>
      <div className="container-aside">
        <Form setListTransactions={props.addNewTransaction} />
        <TotalMoney listTransactions={props.listTransactions} />
      </div>
      <div className="container-transactions">
        <div className="App-category">
          <Filter setFilteredTransactions={props.addFiltered} />
        </div>
        <div className="App-container">
          <List
            listTransactions={props.filteredTransactions}
            handleRemove={props.handleRemove}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
