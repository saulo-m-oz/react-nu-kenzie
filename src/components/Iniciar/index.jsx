import { ReactComponent as Imagem } from "../../image.svg";
import { ReactComponent as NuKenzie } from "../../Nu Kenzie.svg";
import "./style.css";

function Iniciar(props) {
  return (
    <div className="App-containerr">
      <div className="App-leftContainer">
        <NuKenzie />
        <h2 className="Finances">Centralize o controle das suas finanças</h2>
        <span className="span">de forma rápida e segura</span>
        <button className="App-btn" onClick={() => props.setHome(true)}>
          Iniciar
        </button>
      </div>
      <div className="App-rightContainer">
        <Imagem />
      </div>
    </div>
  );
}

export default Iniciar;
