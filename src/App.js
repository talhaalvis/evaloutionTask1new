import "./App.css";
// import Header from './components/Header'
import Tabs from "./components/Tabs";
import CoinTable from "./components/CoinTable";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Tabs style={{ marginTop: "20px" }} />
        <CoinTable />
      </div>
    </Provider>
  );
}

export default App;
