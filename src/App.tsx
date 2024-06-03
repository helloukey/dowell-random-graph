import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
