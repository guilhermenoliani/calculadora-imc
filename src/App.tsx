import styles from "./App.module.css";
import logoImage from "./assets/logo.svg";

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headercontainer}>
          <img src={logoImage} alt="" />
        </div>
      </header>
    </div>
  );
};
export default App;
