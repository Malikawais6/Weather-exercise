import React from "react";
import { Provider } from "react-redux";
import WeatherContainer from "./container/WeatherContainer";

import { store } from "./store/store";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WeatherContainer />
      </Provider>
    </div>
  );
}

export default App;
