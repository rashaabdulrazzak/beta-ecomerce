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
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b5565e",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <ToastContainer />
          <NavBar />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/search-result/:searchTerm"
              element={<SearchResult />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/not-found" element={<NotFound />} />
            {/* not existing route redirect to not found */}
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
