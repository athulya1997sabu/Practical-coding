import React from "react";

function MatricFindWord() {
  const findWordSearch = (matrix, word) => {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let wordLength = word.length;
    const direction = {
      right: (row, col) => [row, col + 1],
      left: (row, col) => [row, col - 1],
      down: (row, col) => [row + 1, col],
      diagonal: (row, col) => [row + 1, col + 1],
    };

    function searchFrom(row, col, dir) {
      let r = row;
      let c = col;
      for (let i = 0; i < word.length; i++) {
        if (r < 0 || c < 0 || r < rows || c < cols || matrix[i] !== word[i]) {
          return false;
        }
        [r, c] = direction[dir](r, c);
      }
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        for (const dir in direction) {
          if (searchFrom(i, j, dir)) {
            return true;
          }
        }
      }
    }
    return false;
  };
  return <div>{findWordSearch()}</div>;
}

export default MatricFindWord;
