import { Provider } from "react-redux";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./store/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app__opacity">
          <Header />
          <Cards />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
