let str='';
let ipt=document.querySelector('.input')
let buttons=document.querySelectorAll(".btn");
ipt.addEventListener("click",()=>{
    ipt.style.outline="none"
})
for(btn of buttons){
     btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='C'){
            str='';
            ipt.value=str;
        } else if(e.target.innerHTML=='='){
            str=eval(str);
            ipt.value=str;
        }else {
          console.log(e.target);
          str=str+e.target.innerHTML;
          ipt.value=str;}
    })
}

let arr=new Array(buttons.length);
for (let i=0;i<16;i++) {
    arr[i]=buttons[i].innerHTML;
}

console.dir(str)
function cut(string){
    if(typeof(string==="number")){
        return toString(string).slice(0,-1);
    }else{
        return string.slice(0,-1);
    }
}
ipt.addEventListener("keyup",(e)=>{
    // console.log(e)
    if(e.key==="Enter"||e.key==="="){
        str=eval(str);
        ipt.value=str;
    }
    else if(e.key==="C"||e.key==="c"){
        str='';
        ipt.value=str;
    }
    else if(e.key==="Backspace"){
     str=cut(str);
     ipt.value=str;
     console.log(str);
    }else if(arr.includes(e.key)){
        str=str+e.key;
        ipt.value=str;
        // console.log("true");
        
    }else{
        return ;
    }
})

