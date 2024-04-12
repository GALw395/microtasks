
import { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Button } from './components/Button';

function App() {
  const [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' }
  ]
  )

  let [title, setTitle] = useState('')

  const addMassege = (title: string) => {
    let newMessage = { message: title }
    setMessage([newMessage, ...message])
  }

  const callBackButtonHandler = () => {
    addMassege(title)
    setTitle('')
  }

  return (
    <div className={'App'}>
      
        <Input setTitle={setTitle} title={title}/>
        <Button name={'+'} callBack={callBackButtonHandler}/>

      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  )
}

export default App;
