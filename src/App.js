import { useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import Message from './components/Message'
import Header from './components/Header'
import RefExample from './components/RefExample';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="App">
      <Header text={message} />
      <Message message={message} setMessage={setMessage} />
      <RefExample />
    </div>
  );
}

export default App;
