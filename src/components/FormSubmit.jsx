import React, { useState } from "react";

function FormSubmit() {
  const [districtName, setDistrictName] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setDistrictName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (districtName.trim() !== " ") {
      setData([...data, districtName]);
      setDistrictName("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter District name"
          onChange={handleChange}
          value={districtName}
        />
        <button type="Submit">Submit</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormSubmit;
