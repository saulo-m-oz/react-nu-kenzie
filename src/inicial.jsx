import { useState } from "react";
import App from "./App";
import Iniciar from "./components/Iniciar";

function Inicial() {
  const [home, setHome] = useState(false);

  return (
    <>{home ? <App setHome={setHome} /> : <Iniciar setHome={setHome} />}</>
  );
}

export default Inicial;
