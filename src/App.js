import logo from './logo.svg';
import './App.css';
import { useState  } from 'react';
import React, { useEffect } from 'react';

/*


Create a new React component called LifecycleDemo.
Add console.log() statements in each of the lifecycle methods (componentDidMount, componentDidUpdate, and componentWillUnmount).
In the render method, display a button that updates the state when clicked.
Open your browser's console and observe the order in which the lifecycle methods are called.


*/
function Count({count, button}){

return(
  <div>
    <h3>Count is: {count}</h3>
    {button}
  </div>

)
}



function App() {
  const [count, setCount] = useState(0)

  function addOne(){
    setCount(count + 1)
  }

  useEffect(() => {
    // This code runs after the component is mounted
    console.log('Component did update');
    
    
    // There's no return statement here, so nothing runs on unmount
  }, [count])

  useEffect(() => {
    // This code runs after the component is mounted
    console.log('Component did mount');
  
    
    // There's no return statement here, so nothing runs on unmount
  }, [])

  useEffect(() => {
    // This code runs after the component is mounted
  
    return ()=>{
      console.log('comp did unmount')
    }
    // There's no return statement here, so nothing runs on unmount
  }, [count])
  

  return (
    <div>
      <Count count={count} button={<button onClick={addOne}>+1</button>}></Count>
    
    </div>
  );
}

export default App;
