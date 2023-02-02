import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let json = await response.json();
      setData(json);
      console.log("data", json);
    } catch (error) {
      console.error(error);
    }
  };
  const addItem = () => {
    const newItem = {
      userId: new Date().getTime(),
      id: 1,
      title: "IT",
      body: "intern",
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("result", data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <h1>Fetch and Create </h1>
      <button type="submit" className="button-fetch" onClick={getData}>
        Fetch
      </button>
      <button type="submit" className="button-fetch" onClick={addItem}>
        Create
      </button>

      {data.map((home) => (
        <div>{home.id}</div>
      ))}
    </div>
  );
}

export default App;
