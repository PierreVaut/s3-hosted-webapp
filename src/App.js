import React, {useState, useEffect} from 'react';
import './App.css';

const MyComponent = ({data}) => <p>msg: {data}</p>


function App() {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState("...loading");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://hd9h1i76ll.execute-api.us-east-1.amazonaws.com/prod/cloudguruServerless");
      res
        .json()
        .then(({msg}) => {console.log(msg); setData(msg)})
        .catch(err => {console.log({err});setErrors(err)});
    }
    fetchData();
  }, []);


  return (
    <>
    {hasError ?
    <p>Error</p> 
    :(
    <div className="App">
      <header className="App-header">
        <MyComponent data={data}/>
      </header>
    </div>
  )}
  </>
  );
}

export default App;

