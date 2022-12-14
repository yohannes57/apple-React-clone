import Header from "../components/Header/Header";
import "../Assets/css/bootstrap.css";
import "../Assets/css/styles.css";
import Routers from "./Routers";
import Footer from "../components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
