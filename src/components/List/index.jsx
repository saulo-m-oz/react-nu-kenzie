import Card from "../Card";
import EmptyCard from "../Card/Empty";

function List({ listTransactions, handleRemove }) {
  return (
    <>
      {listTransactions.length < 1 ? (
        <EmptyCard />
      ) : (
        listTransactions.map((transaction, index) => (
          <Card
            transaction={transaction}
            handleRemove={handleRemove}
            key={index}
            index={index}
          />
        ))
      )}
    </>
  );
}

export default List;
