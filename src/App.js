import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const MyComponent = () => <p>Hello, I am React component!</p>


function App() {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState([{url: ""}]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.thecatapi.com/v1/images/search/");
      res
        .json()
        .then(res => setData(res))
        .catch(err => setErrors(err));
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
        <img src={data[0].url} className="App-logo" alt="" />
        <MyComponent />
      </header>
    </div>
  )}
  </>
  );
}

export default App;

