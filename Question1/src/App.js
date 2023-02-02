import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  var arrResult = [];

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
    //
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        arrResult.push(data);
        setData(arrResult);
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
      <div id="demo">
        {data == null ? (
          <></>
        ) : (
          data.map((item) => (
            <div id="divItem">
              <p>
                id: {item.id} userId: {item.userId} title: {item.title}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
