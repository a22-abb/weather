async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '1822924833697ebbeaa5d65dd2d3a449'; // Replace with your API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    if (data.cod === 200) {
        document.getElementById('weather-result').innerHTML = `Temperature: ${data.main.temp} °C`;
    } else {
        document.getElementById('weather-result').innerHTML = 'City not found';
    }
}
