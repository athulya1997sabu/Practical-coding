import axios from "axios";
import React, { useEffect, useState } from "react";

function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/person.json"); // Fetch data from the JSON file
        setData(response.data); // Set state with response data
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Education</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.education}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
