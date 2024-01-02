import "./App.css";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <section>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/productlisting" element={<ProductListing />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
