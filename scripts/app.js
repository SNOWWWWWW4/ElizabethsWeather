navigator.geolocation.getCurrentPosition(success, errorFunc);

let lat;
let lon;

function success(position){
    console.log("Our latitude: "+ position.coords.latitude);
    console.log("Our longitude: "+ position.coords.longitude);
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    TodayCall();
    TimeCall();
}

function errorFunc(error){
    console.log(error.message)
}

async function TodayCall(){
    const promise = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c645874ad7646520bb22ef8b9e4ad9cc&units=imperial`)

    const data = await promise.json();

    //todays using geolocation
    //temp
    console.log(data.main.temp)
    deg = Math.round(data.main.temp);
    temp.innerText =  `${deg}°`;

}


// User Searching
let searchBtn = document.getElementById("searchBtn");
let userInput = document.getElementById("userInput");


// Today Forecast
let cityName = document.getElementById("cityName");
let currentCity = document.getElementById("currentCity");
let Icon = document.getElementById("Icon");
let desc = document.getElementById("desc");
let temp = document.getElementById("temp");
let deg;
let weekdays;

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

let Day3 = document.getElementById("day3");
let Icon3 = document.getElementById("Icon3");
let HL3 = document.getElementById("HL3");
let High3;
let Low3;

let Day4 = document.getElementById("day4");
let Icon4 = document.getElementById("Icon4");
let HL4 = document.getElementById("HL4");
let High4;
let Low4;

let Day5 = document.getElementById("day5");
let Icon5 = document.getElementById("Icon5");
let HL5 = document.getElementById("HL5");
let High5;
let Low5;

//saving and removing
let cityArray = [];
let cityNameTxt = document.getElementById("cityNameTxt")
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let Favorites = document.getElementById("Favorites");

// Start of Functions

searchBtn.addEventListener('click',function(){
    ApiCall(userInput);
    addBtn.classList.remove("d-none");

})

async function ApiCall(userInput){

    // weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput.value}&appid=c645874ad7646520bb22ef8b9e4ad9cc&units=imperial`)
    
    const data = await promise.json();
    console.log()

    //Description
    console.log(data.list[0].weather[0].description)
    desc.innerText = data.list[0].weather[0].description;

    //Name of the location
    console.log(data.city.name, data.city.country);
    cityName.innerText = `${data.city.name}, ${data.city.country}`;
    currentCity.innerText = `${data.city.name}, ${data.city.country}`;

    //Today
    // let day1 = new Date(data.list[0].dt_txt);
    // let day1Day = day1.getDay();
    // today.innerText = weekdays[day1Day];


    //High and Low Temperature for today
    console.log(data.list[0].main.temp_max,data.list[0].main.temp_min);
    High = Math.round(data.list[0].main.temp_max);
    Low = Math.round(data.list[0].main.temp_min);
    HL1.innerText = `H: ${High}° L: ${Low}°`;
    Icon1.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    Icon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`

    //Tomorrow
    // let day2 = new Date(data.list[8].dt_txt);
    // let day2Day = day2.getDay();
    // tmr.innerText = weekdays[day2Day];

    // High and Low Temperature for tomorrow
    console.log(data.list[1].main.temp_max,data.list[1].main.temp_min);
    High2 = Math.round(data.list[1].main.temp_max)
    Low2 = Math.round(data.list[1].main.temp_min)
    HL2.innerText = `H: ${High2}° L: ${Low2}°`;
    Icon2.src = `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`

    // Three Days from current day
    // let day3 = new Date(data.list[16].dt_txt);
    // let day3Day = day3.getDay();
    // Day3.innerText = weekdays[day3Day];
    
    //High and Low Temperature for day 3
    console.log(data.list[16].main.temp_max,data.list[16].main.temp_min);
    High3 = Math.round(data.list[16].main.temp_max)
    Low3 = Math.round(data.list[16].main.temp_min)
    HL3.innerText = `H: ${High3}° L: ${Low3}°`;
    Icon3.src = `https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`

    //Four Days from current day
    // let day4 = new Date(data.list[24].dt_txt);
    // let day4Day = day4.getDay();
    // Day5.innerText = weekdays[day4Day];
    
    //High and Low Temperature for day 4
    console.log(data.list[24].main.temp_max,data.list[24].main.temp_min);
    High4 = Math.round(data.list[24].main.temp_max)
    Low4 = Math.round(data.list[24].main.temp_min)
    HL4.innerText = `H: ${High4}° L: ${Low4}°`;
    Icon4.src = `https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`

    //Five Days from current day
    // let day5 = new Date(data.list[32].dt_txt);
    // let day5Day = day5.getDay();
    // Day5.innerText = weekdays[day5Day];

    //High and Low Temperature for day 5
    console.log(data.list[32].main.temp_max,data.list[32].main.temp_min);
    High5 = Math.round(data.list[32].main.temp_max)
    Low5 = Math.round(data.list[32].main.temp_min)
    HL5.innerText = `H: ${High5}° L: ${Low5}°`;
    Icon5.src = `https://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`

    // .catch(err => alert("Wrong city name!"))
}
    




if(localStorage.getItem("names")){
    cityArray =JSON.parse(localStorage.getItem("names"));
}

addBtn.addEventListener('click', function(){
    cityArray.push(userInput.value);
    console.log(cityArray);

    localStorage.setItem("names", JSON.stringify(cityArray));

    noFavs.classList.add("hide");
    
    displayFavs();
    
})

// removeBtn.addEventListener('click', function(){
//     let index = cityArray.indexOf(userInput.value);
//     userInput.splice(index, 1);

//     localStorage.setItem("names", JSON.stringify(cityArray));

//     noFavs.classList.remove("hide");

    //if local storage is empty
    
// })

function remove(){
    let index = cityArray.indexOf(userInput.value);
    userInput.splice(index, 1);

    localStorage.setItem("names", JSON.stringify(cityArray));

    noFavs.classList.remove("hide");
}


//doesn't work lol
function Night(){
    document.body.style.backgroundImage = "url('casey-horner-fsJB3KT2rj8-unsplash.jpg');"
}

function Day(){
    document.body.style.backgroundImage = "url('pexels-lukas-296234.jpg')";
}

function displayFavs(){
    let Favs;
    Favs = localStorage.getItem();

    for(let i = 0; i < Favs.length; i++){

        let h5 = document.createElement("h5");
        h5.className = "child child-3";
        h5.textContent =  `${userInput.value}`;

        let button = document.createElement("button");
        button.className = "child child-4";
        button.addEventListener("click", function() {
            remove();
        });
        
        let img = document.createElement("img");
        img.src = "assets/minus-circle-bold.png";
        
        button.appendChild(img);

    }
}

// creat the h5 with all the atrributes
// get button with all atritbutes
// get button img with source and atrribtues
// a pin all of that on in the div

