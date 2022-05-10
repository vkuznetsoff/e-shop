import { Provider } from "react-redux";
import Cards from "./components/Cards";
import Header from "./components/Header";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <div className="bg-slate-400">
        <Header />
      <Cards />
      </div>
      
    </Provider>

  );
}

export default App;
