
import './App.css';
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <DictionarySearch />
        <footer className="App-footer">
        This project was coded by <a href="https://www.linkedin.com/in/flávia-caiafa-mól-00595bb1/" target="_blank" rel="noreferrer">Flávia Mól</a>, is open-sourced on{" "}
          <a href="https://github.com/Flaviamol/dictionary-project" target="_blank" rel="noreferrer" >GitHub</a> and hosted on <a href="https://competent-morse-daa0f6.netlify.app" target="_blank" rel="noreferrer">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
