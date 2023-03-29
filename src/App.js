import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header/>,<Home/>]}></Route>
          <Route exact path="/checkout" element={[<Header/>,<Checkout/>]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
