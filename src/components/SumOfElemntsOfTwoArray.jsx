import React from "react";

function SumOfElemntsOfTwoArray() {
  const data = [1, 2, 3];
  const data1 = [1, 7, 3];
  const sumOfElemnts = data.reduce((acc, item, index) => {
    return acc + item + data1[index];
  }, 0);
  return <div>{sumOfElemnts}</div>;
}

export default SumOfElemntsOfTwoArray;
