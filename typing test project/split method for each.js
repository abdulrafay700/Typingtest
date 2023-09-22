let a  = document.querySelector("#demo").innerText
let b = a.split(" ")// convet string into array and then count the words and ignore tne space
let length = b.length
b.forEach(function(value,index){
    console.log(value,index)
})
console.log(b)
let c = b.join(" ") // convert array into the string and add spaces
console.log("joiner Data : " +c)
console.log("the total length is  " + length )