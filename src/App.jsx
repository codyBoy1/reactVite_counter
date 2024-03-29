import {useState} from 'react'

function App() {
//let counter =0;// this doesnot work in UI
let [counter , setCounter ] = useState(0)
const addValue = () => {
  if(counter<20){
    counter = counter  +1 
  setCounter(counter)
  }else{
    alert("counter can't exceed to 20")
  }
}
const subValue = () => {
  
  if(counter>0){
  counter = counter -1 
  setCounter(counter)//to update value 
    
  }else{
    alert("counter can't be less than 0")
  }
}
  return (
    <>
      <h3> counter app </h3>
      <p>count value : {counter}</p>
      <button onClick={addValue}>addValue</button><br/>
      <button onClick={subValue}>subValue</button>
    </>
  )
}

export default App
