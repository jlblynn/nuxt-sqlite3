export function newWork() {
  let message = "Hello Joe"
  return message
}
let myVariable = [
  {username: "test"},
  {username: "poop"},
  {username: "oi"}
]

export const MY_CONST = 'Vue.js';
export function myFoo(a, b) {
    return a + b;
}
export function userLookup(newUsername) {
  //console.log(myVariable[1].username)

  //for (let i = 0; i < myVariable.length; i++) {
    //console.log(myVariable[i].username)
  //}

  myVariable.map(function(num) {
    let users = num.username
    if (users !== newUsername) {
      //console.log("free")
      return "YAY"
    } else {
      //console.log("taken")
      return "PISS"
    }
  })
  
  /*
  for (let key of Object.keys(myVariable)) {  
    let check = myVariable[key]

    if (check === username) {
      console.log("taken")
      return "PISS"
    }
    else {
      console.log("free")
      return "YAY"
    }

  } */
}

