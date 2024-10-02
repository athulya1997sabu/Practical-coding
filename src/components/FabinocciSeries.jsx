function FabinocciSeries() {
  const array = [0, 1];
  const fabinocciPattern = (n) => {
for (let i=2 ; i<=n ; i++){
    array[i] = array[i-1] + array[i-2]
}
return array
  };
  return <div>{fabinocciPattern(10)}</div>;
}
export default FabinocciSeries;
