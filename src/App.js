import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      
      </header>
      <main>
        <Dictionary defaultKeyword="hangover" />
      </main>
      <footer className="App-footer">
        <small>
        Coded by <a href="https://www.linkedin.com/in/lucia-rothova-20aa32114/">
        Lucia Rothova
        </a> and is open-sourced on
        <a href="https://github.com/LucyRRR/dictionary-project">
          {" "}Github
        </a>
        </small>
      </footer>
      </div>
    </div>
  );
}
