

let spanTagEl=document.getElementById("spanTag");

const wordList=["Coder","Developer","YouTuber","Teacher"];

let wordIndex=0;
let characterIndex=0;
let skipUpdate=0;
let reverseType=false;

 let intervalId=setInterval(()=>{
    if(skipUpdate){
        skipUpdate--
        return
    }
    if(!reverseType)
    {
        skipUpdate=2;
        spanTagEl.innerText= spanTagEl.innerText + wordList[wordIndex][characterIndex];
    characterIndex++;
    
    
    }
    else{
        spanTagEl.innerText= spanTagEl.innerText.slice(0,spanTagEl.innerText.length-1);
        characterIndex--;
    }
    if(characterIndex=== wordList[wordIndex].length) 
        {
            skipUpdate=6;
            reverseType=true;
        }
    if(spanTagEl.innerText.length===0 && reverseType){
       reverseType=false;
       
       wordIndex++;
    }
    if(wordIndex===wordList.length)
    {
        wordIndex=0;
    }
    
    
},200)