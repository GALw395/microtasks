
import { useState } from 'react';
import './App.css';
import { NewComponent } from './NewComponent';
import { Cars } from './Cars';

function App() {

  const topCars = [
    { manufacturer: 'BMW', model: 'X5' },
    { manufacturer: 'Mersedes', model: 'MLS' },
    { manufacturer: 'Audi', model: 'Q7' }
  ]


  let [students, setStudents] = useState([
    { id: 1, name: 'James', age: 8 },
    { id: 2, name: 'Robert', age: 18 },
    { id: 3, name: 'John', age: 28 },
    { id: 4, name: 'David', age: 38 },
    { id: 5, name: 'Thomas', age: 48 },
    { id: 6, name: 'Richard', age: 58 },
  ])



  return (
    <>
      <NewComponent students={students} />
      <Cars topCars={topCars} />
    </>

  );
}

export default App;
