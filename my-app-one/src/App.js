import logo from './logo.svg';
import './App.css';
import Message from './components/Message.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message props="Some message..."/>
      </header>
    </div>
  );
}

export default App;
