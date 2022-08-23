let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});
const html = document.querySelector('html')
const check = document.querySelector('#checkbox')
let intro_text = document.getElementById('intro_text');
txt = intro_text.innerText;
intro_text.innerHTML = "";
let i=0
function typ(id,text){
    if(i<text.length){
        id.innerHTML +=text.charAt(i)
        i++;
        setTimeout(()=>typ(id,text),100)
    }
}
typ(intro_text,txt);

let about = document.getElementById('about').firstElementChild
let portfolio = document.getElementById('portfolio').firstElementChild
let blog = document.getElementById('blog').firstElementChild
