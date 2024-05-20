const apikey= `ae2b84e233fcaaa696b5c9006449103b`;
const city = "Pune";

async function fetchWeatherData(){
    const response = await fetch
    (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikeykey}`
    );
   
    const data = await response.json();
    console.log(data);
    console.log(data.main.temp);
   

}

