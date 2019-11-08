
    var a=document.getElementById("one");
    var b=document.getElementById("two");
   var body =document.getElementById("clr");
 a.addEventListener("input",function()
 {
    ;
    body.style.background="linear-gradient(to right,"+ a.value+" , "+b.value+")";
 });
 b.addEventListener("input",function()
 {
    ;
    body.style.background="linear-gradient(to right,"+ a.value+" , "+b.value+")";
 })
