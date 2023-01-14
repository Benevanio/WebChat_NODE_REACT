import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
const socket = io.connect('http://localhost:3002');
function App() {
const [userName, setUserName] = useState('');
const [roomID, setRoomID] = useState('');

const joinRoom = () => {

}
  return (
    <div className="App">
     <h3>
      Join the chat
     </h3>
    <input type="text" placeholder="Join..."onChange={(e) => setUserName(e.target.value)}/>
    <input type="submit" value="Room ID..." onChange={(e) =>
    setRoomID(e.target.value)}/>
    <button type="submit">Join</button>
    </div>
  );
}

export default App;
