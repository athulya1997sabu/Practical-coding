import React from "react";

function PrimeNumber() {
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    if (num % 2 === 0) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    for (let i = 3; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  return <div></div>;
}

export default PrimeNumber;
