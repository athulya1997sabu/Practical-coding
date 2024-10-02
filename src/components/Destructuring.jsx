import React from 'react'

function Destructuring() {
    const obj = {
        name:"Athulya",
        age:27,
        height:159,
        status:false
      }
      const data = [1,2,3,4,5]
      const {
        name,age,height,status = true
      } = obj;
      console.log(name,age,height,status)
      const [a,b,c,...others] = data
      console.log(a,b,c,others)
      const [e,f,g,h,i,j = true,k] = data
      console.log("hii",e,f,g,h,i,j,k)
  return (
    <div>Destructuring</div>
  )
}

export default Destructuring