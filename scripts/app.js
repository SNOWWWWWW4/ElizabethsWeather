navigator.geolocation.getCurrentPosition(success, errorFunc);

{
    coords:{
      latitude :32.1234;
      longitude: 13.1234;
    }
}
  
let lat;
let lon;

function success(position){
    console.log("Our latitude: "+ position.coords.latitude);
    console.log("Our longitude: "+ position.coords.longitude);
}

function errorFunc(){
    console.log(error.message);
}

let searchBtn = document.getElementById("searchBtn");
let userInput = document.getElementById("userInput");
let cityName = document.getElementById("cityName");
let desc = document.getElementById("desc");
let temp = document.getElementById("temp");



searchBtn.addEventListener('click',function(){
    ApiCall();
    userInput.value="";
})

async function ApiCall(){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput.value}&appid=c645874ad7646520bb22ef8b9e4ad9cc&units=imperial`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{ 
        console.log(data.list[0].main.temp);
        temp.textContent = Math.round(data.list[0].main.temp); 


        console.log(data.list[0].weather.description);

    })

    .catch(err => alert("Wrong city name!"))
}