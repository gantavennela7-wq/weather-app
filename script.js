const apiKey="da9ae9435d019c84326b39f4b6e323ee"
async function getWeather(){
let city=document.getElementById("city").value;
if(city===""){
alert("Enter city name");
return;
}
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
try{
let response=await fetch(url);
let data=await response.json();
if(data.cod!==200){
alert(data.message);
return;
}
document.getElementById("cityName").innerHTML=data.name;
document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"°C";
document.getElementById("condition").innerHTML=data.weather[0].description;
document.getElementById("humidity").innerHTML=data.main.humidity+"%";
document.getElementById("feels").innerHTML=Math.round(data.main.feels_like)+"°C";
document.getElementById("icon").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
catch(error){
console.log(error);
alert("Error fetching weather");
}
}
const toggle=document.getElementById("modeToggle");
if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
toggle.checked=true;
}
toggle.addEventListener("change",()=>{
if(toggle.checked){
document.body.classList.add("dark");
localStorage.setItem("theme","dark");
}
else{
document.body.classList.remove("dark");
localStorage.setItem("theme","light");
}
});