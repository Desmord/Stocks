import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import { URL_ADRESSES } from './Utilities/UtilitiesData';
import store from './Redux/Store';

import Header from './Components/Features/Header/Header';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import UserPanel from './Components/Pages/UserPanel/UserPanel';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path={URL_ADRESSES.HOME} element={<Home />} />
            <Route path={URL_ADRESSES.LOGIN} element={<Login />} />
            <Route path={URL_ADRESSES.USER_PANEL} element={<UserPanel />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
