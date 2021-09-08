import { Provider } from "react-redux";

import { store } from './store';

import Routes from "./routes";

import './styles.css'
import Menu from "./components/components/Menu";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Provider store={store}>
        <Menu />

        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
