import logo from "./images.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h3>let's find your word</h3>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a href="https://github.com/kcshrad/dictionary-react-project">
            Open source code
          </a>
          , by Shraddha Thapa{" "}
        </footer>
      </div>
    </div>
  );
}
