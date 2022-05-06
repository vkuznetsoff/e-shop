import { Provider } from "react-redux";
import Goods from "./components/Cards";
import Header from "./components/Header";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Goods />
    </Provider>

  );
}

export default App;
