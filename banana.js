var translateButton = document.querySelector("#translate-btn");
var translateinput= document.querySelector("#translate-input");
var translateoutput = document.querySelector("#output-box");
var url="https://api.funtranslations.com/translate/minion.json";
translateButton.addEventListener("click",buttonCLickHandler);
function buttonCLickHandler(event){
    var input = translateinput.value;
    var finalurl= costructurl(input);
    fetch(finalurl)
         .then(response => response.json())
         .then(json =>{
            translateoutput.innerText =json.contents.translated;
         })
         .catch(() => alert("some error occured"));
}
function costructurl(inputText){
    var encodedURI= encodeURI(inputText);
    return `${url}?text=${encodedURI}`;

}