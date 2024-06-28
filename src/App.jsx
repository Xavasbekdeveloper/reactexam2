import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Footer from "./components/footer";
import Detail from "./pages/detail";
import Wishlist from "./pages/wishlist";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Auth from "./pages/auth";
import Cart from "./pages/cart";
import numberBrm from "number-brm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:Id" element={<Detail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
