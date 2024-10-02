import React from "react";

function FlattenArray() {
  const arrayData = [1, 2, 3, [5, 7, 6, [6]]];
  const flattenArray = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(flattenArray(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  };
  return <div>flatte array : {flattenArray(arrayData)}</div>;
}

export default FlattenArray;
