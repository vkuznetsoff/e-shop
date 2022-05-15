import { Provider } from "react-redux";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import store from "./store/store";

import "./App.css";

function App() {
  // const [isLoadingCards, setIsLoadingCards] = useState(false)

  return (
    <Provider store={store}>
      <div className="app">
        <div className="app__opacity">
          <div className="container">
            <Header />
            <Cards />
            <Footer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
