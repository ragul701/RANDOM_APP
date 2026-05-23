import { useState, useEffect } from "react";
import "./index.css";

function App() {

  // Store API data
  const [items, setItems] = useState([]);

  // Current selected button
  const [reqType, setReqType] = useState("users");

  // Fetch data when reqType changes
  useEffect(() => {

    const fetchItems = async () => {

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${reqType}`
      );

      const data = await response.json();

      setItems(data);

    };

    fetchItems();

  }, [reqType]);

  return (

    <div className="container">

      {/* Top Buttons */}

      <div className="buttons">

        <button
          className={reqType === "users" ? "active" : ""}
          onClick={() => setReqType("users")}
        >
          users
        </button>

        <button
          className={reqType === "posts" ? "active" : ""}
          onClick={() => setReqType("posts")}
        >
          posts
        </button>

        <button
          className={reqType === "comments" ? "active" : ""}
            
           
          onClick={() => setReqType("comments")}
        >
          comments
        </button>

      </div>

      {/* Data Section */}

      <div className="data">

        {items.map((item) => (

          <p key={item.id}>
            {JSON.stringify(item)}
          </p>

        ))}

      </div>

    </div>

  );
}

export default App;