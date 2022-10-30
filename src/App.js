import About from "./components/About/About";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header></Header>
          <Introduction></Introduction>
          <About></About>
      </header>
    </div>
  );
}

export default App;
