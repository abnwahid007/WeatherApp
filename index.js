

const API_key = '254fecc77cde0761b1cf265ce1bb7fbe';


function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`
    document.body.appendChild(newPara);
}

async function showWeather() {

    try{
        let latitude = 23.8041;
        let longiitude = 90.4152;

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longiitude}&appid=${API_key}`)
        const data = await response.json();
        console.log("Weather data:-> " , data);

        renderWeatherInfo(data);

    }catch{
        console.log("Error found");
    }
}