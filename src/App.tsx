
import './App.css';
import { Button } from './components/Button';

function App() {

  

  const Button1Foo = (el: string, age: number) => {
    console.log(el, age)
       
  }

  const Button2Foo = (el: string, age: number) => {
    console.log(el, age)
  }

  const Button3Foo = () => {
    console.log('stupid')
  }



  return (

    <div>
      <Button name = {'My chanel - 1'} callBack={()=>Button1Foo('1', 20)}/>
      <Button name = {'My chanel - 2'} callBack={()=>Button2Foo('2', 25)}/>
      <Button name = {'My chanel - 3'} callBack={Button3Foo}/>
    </div>

  );
}

export default App;
