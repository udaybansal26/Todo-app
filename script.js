let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let inp=document.querySelector('input');

btn.addEventListener('click',()=>{
    let item=document.createElement('li');
    item.innerText=inp.value;
    if(inp.value !== ""){
    let delBtn=document.createElement("button");
    delBtn.innerHTML="delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
    }
})

let del=document.querySelector('div').querySelector('ul');

del.addEventListener("click",(event)=>{
    if(event.target.nodeName ==='BUTTON') {
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})