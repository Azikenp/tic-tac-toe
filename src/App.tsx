import Board from "./containers/Board";
import './index.css'
import styles from './styles/Home.module.css'

function App() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}

export default App;
