import { Promo } from "./components";
import { Header, Page, Footer } from "./components/Layout";


export default function App() {


  return (
    <>
      <Header />
      <Page>
        <Promo></Promo>
      </Page>
      <Footer />
    </>
  )
}

