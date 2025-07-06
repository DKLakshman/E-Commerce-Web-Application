import { useState } from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import MenSection from "./pages/MenSection";
import WomenSection from "./pages/WomenSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/nav" element={<Nav/>}/>
        <Route path="/menSection" element={<MenSection/>}/>
        <Route path="/womenSection" element={<WomenSection/>}/>

      </Routes>
     
    </Router>
  );
}

export default App;
