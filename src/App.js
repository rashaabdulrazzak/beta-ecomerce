import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          {/* not existing route redirect to not found */}
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
