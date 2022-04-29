import logo from './logo.svg';
import './App.css';

import Skills from './components/Skills';
import Form from './components/Form';

function App() {
  const showAgain = () =>{
    document.getElementById("skills").classList.remove("hidden");
  }
  return (
    <div className="App">
      <header>
        <h1>Quoc Hung Duong</h1>
        <div>
          <p>Email: hungduong.devjs@gmail.com | 249-989-2179</p>
          <a href='https://hungduong.net'>https://hungduong.net | </a>
          <a href='https://www.linkedin.com/in/hung-duong-dev/'>https://www.linkedin.com/in/hung-duong-dev/</a>
          <hr></hr>
        </div>
      </header>
      <br/>
      <main>
        <div>
          <button onClick={showAgain}>Go Back</button>
        </div>
				<Skills />
        <Form />
      </main>
    </div>
  );
}

export default App;
