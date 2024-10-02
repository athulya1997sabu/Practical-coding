function Anagrams() {
    const IsAnagram = (str1,str2) => {
     let   formatedStr1 = str1.split("").sort().join("")
      let  formatedStr2 = str2.split("").sort().join("")
        return (formatedStr1 === formatedStr2)
    }
  return <div>{IsAnagram("silent","listen") ? "anagram" : "not anagram"}</div>;
}
export default Anagrams;
