// Write your JavaScript code here!
window.onload = function (){
  let submitButton = document.getElementById('formSubmit');
  document.getElementById("missionTarget").innerHTML ='';
   fetch("https://handlers.education.launchcode.org/static/planets.json").then((res)=>{
      res.json().then((data)=>{
         console.log(data);
       let myJson = data[Math.floor(Math.random()*6)];
       document.getElementById("missionTarget").innerHTML = `<h2>Mission Destination</h2>
       <ol>
          <li>Name: ${myJson.name}</li>
          <li>Diameter: ${myJson.diameter}</li>
          <li>Star: ${myJson.star}</li>
          <li>Distance from Earth: ${myJson.distance}</li>
          <li>Number of Moons: ${myJson.moons}</li>
       </ol>
       <img src="${myJson.image}">`;
      });
     });
  submitButton.addEventListener('click',(e)=>{
   
   let hasPassedEverything =true;
   let all = document.querySelectorAll("input");
   for(let i=0;i<all.length;i++){
      if(all[i].value.trim() === ""){
         window.alert("inputs cannot be empty");
         e.preventDefault();
         hasPassedEverything = false;
         break;
      }
     
      if(i===2 || i===3){
         console.log(i);
         if(isNaN(Number(all[i].value))){
            window.alert("enter number for fuel level and Cargo weight");
            e.preventDefault();
            hasPassedEverything = false;
            break;
         }
      }
   }
  if(hasPassedEverything){
   document.getElementById("pilotStatus").innerHTML = `Pilot ${all[0].value} is ready for launch`;
   document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${all[1].value} is ready for launch`;
   console.log(Number(all[2].value)); 
   if(Number(all[2].value) < 10000 || Number(all[3].value) > 10000){
      
     document.getElementById("launchStatus").style.color = "red";
     document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("faultyItems").style.visibility="visible";
       if(Number(all[2].value) < 10000){
      document.getElementById("fuelStatus").innerHTML = "there is not enough fuel for the journey";
       }else{
       document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
       }
       if(Number(all[3].value) > 10000){
      document.getElementById("cargoStatus").innerHTML = "there is too much mass for the shuttle to take off";  
       }else{
       document.getElementById("cargoStatus").innerHTML = "Cargo weight low enough for launch"; 
       } 
      } 
   else{
      document.getElementById("faultyItems").style.visibility="visible";
      document.getElementById("launchStatus").style.color = "green";
     document.getElementById("cargoStatus").innerHTML = "Cargo weight low enough for launch";
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
      document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
   
   }}
   
  
   e.preventDefault();
   
  });
  
}
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
