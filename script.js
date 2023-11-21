//your code here
let resetBtn = document.getElementById("reset");
let verifyBtn = document.getElementById("verify");
resetBtn.style.display = "none";
verifyBtn.style.display = "none";
resetBtn.addEventListener("click", onResetClick);
verifyBtn.addEventListener("click", onVerifyClick);

let main = document.querySelector("main");
let flex = document.querySelector(".flex");
let randomValue = Math.floor(Math.random()*5 + 1);
let imgElement = document.createElement("img");
imgElement.classList.add(`img${randomValue}`);
flex.appendChild(imgElement);

let images = document.querySelectorAll("img");
for ( let i = 0; i < images.length; i++){
    images[i].addEventListener("click", onImageClick);
}

function onImageClick(event){
    event.target.classList.toggle("selected");
    if(resetBtnActive()){
        resetBtn.style.display = "inline-block";
    }
    else {
        resetBtn.style.display = "none";
    }

    if(verifyBtnActive()){
        verifyBtn.style.display = "inline-block";
    }
    else{
        verifyBtn.style.display = "none";
    }
}

function resetBtnActive(){
    for ( let i = 0; i < images.length; i++){
        if(images[i].classList.contains("selected")){
            return true;
        }
    }
    return false;
}

function verifyBtnActive(){
    let count = 0;
    for ( let i =0; i < images.length; i++ ){
        if(images[i].classList.contains("selected")){
            count++;
        }
    }
    if(count == 2 ){
        return true;
    }
    return false;
}

function onResetClick(){
    for ( let i = 0; i < images.length; i++ ){
        if(images[i].classList.contains("selected")){
            images[i].classList.remove("selected");
        }
    }
	let para = document.querySelector("p");
    if(para != null){
        para.remove();
    }
    resetBtn.style.display = "none";
    verifyBtn.style.display = "none";
}

function onVerifyClick(){
    let selectImg = document.querySelectorAll(".selected");
    let p = document.createElement("p");
    p.id = "para";
    if(selectImg[0].className == selectImg[1].className){
        p.innerText = "You are a human. Congratulations!";
    }
    else {
        p.innerText = "We can't verify you as a human. You selected the non-identical tiles."
    }
    main.appendChild(p);
    verifyBtn.style.display = "none";
}