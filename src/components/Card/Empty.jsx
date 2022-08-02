import "./style.css";

function EmptyCard() {
  return (
    <>
      <h2>Você não possui nenhum lançamento</h2>
      {[1, 2, 3].map((key) => (
        <div key={key} className="transaction fakeBox">
          <div className="bigBox"></div>
          <div className="smallBox"></div>
        </div>
      ))}
    </>
  );
}

export default EmptyCard;
