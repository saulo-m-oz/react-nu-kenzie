import Form from "../../components/Form";
import Filter from "../../components/Filter";
import List from "../../components/List";

function LandingPage(props) {
  return (
    <>
      <div className="container-aside">
        <Form setListTransactions={props.addNewTransaction} />
      </div>
      <div className="container-transactions">
        <div className="App-category">
          <Filter setFilteredTransactions={props.addFiltered} />
        </div>
        <div className="App-container">
          <List listTransactions={props.filteredTransactions} />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
