import { useState } from "react";
import formatValue from "../../util/format";

import "./style.css";

function Form(props) {
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    if (form.type) {
      props.setListTransactions(form);
    } else {
      setError("Por favor selecionar o tipo de valor.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="Container-Description">
        <p className="Description">Descrição</p>
        <input
          className="Form-Description"
          name="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={handleChange}
          maxLength="30"
          required
        />
        <p className="Example">Ex.: Compra de roupas</p>
      </div>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <div className="Container-Valor">
        <div className="Container-Value">
          <p>Valor</p>
          <input
            className="Input-Valor"
            name="valor"
            type="text"
            placeholder={formatValue(20)}
            onChange={handleChange}
            required
          />
        </div>
        <div className="Container-Type">
          <p>Tipo de valor</p>
          <select name="type" defaultValue="Escolha" onChange={handleChange}>
            <option disabled>Escolha</option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <div>
        <button type="submit" className="Form-Button" id="submitBtn">
          Inserir valor
        </button>
      </div>
    </form>
  );
}

export default Form;
