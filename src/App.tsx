import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import Cards from "./components/Cards";
import Header from "./components/Header";
import { RootStateType } from "./store/rootReducer";
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
