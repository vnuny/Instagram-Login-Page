const userPlaceHolder = document.getElementById('userPlaceHolder');
const passPlaceHolder = document.getElementById('passPlaceHolder');


const username = document.querySelector('.username');
const password = document.querySelector('.password');


username.addEventListener('input', ()=>{
    BtnColor();
    if(username.value !== ""){
        userPlaceHolder.style.top = "4px";
        username.style.paddingTop = "12px";
        userPlaceHolder.style.fontSize = "10px";
    }else{
        userPlaceHolder.style.top = "12px";
        username.style.paddingTop = "0px";
        userPlaceHolder.style.fontSize = "12px";
    }
})
const handlepass = document.getElementById('handlePass');

password.addEventListener('input', ()=>{
    BtnColor();
    if(password.value !== ""){
        handlepass.style.display = "block";
        passPlaceHolder.style.top = "5px";
        password.style.paddingTop = "20px";
        passPlaceHolder.style.fontSize = "10px";
    }else{
        handlepass.style.display = "none";
        passPlaceHolder.style.top = "10px";
        password.style.paddingTop = "0px";
        passPlaceHolder.style.fontSize = "12px";
    }
})

handlepass.addEventListener('click', ()=>{
    
    const check = password.getAttribute("type") === "text"? false : true;
    if(check){
        password.setAttribute("type", "text");
        handlepass.innerHTML = 'Hide';
    }else{
        password.setAttribute("type", "password");
        handlepass.innerHTML = 'Show';

    }
})

const submitBtn = document.getElementById('submitBtn');
var checkHover = false;
function BtnColor() {
    if (username.value !== "" && password.value.length >= 6) {
        submitBtn.style.backgroundColor = "#1c9dff";
        submitBtn.classList.add(["btnHover"]);
        checkHover = true;
    } else {
        submitBtn.style.backgroundColor = "#76b6ff";
        checkHover = false;
    }
}


submitBtn.onmousemove = ()=>{
    if(checkHover){
        submitBtn.style.backgroundColor = "#1b74e4";
    }else{
        submitBtn.style.backgroundColor = "#76b6ff";
    }
}

submitBtn.onmouseleave = ()=>{
    if(checkHover){
        submitBtn.style.backgroundColor = "#1c9dff";
    }
}