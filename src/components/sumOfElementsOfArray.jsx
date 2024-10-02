import React from "react";

function SumOfElements() {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const sumOfElemnts = (arr) => {
    return arr.reduce((acc, item) => acc + item, 0);
  };
  return <div>{sumOfElemnts(data)}</div>;
}

export default SumOfElements;
