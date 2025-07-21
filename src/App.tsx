import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Header, Page, Footer } from "./components/Layout";

import {
  Verification, TargetCall, BusinessLook, DigitalResearch,
  DigitalTarget, Home, KcellContact, LeadGeneration, Scoring
} from "./pages";

function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital-research" element={<DigitalResearch />} />
          <Route path="/business-look" element={<BusinessLook />} />
          <Route path="/scoring" element={<Scoring />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/digital-target" element={<DigitalTarget />} />
          <Route path="/kcell-contact" element={<KcellContact />} />
          <Route path="/lead-generation" element={<LeadGeneration />} />
          <Route path="/target-call" element={<TargetCall />} />
        </Routes>
      </Page>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
