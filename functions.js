function colorChange(id, color_1, color_2){
var element = document.getElementById(id);

  if(element.style.color == color_1){

    element.style.color = color_2;
  }
  else{
element.style.color = color_1;
    
  }
};

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

function imageSlide(id,urlList){
var image = document.getElementById(id);
for(let i of urlList){
image.src = i;
};

  imageSlide(classname, urlList);
}

function productFilter(){
var xml = new XMLHttpRequest();

xml.onreadystatechange = ()=>{
  if(this.status == 200 && this.readyState == 4){
document.getElementById('product-selection').innerHTML = xml.responseText
    
  };
};
xml.open('GET','https://chidrensshoppe.netlify.app/products.xml','true');
  xml.setRequestHeader('X-Request-With','XMLHttpRequest');
  xml.setRequestHeader('Access-Control-Allow-Origin','https://chidrensshoppe.netlify.app');

xml.send()
  
}
