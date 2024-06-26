import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
