var list = 0;

 
 function addMe() {
   if (list > 3) {
     document.getElementById("full").innerHTML = "The Room is Full";
   }
   else if(event.keyCode=="13"){
     var date= new Date();
     var newlist = document.createElement("li");
     var newText = document.createTextNode(usershit.value+" : "+"Checked in at"+ " "+date);
     newlist.appendChild(newText);
     var position = document.getElementsByTagName("ol")[0];
     position.appendChild(newlist);
     var listnew = document.createElement("li");
     var Textnew = document.createTextNode(usershit.value+" : "+"Checked in at"+ " "+date);
     listnew.appendChild(Textnew);
     var total=document.getElementById("Happy");
     total.appendChild(listnew);
     list++;

   }
 }
 
 function removeMe() {
  document.getElementById("first").addEventListener("click",function(e) {
    document.getElementById("full").innerHTML = "";
  var item = e.target; //Get the LI that has been created which was the one clicked on (target)
  if (item.tagName.toUpperCase() == "LI") { //See if it is an LI
    item.parentNode.removeChild(item); //Remove LI
    list--;
    document.getElementById("full").innerHTML = "";
  }
  
});
  
 }


 var lists = 0;
 function addMe2() {
  
   if (lists > 3) {
     document.getElementById("fill").innerHTML = "The Room is Full";
   }
   else if(event.keyCode=="13") {
     var date2 = new Date();
     var newlist2 = document.createElement("li");
     var newText2 = document.createTextNode(usershit2.value+" : "+"Checked in at"+" "+date2);
     newlist2.appendChild(newText2);
     var position2 = document.getElementsByTagName("ol")[1];
     position2.appendChild(newlist2);
     
     var listnew2 = document.createElement("li");
     var Textnew2 = document.createTextNode(usershit2.value+" : "+"Checked in at"+ " "+date2);
     listnew2.appendChild(Textnew2);
     var total2=document.getElementById("Happy");
     total2.appendChild(listnew2);
     lists++;

   }

 }

function removeMe2() {
      
  document.getElementById("second").addEventListener("click",function(e) {
    document.getElementById("fill").innerHTML = "";
  var item = e.target; //Get the LI that has been created which was the one clicked on (target)
  if (item.tagName.toUpperCase() == "LI") { //See if it is an LI
    item.parentNode.removeChild(item); //Remove LI
    lists--;
    document.getElementByID("fill").innerHTML="";  }
  
});
  
 }

 var List = 0;
 function addMe3() {
  
   if (List > 3) {
     document.getElementById("closed").innerHTML = "The Room is Full";
   }
   else if(event.keyCode=="13") {
     var date3= new Date();
     var newlist3 = document.createElement("li");
     var newText3 = document.createTextNode(usershit3.value+" : "+"Checked in at"+" " +date3);
     newlist3.appendChild(newText3);
     var position3 = document.getElementsByTagName("ol")[2];
     position3.appendChild(newlist3);
     
     var listnew3 = document.createElement("li");
     var Textnew3 = document.createTextNode(usershit3.value+" : "+"Checked in at"+ " "+date3);
     listnew3.appendChild(Textnew3);
     var total3=document.getElementById("Happy");
     total3.appendChild(listnew3);
     
     List++;

   }

 }

function removeMe3() {
      
  document.getElementById("third").addEventListener("click",function(e) {
    document.getElementById("closed").innerHTML = "";
  var item = e.target; //Get the LI that has been created which was the one clicked on (target)
  if (item.tagName.toUpperCase() == "LI") { //See if it is an LI
    item.parentNode.removeChild(item); //Remove LI
    List--;
    document.getElementByID("closed").innerHTML="";  }
  
});
  
 }


 var List2 = 0;
 function addMe4() {
  
   if (List2 > 3) {
     document.getElementById("No").innerHTML = "The Room is Full";
   }
   else if(event.keyCode=="13") {
     var date4 = new Date();
     var newlist4 = document.createElement("li");
     var newText4 = document.createTextNode(usershit4.value+" : "+"Checked in at"+" " +date4);
     newlist4.appendChild(newText4);
     var position4 = document.getElementsByTagName("ol")[3];
     position4.appendChild(newlist4);
     
     var listnew4 = document.createElement("li");
     var Textnew4 = document.createTextNode(usershit4.value+" : "+"Checked in at"+ " "+date4);
     listnew4.appendChild(Textnew4);
     var total4=document.getElementById("Happy");
     total4.appendChild(listnew4);
     List2++;

   }

 }

function removeMe4() {
      
  document.getElementById("fourth").addEventListener("click",function(e) {
    document.getElementById("No").innerHTML = "";
  var item = e.target; //Get the LI that has been created which was the one clicked on (target)
  if (item.tagName.toUpperCase() == "LI") { //See if it is an LI
    item.parentNode.removeChild(item); //Remove LI
    List2--;
    document.getElementByID("No").innerHTML="";  }
  
});
  
 }


 var List3 = 0;
 function addMe5() {
  
   if (List3 > 3) {
     document.getElementById("Nien").innerHTML = "The Room is Full";
   }
   else if(event.keyCode=="13") {
     var date5= new Date();
     var newlist5 = document.createElement("li");
     var newText5 = document.createTextNode(usershit5.value+" : "+"Checked in at"+" " +date5);
     newlist5.appendChild(newText5);
     var position5 = document.getElementsByTagName("ol")[4];
     position5.appendChild(newlist5);
     
     var listnew5 = document.createElement("li");
     var Textnew5 = document.createTextNode(usershit5.value+" : "+"Checked in at"+ " "+date5);
     listnew5.appendChild(Textnew5);
     var total5=document.getElementById("Happy");
     total5.appendChild(listnew5);
     
     List3++;

   }

 }

function removeMe5() {
      
  document.getElementById("fifth").addEventListener("click",function(e) {
    document.getElementById("Nien").innerHTML = "";
  var item = e.target; //Get the LI that has been created which was the one clicked on (target)
  if (item.tagName.toUpperCase() == "LI") { //See if it is an LI
    item.parentNode.removeChild(item); //Remove LI
    List3--;
    document.getElementByID("Nien").innerHTML="";  }
  
});
  
 }
 var List4 = 0;
 function addMe6() {
  
   if (List4 > 3) {
     document.getElementById("Clear").innerHTML = "The Room is Full";
   }
   else if(event.keyCode=="13") {
     var date6 = new Date();
     var newlist6 = document.createElement("li");
     var newText6 = document.createTextNode(usershit6.value+" : "+"Checked in at"+" " +date6);
     newlist6.appendChild(newText6);
     var position6 = document.getElementsByTagName("ol")[5];
     position6.appendChild(newlist6);
     
     var listnew6 = document.createElement("li");
     var Textnew6 = document.createTextNode(usershit6.value+" : "+"Checked in at"+ " "+date6);
     listnew6.appendChild(Textnew6);
     var total6=document.getElementById("Happy");
     total6.appendChild(listnew6);
     List4++;

   }

 }

function removeMe6() {
      
  document.getElementById("six").addEventListener("click",function(e) {
    document.getElementById("Clear").innerHTML = "";
  var item = e.target; //Get the LI that has been created which was the one clicked on (target)
  if (item.tagName.toUpperCase() == "LI") { //See if it is an LI
    item.parentNode.removeChild(item); //Remove LI
    lists--;
    document.getElementByID("Clear").innerHTML="";  }
  
});
  
 }
function removeAll(){
        var remove = document.getElementById("second");
        var first = remove.firstElementChild;
        while (first) {
            first.remove();
            first = remove.firstElementChild;
            lists=0
        }
        document.getElementById("fill").innerHTML = ""
        
        
        var remove2 = document.getElementById("third");
        var second = remove2.firstElementChild;
        while (second) {
            second.remove();
            second = remove2.firstElementChild;
            list=0
        }
        document.getElementById("closed").innerHTML = ""
        
        
        var remove3 = document.getElementById("fourth");
        var third = remove3.firstElementChild;
        while (third) {
            third.remove();
            third = remove3.firstElementChild;
            List2=0
        }
        document.getElementById("No").innerHTML = ""
        
        
        var remove4 = document.getElementById("fifth");
        var fourth = remove4.firstElementChild;
        while (fourth) {
            fourth.remove();
            fourth = remove4.firstElementChild;
            List3=0
        }
        document.getElementById("Nien").innerHTML = ""
        
        
          var remove5 = document.getElementById("six");
        var fifth= remove5.firstElementChild;
        while (fifth) {
            fifth.remove();
            fifth = remove5.firstElementChild;
            List4=0
        }
        document.getElementById("Clear").innerHTML = ""
  
         var remove6 = document.getElementById("first");
        var six= remove6.firstElementChild;
        while (six) {
            six.remove();
            six = remove6.firstElementChild;
            list=0
        }
        document.getElementById("full").innerHTML = ""
        
}
       
        function cleaning() {
          document.getElementById("clean1").style.visibility="hidden";
          
          document.getElementById("clean2").style.visibility="hidden";
          
          document.getElementById("clean3").style.visibility="hidden";
          
          document.getElementById("clean4").style.visibility="hidden";
          
          document.getElementById("clean5").style.visibility="hidden";
          
          document.getElementById("clean6").style.visibility="hidden";
          
  
}

      function openRoom() {
          document.getElementById("clean1").style.visibility="visible";
          
          document.getElementById("clean2").style.visibility="visible";
          
          document.getElementById("clean3").style.visibility="visible";
          
          document.getElementById("clean4").style.visibility="visible";
          
          document.getElementById("clean5").style.visibility="visible";
          
          document.getElementById("clean6").style.visibility="visible";
          
  
}
