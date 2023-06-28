import Header from './Components/Features/Header/Header';
import Home from './Components/Pages/Home/Home';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
