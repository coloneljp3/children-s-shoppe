function menuStat(id){
var menu = document.getElementById(id);
if(menu.style.width == '0px'){
menu.style.width = '100px';
menu.style.height = '40px'
menu.style.fontSize = '20px'}
else{
menu.style.width = '0px';
menu.style.height = '0px';
menu.style.fontSize = '0px';}
};

function circleSelect(ind,urlList,id){
if(this.fill == 'black'){this.fill = 'none'}
else{
  this.fill = 'black';
  document.getElementById(id).src = urlList[ind]
}
}

function colorChange(id, color_1, color_2){
var element = document.getElementById(id);

  if(element.style.color == color_1){

    element.style.color = color_2;
  }
  else{
element.style.color = color_1;
    
  }
};

function propChange(id,property,value){
document.getElementById(id).style[property] = value; 
}

function backColorChange(id, color_1,color_2){
  var element = document.getElementById(id);
   if(element.style.backgroundColor == color_1){

    element.style.backgroundColor = color_2;
  }
  else{
element.style.backgroundColor = color_1;
    
  }

};

function fadeIn(id,transition){
var element = document.getElementById(id);
element.style.transition = "visibility "+ transition;
  if(element.style.visiblity == "hidden")
  {element.style.visibility = "visible"}

  
};

function borderBottomAppear(id, color_1, color_2){
  var elem = document.getElementById(id);
if(elem.style.borderBottomColor == color_1){
elem.style.borderBottomColor = color_2;}else{elem.style.borderBottomColor = color_1;}}

function dropDown(classname){
var dropDown = document.getElementsByClassName(classname);
for(let i of dropDown){
 
i.style.height = '100%';
i.style.width = '100%';
i.style.visibility = "visible";
i.addEventListener('mouseover',(event)=>{
this.style.borderBottomStyle = 'solid';
this.style.borderColor = 'white'
  
});
i.addEventListener('mouseleave',(event)=>{
this.style.borderBottomStyle = 'none';

});
  }
}

function revDropDown(classname){
var dropDown = document.getElementsByClassName(classname);
for(let i of dropDown){
 
i.style.height = '0px';
i.style.width = '0px';
i.style.visibility = "hidden";
  }
}







function shiftImage(urlList,id,id_2){

var elem = document.getElementById(id);
var elem_2 = document.getElementById(id_2);
var ind = urlList.indexOf(elem.src);
  if(ind == -1){ind=0}
else{
if(id_2 == 'arrow_2'){
document.getElementById(id).src = urlList[ind+1]}

else{
document.getElementById(id).src = urlList[ind-1]}

  
}
}

  function xmlMailSend(){
var sender = document.getElementById('sender');
var message = document.getElementById('message');
let xml = new XMLHttpRequest();
xml.onreadystatechange = ()=>{
var f = document.querySelector('#email');
var frm = new FormData(f); 
xml.open('POST','/submit.js','True')
xml.send();
  
}


    }

function searchQuery(classname,property,value){
var list = document.getElementsByClassName(classname)
for(let i of list){
if(i.property == value){

  i.style.display = block
  
}
  else{
i.style.display = none
    
  }
}
  
}

function sort(classname, quality){
var classes = document.getElementsByClassName(classname)
for(let i of classes){
if(i.quality){
i.style.display = "inline-block";
  
}
  else{
i.style.display = "none"
    
  }
  
}
  
}

function range(b,e){
  z=[]
while(b<e){
z.push(b)
b+=1
  
}
return z


}


function productReq(){
var xml = new XMLHttpRequest();
var z;
  xml.onreadystatechange =()=>{
    z = xml.responseText;
  document.getElementById("product-selection").innerHTML = xml.responseText
}
xml.open('GET','/products.xml','true');

xml.send();
};



//function priceSort(){
//var classes = document.getElementsByClassName('price');
//var z;
//var classes_2 = document.getElementById('product-selection);
//var classe = []
//for(let i of range(0,classes.length)){
//console.log(classes[i].value)
 // classe.push(classes[i].value)
//};
    
//for(let i of range(0,classe.length)){
  //var min_index = i;
    //for(let a of range(i+1,classe.length)){
      //    if(classe[a] < classe[min_index]){
        //  min_index = a;

         // };
      //z = a;
      
   // };
//let c = classe[min_index]
//let v = classe[i]
//classe[min_index] = v;
//classe[i] = c;
//}
//for(let i of classe){
//for(let v of range(0,classes.length)){
//if(classes[v].value == i){
  //  console.log(classes[v])
//document.getElementById('product-selection).appendChild(classes[v]);
  
//}  
//}
  
//}
//}




//function searchList(req_word){
  //document.getElementById('options').innerHTML = ''
  //var xml = new XMLHttpRequest();
 //xml.onreadystatechange =()=>{
  //var precursor = document.getElementById('precursor');
   // precursor.innerHTML = xml.responseText;
   //var div = document.createElement('div');
//for(let i of precursor.childNodes){
//var ide = i.id;
 //   if(ide.includes(req_word.toUpperCase())){

  //div.appendChild(i)
//}
  
//}
  // document.getElementById('options').appendChild(div);
//}
//xml.open('GET','/search_options.xml','true');

//xml.send();
//}

function slideDown(event){
event.style.width = 100%;
event.style.height = 100%
  
}
