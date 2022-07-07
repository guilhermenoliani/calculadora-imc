import { useState } from "react";
import * as C from "./AppStyle";
import logoImage from "./assets/logo.svg";
import { GridItem } from "./components/GridItem";

import { levels, calculateImc, Level } from "./helpers/imc";

const App = () => {
  const [heightField, setHightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateImc = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Digite os campos corretamente!");
    }
  };

  return (
    <div className="main">
      <header>
        <C.headerContainer>
          <img src={logoImage} alt="" />
        </C.headerContainer>
      </header>
      <C.container>
        <C.leftSide>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.80 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 70 (em Kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateImc}>Calcular IMC</button>
        </C.leftSide>
        <C.rightSide>
          {!toShow && (
            <div className="grid">
              {levels.map((item, index) => (
                <GridItem key={index} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className="rightBig">
              <div className="rightArrow"></div>
              <GridItem item={toShow} />
            </div>
          )}
        </C.rightSide>
      </C.container>
    </div>
  );
};
export default App;
