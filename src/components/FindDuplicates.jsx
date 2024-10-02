import React from "react";

function FindDuplicatesArray() {
  const originalArray = [
    "Daniel",
    "Lucas",
    "Gwen",
    "Henry",
    "Jasper",
    "Lucas",
    "Daniel",
  ];
  function findDuplicates(arr) {
    const elementCount = {};
    const duplicates = [];

    arr.forEach((item) => {
      elementCount[item] = (elementCount[item] || 0) + 1;
      console.log(elementCount);
      if (elementCount[item] === 2) {
        duplicates.push(item);
      }
    });

    return duplicates;
  }
  return (
    <div>
      <p>{findDuplicates(originalArray)} </p>
    </div>
  );
}

export default FindDuplicatesArray;
