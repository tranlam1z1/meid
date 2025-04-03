import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ServiceComponent from "./page/ServiceComponent";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Content />
      <ServiceComponent/>
      <Footer/>
    </>
  );
}

export default App;
