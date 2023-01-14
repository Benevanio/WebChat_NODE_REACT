import './App.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3009');
function App() {

  return (
    <div className="App">
     <h1>Chat App</h1>
    </div>
  );
}

export default App;
