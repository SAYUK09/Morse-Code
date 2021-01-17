const btn = document.querySelector(".btn");
console.log(btn);
const outputDiv = document.querySelector(".outputDiv");
console.log(outputDiv);

btn.addEventListener('click', clickHandler);

function clickHandler(){
   var input = document.querySelector(".inputDiv")
   console.log(input.value)
   var inputText = input.value

    translate(inputText)

}

function translate(inputText){
    var url ="https://api.funtranslations.com/translate/morse.json" 
    var fetchUrl = `${url}?text=${inputText}`
    console.log(fetchUrl)

    fetch(fetchUrl)
    .then(response=>response.json())
    .then(json=>{
        console.log(json)
        var translatedText =json.contents.translated
        outputDiv.innerHTML=translatedText
        console.log(translatedText)
    })
    .catch((error)=>{
        alert("Error! Try again After some time", error)
        console.log("Bad:", error)
    })
    
    outputDiv.classList.add("bold");


}