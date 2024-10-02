import React from "react";

function FlattenArrayLoop() {
  const arrayData = [1, 2, 3, [5, 7, 6, [6]]];
  const flattenArray = (arr) => {
    let stack = [...arr];
    let result = [];
    while (stack.length) {
      let next = stack.pop();
      if (Array.isArray(next)) {
        stack.push(...next);
      } else {
        result.push(next);
      }
    }
    return result.reverse();
  };
  return <div>flatte array11: {flattenArray(arrayData)}</div>;
}

export default FlattenArrayLoop;
