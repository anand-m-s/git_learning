function gitDemo(){
    document.getElementById("demo").innerHTML='clicked';
}
function num1(){
    const nums=["1","2","3","4"];
  
    let s="";
    for (let i=0;i<nums.length;i++){
        s+=nums[i]+ "<br>";
        document.getElementById("num").innerHTML=s;

    }
}
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
//   }