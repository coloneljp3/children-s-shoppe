function colorChange(id, color_1, color_2){
var element = document.getElementById(id);

  if(element.style.color == color_1){

    element.style.color = color_2;
  }
  else{
element.style.color = color_1;
    
  }
};

function propChange(property,value){
this.style.property = value; 
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



//function productFilter(prod,attr){
//var xml = new XMLHttpRequest();

//xml.onreadystatechange = ()=>{
//if(attr == 'none'){
//document.getElementById('product-selection').innerHTML = xml.getElementsByTagName(prod);
//}

//else{

  //document.getElementById('product-selection').innerHTML = xml.getElementsByTagName(prod)[];

//}
//  };
//xml.open('GET','/products.xml','true');

//xml.send();
  
//};



function shiftImage(urlList,id,id_2){
var elem = document.getElementById(id);
var elem_2 = document.getElementById(id_2);
  var ind = urlList.indexOf(elem.style.src);
  console.log(ind)
if(id_2 == 'arrow_2'){
document.getElementById(id).src = urlList[ind+1]}

else{
document.getElementById(id).src = urlList[ind-1]}

  
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
while(b<=e){
z.push(b)
b+=1
  
}
return z


}

function priceSort(classname){
var classes = document.getElementsByClassName(classname)
for(let i of range(0,classes.length)){
  var min_index = i
    for(let a of range(i+1,classes.length)){
          if(classes[a].price<classes[min_index].price){
          min_index = classes[a]
          }
      
    }
  classes[a],classes[min_index] = classes[min_index],classes[a];
  
}
return classes
}
