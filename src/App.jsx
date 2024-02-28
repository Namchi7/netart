import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingView from "./components/LandingView";
import Pumps from "./components/Pumps";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingView />
      <Pumps />
      <Footer />
    </div>
  );
}

export default App;
