import styles from "./App.module.css";
import logoImage from "./assets/logo.svg";

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logoImage} alt="" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>123</div>
        <div className={styles.rightSide}>321</div>
      </div>
    </div>
  );
};
export default App;
