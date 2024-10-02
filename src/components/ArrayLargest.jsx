function FindLargest() {
  const findLargest = (arr) => {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  };
  return <div>{findLargest([2, 63,555, 45])}</div>;
}

export default FindLargest;
