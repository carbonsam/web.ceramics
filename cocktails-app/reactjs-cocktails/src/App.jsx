import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Header />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default App;
