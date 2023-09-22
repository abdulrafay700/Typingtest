var setofWords = ["Tourism is the largest and fastest-growing industry across the world. It is a source of revenue and employment. It also gives the opportunity for people to understand the culture",
"There are many countries whose main source of revenue is Tourism. It is an export that is not visible which earns valuable foreign exchange without any substantial or actual loss of internal resources",
"Tourism is one of the largest industries in terms of money spent by tourists in the countries they visit The amount received from the Tourism industries sometimes exceeds the Gross National Product of many countries"]
let msg = document.querySelector('#msg');
let typedWords = document.querySelector('#myWords');
let btn = document.querySelector('#btn');
let scoreData = document.querySelector('#scoreResult')
let startTime , endTime;


const playGame = ()=>{
    let randomNumber =  Math.floor(Math.random()*setofWords.length);
    msg.innerText = setofWords[randomNumber];
    msg.style.color = "black";
    btn.innerText = "Done";
    btn.style.backgroundColor = "red";
    let date = new Date();
    startTime = date.getTime();
    document.getElementById("displayAnswer").innerHTML=""
    typedWords.value=""
    scoreData.innerHTML = ""
    
};

const endPlay= ()=>{
  btn.style.backgroundColor = "#1E96C8";
    let date = new Date();
    endTime = date.getTime();
   let totaltTime =  ((endTime - startTime)/1000); /// to get the total time
    console.log(totaltTime)
  
    //// for count the words
    let typedWordsTotalStr  = typedWords.value
    let wordCount = wordCounter(typedWordsTotalStr);
    console.log(wordCount + " words processed")

    // forspeed count
    
    //  for if user no write any word don't done (authenthication)
    if(typedWords.value==""){
        alert("sorry write something")

    }
    else{
     //for wpm time
    let speed = Math.round((wordCount / totaltTime) * 60);
    /// for compare parag calling sab sai pahly fun call hoga 
     let compare_function =  compare(msg.innerText, typedWordsTotalStr)
     /// aik final score liya os mai speed rakhi or sath compare fuc sai ju return ai ga os ko cocate kiya hai
     let final_score_msg = `your typed total words is ${speed} words per minute </br>`
    //ab funct si repson ko concate kr diya speed ka sath
     final_score_msg+=compare_function
    //score res var declared hai os main text pass kr diya final score ka
      scoreResult.innerHTML = final_score_msg
    // massage paragraph ju array sai a raha hai os ko clear krna hai
     msg.innerHTML = ""
    }
    

    
}
/////  for compare parag function
const  compare = (str1, str2) => {   
    // split is string method and use for word count and covert string into array
    let word1 =  str1.split(" ",); //for mesage string
    let word2 =    str2.split(" ")// for user writer string
    let cnt = 0
    let displayAns = document.getElementById("displayAnswer")

    console.log("word2 "+word2)
    word1.forEach(function(value,index){ // for each 2 parameters laita hai valu or index value mean words or index 0 sai start 
        console.log( word1[index])
        if(value === word2[index]){ //same word of type words  check with the msge paragraph index
            cnt++; 
            console.log("word2 "+word2)
            console.log("word1 "+index)
            let span = document.createElement("span")
            let textNode = document.createTextNode(value + " ")
            span.appendChild(textNode)
            span.style.color = "Green"
            displayAns.appendChild(span)
        }
        else  {
            let span = document.createElement("span")
            let textNode = document.createTextNode(value + " ")
            span.appendChild(textNode)
            span.style.color = "red"
            displayAns.appendChild(span)
        }
    });
    let mistakeWords = (word1.length - cnt)        
    return(`
    your correct words is ${cnt} out of ${word1.length} words 
    The spalling mistake is total ${mistakeWords} `)
}





// for word count function
const wordCounter = (str)=>{
    let response = str.split(" ").length//split just ignore the spaces and count the words
    console.log("i am a speace " + response)
    return response // return will goes back to the argument side for printing
    
}


///// first method with regular expression
///// This keyword not working with arrow function use regula expressions functions
//// if you use arrow functions use e.target instead of this keyword
btn.addEventListener('click', function() {
    console.log(this)
    if(this.innerText === "Start"){
        typedWords.disabled = false
        playGame();
    }
    else if(this.innerText === "Done"){
        typedWords.disabled = true
        this.innerText = "Start"
        endPlay();
    }
 });





























 /// second method with arrow functions
/// This keyword not working with arrow function use regula expressions functions
// if you use arrow functions use e.target instead of this keyword

// btn.addEventListener('click', (e)=> {
//     // console.log(e.target)
//     if(e.target.innerText == "start"){
//         typedWords.disable = false
//         playGame();
//     }
//  });





/// This keyword not working with arrow function use regula expressions functions
// if you use arrow functions use e.target instead of this keyword

