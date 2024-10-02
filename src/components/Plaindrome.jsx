import React from "react";

function Plaindrome() {
  const isPalindrome = (str) => {
    str = str.toLowerCase();
    let reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
  };
  return (
    <div>{isPalindrome("Malayalam") ? "Palindrome" : "Not Plaindrome"}</div>
  );
}

export default Plaindrome;
