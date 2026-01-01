import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <h2 className="flex justify-center text-5xl md:text-7xl font-garamond font-bold mt-16 mb-16">
        Shop Our Product
      </h2>
      <div className="flex justify-center gap-16">
        <ProductCard image="/apple.jpg" name="Dried Apple" price="1600" />{" "}
        <ProductCard image="/orange.png" name="Dried Orange" price="1500" />{" "}
        <ProductCard image="/meat.png" name="Dried Meat" price="2500" />{" "}
        <ProductCard image="/banana.png" name="Dried Banana" price="1200" />{" "}
      </div>{" "}
    </div>
  );
};

export default App;
