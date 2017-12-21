var buycar = document.getElementById("buycar");
var buyinfo = document.getElementById("buyinfo");
document.onmouseover = function(event){
 event = event||window.event;
 tar = event.target || event.srcElement;
 if(tar.className == "buycar"||tar.className == "buyinfo") {
   buycar.style.color = "#ff6700";
   buycar.style.backgroundColor = "#FFFAF0";
   buyinfo.style.display = "block";
 }else{
   buycar.style.backgroundColor = "#424242";
   buycar.style.color = "#b0b0b0";
   buyinfo.style.display = "none";
 }
}
 <!-- nav-->
var ulobj = document.getElementById("ulList"),
pullbox = document.getElementById("pullbox"),
ulList = ulobj.children;
pullPanel =  pullbox.children;
 //console.log(ulList);
//console.log(pullPanellist);
for(var i=0;i<ulList.length;i++){
  ulList[i].index = i;
  ulList[i].onmouseenter = function(){
   for(var i=0;i<pullPanel.length;i++){
    pullPanel[i].style.display = "none";
   }
   pullbox.style.display = "block";
   pullPanel[this.index].style.display = "block";
  }
}
pullbox.onmouseleave = function(){
    pullbox.style.display = "none";
}

 <!-- banner-->
var conList = document.getElementById("conList");
var banUl = conList.children[0];
var banLis = banUl.children;
var rightListBox = conList.children[1];
var rightList = rightListBox.children;
for(var i=0;i<banLis.length;i++){
  banLis[i].index = i;
  banLis[i].onmouseenter = function(){
    for(var i=0;i<banLis.length;i++){
      rightList[i].style.display = "none";
    }
    rightList[this.index].style.display = "block";
  }
}
conList.onmouseleave = function(){
  for(var i=0;i<banLis.length;i++){
   rightList[i].style.display = "none";
  }
}
