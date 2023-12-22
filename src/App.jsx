import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import SecondNav from "./components/SecondNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <SecondNav />
      <MyFooter />
    </div>
  );
}

export default App;
