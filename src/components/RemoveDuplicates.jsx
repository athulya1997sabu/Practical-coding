import React from "react";

function RemoveDuplicates() {
  const data = [1, 2, 4, 3, 4, 4, 5, 3, 6, 7, 8];
  const removeDuplicatesValue = (arr) => {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      if (!duplicates.includes(data[i])) {
        duplicates.push(data[i]);
      }
    }
    return duplicates;
  };
  return <div>{removeDuplicatesValue(data)}</div>;
}

export default RemoveDuplicates;
