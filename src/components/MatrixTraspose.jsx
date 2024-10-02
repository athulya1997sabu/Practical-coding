import React from "react";

function MatrixTraspose() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
    const transpose = (data) => {
      let rows = data.length; //3
      let colomns = data[0].length; //3
      let transposeData = [];
      for (let i = 0; i < colomns; i++) {
          transposeData[i] = [];
      }
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < colomns; j++) {
          transposeData[j][i] = data[i][j];
        }
      }
      // for (let i = 0; i < colomns; i++) {
      //     console.log(transposeData[i].join(' '));
      // }
      console.log(transposeData);
      let n =transposeData.length;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
          // Swap elements at (i, j) and (i, n - j - 1)
          [transposeData[i][j], transposeData[i][n - j - 1]] = [transposeData[i][n - j - 1], transposeData[i][j]];
        }
      }
      console.log("joo",transposeData);
    }
  return <div>{transpose(matrix)}</div>;
}

export default MatrixTraspose;
