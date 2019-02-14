let output = document.querySelector("#output");
const addElementBtn = document.querySelector("#add-element");

let arr = [];
for (let i = 0; i<100; i++){
    arr.push("0");
}
output.textContent = arr.join("");
let arrObj = [];
addElementBtn.addEventListener("click",buttonHandler)
function buttonHandler(event){
    if (arrObj.length===100) return;
    arrObj.push(new elementOne());
}
class elementOne {
    constructor(){
        this.index = 0;
        this.isMoveForward = true;
        this.value = "1";
    }
    move(){
        if (this.isMoveForward){
            if(arr[this.index+1] === "1" || this.index+1 === arr.length){
                this.isMoveForward = false;
                if (arr[this.index-1] === "1" || this.index === 0) return;
            }
        } else if(arr[this.index-1] === "1" || this.index === 0){
                this.isMoveForward = true;
                if (arr[this.index+1] === "1" || this.index+1 === arr.length) return;
        }
        if(this.isMoveForward){
            arr.splice(this.index+1,1,this.value);
            arr.splice(this.index,1,"0");
            this.index++;
        } else {
            arr.splice(this.index-1,1,this.value);
            arr.splice(this.index,1,"0");
            this.index--;
        }
    }
}
let oneID = setInterval(oneIteration,100);
function oneIteration (){
    arrObj.map(el=>el.move());
    output.textContent = arr.join("");
}