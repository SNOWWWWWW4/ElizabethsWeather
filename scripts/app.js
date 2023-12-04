let button = document.getElementById(button);
let inputValue = document.getElementById(inputValue);
let cityName = document.getElementById(cityName);
let desc = document.getElementById(desc);
let temp = document.getElementById(temp);

button.addEventListener('click',function(){
    ApiCall();
})

function ApiCall(){
    fetch("api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=c645874ad7646520bb22ef8b9e4ad9cc")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{ 
        console.log(data[0]);
    })

.catch(err => alert("Wrong city name!"))
}
