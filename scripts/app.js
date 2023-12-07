navigator.geolocation.getCurrentPosition(success, errorFunc);

let lat;
let lon;

function success(position){
    console.log("Our latitude: "+ position.coords.latitude);
    console.log("Our longitude: "+ position.coords.longitude);

}

function errorFunc(error){
    console.log(error.message)
}


// User Searching
let searchBtn = document.getElementById("searchBtn");
let userInput = document.getElementById("userInput");

// Today Forcast
let cityName = document.getElementById("cityName");
let desc = document.getElementById("desc");
let temp = document.getElementById("temp");

// 5 Day Forcast
let today = document.getElementById("today");
let Icon1 = document.getElementById("Icon1");
let HL1 = document.getElementById("HL1");
let High;
let Low;

let tmr = document.getElementById("tmr");
let Icon2 = document.getElementById("Icon2");

let HL2 = document.getElementById("HL2");
let High2;
let Low2;

let day3 = document.getElementById("day3");
let Icon3 = document.getElementById("Icon3");
let HL3 = document.getElementById("HL3");
let High3;
let Low3;

let day4 = document.getElementById("day4");
let Icon4 = document.getElementById("Icon4");
let HL4 = document.getElementById("HL4");
let High4;
let Low4;

let day5 = document.getElementById("day5");
let Icon5 = document.getElementById("Icon5");
let HL5 = document.getElementById("HL5");
let High5;
let Low5;

// Start of Functions

searchBtn.addEventListener('click',function(){
    ApiCall();
})

async function ApiCall(){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput.value}&appid=c645874ad7646520bb22ef8b9e4ad9cc&units=imperial`)
    
    const data = await promise.json();
   
        //Today Forcast
        //Current temperature 
        console.log(data);

        console.log(data.list[0].main.temp);
        temp.innerText = Math.round(data.list[0].main.temp); 

        //Weather type
        console.log(data.list[0].weather[0].description);
        desc.innerText = data.list[0].weather[0].description;

        //Name of the location
        console.log(data.city.name, data.city.country);
        cityName.innerText = `${data.city.name}, ${data.city.country}`;

        //High and Low Temperature for today
        console.log(data.list[0].main.temp_max,data.list[0].main.temp_min);
        High = Math.round(data.list[0].main.temp_max);
        Low = Math.round(data.list[0].main.temp_min);
        HL1.innerText = `H: ${High} L: ${Low}`;
        Icon3.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`

        // High and Low Temperature for tomorrow
        console.log(data.list[1].main.temp_max,data.list[1].main.temp_min);
        High2 = Math.round(data.list[1].main.temp_max)
        Low2 = Math.round(data.list[1].main.temp_min)
        HL2.innerText = `H: ${High2} L: ${Low2}`;
        Icon3.src = `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`
        
        //High and Low Temperature for day 3
        console.log(data.list[16].main.temp_max,data.list[16].main.temp_min);
        High3 = Math.round(data.list[16].main.temp_max)
        Low3 = Math.round(data.list[16].main.temp_min)
        HL3.innerText = `H: ${High3} L: ${Low3}`;
        Icon3.src = `https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`
        
        //High and Low Temperature for day 4
        console.log(data.list[24].main.temp_max,data.list[24].main.temp_min);
        High4 = Math.round(data.list[24].main.temp_max)
        Low4 = Math.round(data.list[24].main.temp_min)
        HL4.innerText = `H: ${High4} L: ${Low4}`;
        Icon4.src = `https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`


        //High and Low Temperature for day 5
        console.log(data.list[32].main.temp_max,data.list[32].main.temp_min);
        High5 = Math.round(data.list[32].main.temp_max)
        Low5 = Math.round(data.list[32].main.temp_min)
        HL5.innerText = `H: ${High5} L: ${Low5}`;
        Icon5.src = `https://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`


    }
    // .catch(err => alert("Wrong city name!"))

async function TimeCall(){

}
