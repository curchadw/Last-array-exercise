//First create a array of strings
//Second create a empty array
//Third create a for loop that is based on the size of the first array
//Forth push the values of the first array into the empty array

let names = ['Johnny', 'Joe', 'Jane', 'John']

let newArray = []

for (let i = 0; i < names.length; i++){
  newArray.push(names[i])
  console.log(`This is the new array----> ${newArray}`)
}