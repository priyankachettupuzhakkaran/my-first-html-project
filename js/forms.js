function getInputValue(){
               
    // Selecting the input element and get its value 
        var inputVal = document.getElementById("name").value;
        var deg =document.getElementById("designation").value
        var ag =document.getElementById("age").value
        
    
        console.log(inputVal)
        console.log(ag)
        console.log(deg)
        if(0<ag && ag>100){
            alert("enter the no between 0 and 100")
            document.getElementById("age").value=""
            document.getElementById("age").focus();
            document.getElementById("age").select();
      }
      else{
      
      var n=document.getElementById("tablename")
      var nameofp= document.createElement("div")
      nameofp.appendChild(document.createTextNode(inputVal))
      n.appendChild(nameofp)
      var d=document.getElementById("tabledesignation")
      var dg=document.createElement("div")
      dg.appendChild(document.createTextNode(deg))
      d.appendChild(dg)
      
      var a=document.getElementById("tableage")
      var age =document.createElement("div")
      age.appendChild(document.createTextNode(ag))
      a.appendChild(age)
      
      document.getElementById("name").value=""
      document.getElementById("age").value=""
      document.getElementById("designation").value=""
      }
      }
    