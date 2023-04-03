
document.addEventListener("click", function val(){
    var qnt=document.getElementById("qnty1").value;
    var sum1=qnt*171;
    document.getElementById("las-print-sum").innerHTML=sum1;
});

document.addEventListener("click", function val2(){
    var qnt2=document.getElementById("qnty2").value;
    var sum2=qnt2*150;
    document.getElementById("sol-print-sum").innerHTML=sum2;
});

document.addEventListener("click", function val3(){
    var qnt3=document.getElementById("qnty3").value;
    var sum3=qnt3*190;
    document.getElementById("led-print-sum").innerHTML=sum3;
});

document.addEventListener("click", function val4(){
    var qnt4=document.getElementById("qnty4").value;
    var sum4=qnt4*230;
    document.getElementById("buis-print-sum").innerHTML=sum4;
});

document.addEventListener("click", function val5(){
    var qnt5=document.getElementById("qnty5").value;
    var sum5=qnt5*260;
    document.getElementById("3d-print-sum").innerHTML=sum5;
});

document.addEventListener("click",function set(){
    var arr1=document.getElementById("las-print-sum").innerHTML
    var arr2=document.getElementById("sol-print-sum").innerHTML
    var arr3=document.getElementById("led-print-sum").innerHTML
    var arr4=document.getElementById("buis-print-sum").innerHTML
    var arr5=document.getElementById("3d-print-sum").innerHTML
    var arr=[arr1,arr2,arr3,arr4,arr5];
    var tot=0;
    for(let i=0;i<5;i++)
    {
        tot=(Number(tot)+Number(arr[i]));
    }
    document.getElementById("final").innerHTML=tot;
});


import vale from "./printer.js";

alert(vale);