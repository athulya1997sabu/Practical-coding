import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        setData(response);
      } catch (error) {
        console.error("error while fetching", error)
      }
    };
    fetchDatas()
  }, []);

  return <div>
  {data.map(user => (
    <div key={user.id}>{user.title}</div>
  ))}
</div>;
}

export default FetchData;
