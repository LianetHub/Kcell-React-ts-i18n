import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Page, Footer } from "./components/Layout";

import Home from "./pages/Home/Home";
import DigitalResearch from "./pages/DigitalResearch/DigitalResearch";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital-research" element={<DigitalResearch />} />
        </Routes>
      </Page>
      <Footer />
    </BrowserRouter>
  );
}
