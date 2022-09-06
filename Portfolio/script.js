let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});
const html = document.querySelector('html')
const check = document.querySelector('#checkbox')
let intro_text = document.getElementById('intro_text');
txt = intro_text.innerText;
intro_text.innerHTML = "";
let i = 0
function typ(id, text) {
    if (i < text.length) {
        id.innerHTML += text.charAt(i)
        i++;
        setTimeout(() => typ(id, text), 100)
    }
}
typ(intro_text, txt);

let about = document.getElementById('about').firstElementChild
let portfolio = document.getElementById('portfolio').firstElementChild
let blog = document.getElementById('blog').firstElementChild

let btn = document.getElementById("formbtn")
console.log(btn)
btn.addEventListener('click', () => {
    let name = document.getElementById("fname").value
    let email = document.getElementById("fmail").value
    let phone = document.getElementById("fph").value
    let msg = document.getElementById("fmsg").value
    validate(name,email,phone,msg)
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(msg)
})

function validate(name,email,phone,msg){
    if(name.length<2)
        alert("Enter name of more than 2 characters")
    if(email.length<1)
        alert("Enter email of more than 5 characters")
    else if (email.length>1){
        let emlre = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        let emltst = emlre.test(email)
        alert("Validated Email "+emltst)
    }
    
    if(phone.length<10)
        alert("Enter phone number of exactly 10 numbers")
    // else if(phone.length==10){
    //     let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    //     let phoneResult = phoneRGEX.test(phone);
    //     alert(`phone: ${phone} ${phoneResult}`);
    // }
    if(msg.length>1)
        alert(`You have entered the following message ${msg}... press ok to confirm`)
    if(msg.length<1)
        alert("You have not entered any message... press ok to continue")
    
}