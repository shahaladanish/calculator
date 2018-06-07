var result = document.getElementById('result');




function element(val) {
    document.getElementById('result').value += val; 
   }
 function solve() {
    var value1 = document.getElementById('result').value; 
    let res = eval(value1); 
    document.getElementById('result').value = res; 
   }
   function clearelement(val){
    document.getElementById('result').value+=val;
   }