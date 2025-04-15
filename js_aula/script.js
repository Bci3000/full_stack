function pop(){
    window.alert("Hello world")
}
console.log("hello ")
let entrada = prompt("digite 1")
entrada = parseInt(entrada)

if (entrada == 1){
    let text = pop();
}
else{
    console.log("erro")
    for(let i = 10; i>0; i--){
        window.pop("breaking in " + i)
    }
}
