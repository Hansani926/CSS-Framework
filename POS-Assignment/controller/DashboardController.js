
var dashbord=document.getElementById("dashbord");
var customerContent = document.getElementById("customerContent");
var itemContent = document.getElementById("itemContent");
var orderContent=document.getElementById("orderContent");


customerContent .style.display='none';
itemContent .style.display='none';
orderContent .style.display='none';

var dt=document.getElementById("dt");
dt.addEventListener('click',function (){
    dashbord.style.display='block'
    customerContent .style.display='none';
    itemContent .style.display='none';
    orderContent .style.display='none';
});

var cu=document.getElementById("cu");
cu.addEventListener('click',function (){
    dashbord.style.display='none'
    customerContent .style.display='block';
    itemContent .style.display='none';
    orderContent .style.display='none';
});

var it=document.getElementById("it");

it.addEventListener('click',function (){
    dashbord.style.display='none'
    customerContent .style.display='none';
    itemContent .style.display='block';
    orderContent .style.display='none';
});

var ot=document.getElementById("ot");
ot.addEventListener('click',function (){
    dashbord.style.display='none'
    customerContent .style.display='none';
    itemContent .style.display='none';
    orderContent .style.display='block';
    loadAllCus();
    loadAllItm();
});

