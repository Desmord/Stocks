import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { URL_ADRESSES } from './Utilities';

import Header from './Components/Features/Header/Header';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={URL_ADRESSES.HOME} element={<Home />} />
          <Route path={URL_ADRESSES.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
