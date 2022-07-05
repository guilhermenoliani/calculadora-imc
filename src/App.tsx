import { useState } from "react";
import styles from "./App.module.css";
import logoImage from "./assets/logo.svg";

const App = () => {
  const [heightField, setHightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const calculateImc = () => {
    if (heightField && weightField) {
    } else {
      alert("Digite os campos corretamente!");
    }
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logoImage} alt="" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
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
          <button onClick={calculateImc}>Calcular IMC</button>
        </div>
        <div className={styles.rightSide}>321</div>
      </div>
    </div>
  );
};
export default App;
