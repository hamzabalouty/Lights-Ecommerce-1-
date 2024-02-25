import "./styles.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Arrowup from "./components/Arrowup/Arrowup";
import Collection from "./pages/Collection/Collection";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Wishlist from "./pages/Wishlist/Wishlist";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import ReadPage from "./pages/ReadPage/ReadPage";
import Shop from "./pages/Shop/Shop";
import ProductId from "./pages/ProductId/ProductId";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductId />} />
        <Route path="/readpage/:id" element={<ReadPage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Arrowup/>
      <Footer />
    </BrowserRouter>
  );
}
