import React from 'react'

function AABBBCCAA() {
const data ='AABBBACCAAA'

    const stringOperation = (str) => {
        let outPut = ''
        let count = 1
        for(let i=0;i<str.length;i++){
            if(str[i] === str[i+1]){
                count++
            }else {
                outPut = outPut+count+str[i]
                count = 1
            }
        }
        return outPut
    }
  return (
    <div>{stringOperation(data)}</div>
  )
}

export default AABBBCCAA