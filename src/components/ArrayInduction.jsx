function ArrayInduction() {
  const arrayInduction = (arr1, arr2) => {
    for (let i = 0; i <= arr1.length; i++) {
      if (!(arr2.includes(arr1[i]))) {
        arr2.push(arr1[i]);
      }
    }
    return arr2.sort();
  };
  return <div>{arrayInduction([1, 2, 3, 4,5], [2, 3, 6, 8, 9, 7])}</div>;
}
export default ArrayInduction;
