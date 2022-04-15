alert("Welcome to Vishal Thakur Calculator. Tap on blue line for dark mode...")
function join(arg){
    document.getElementById('display').innerHTML+=arg;
    navigator.vibrate(80);
}
function equal(){
if(document.getElementById('display').innerHTML!='')    
document.getElementById('display').innerHTML=eval(document.getElementById('display').innerHTML);
navigator.vibrate(80);
}
function clearL(){
    var y = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML=y.substring(0,y.length-1);
    navigator.vibrate(80);
}
var j=0;
function change(){
    j++;
    if(j%2==0)
        document.getElementById('body').style.backgroundColor="white";
    else
        document.getElementById('body').style.backgroundColor="black";
        navigator.vibrate([100,100,100,100,100,100,100,100,100]);
}