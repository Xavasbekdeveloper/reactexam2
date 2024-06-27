import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Footer from "./components/footer";
import Detail from "./pages/detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:Id" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
