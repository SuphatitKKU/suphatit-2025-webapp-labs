const axios = require('axios');

const API_KEY = '0338cda891694367a32152940252909';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

async function getWeatherData(city) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: city,
                aqi: 'no'
            }
        });

        const data = response.data;
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;
        
        console.log(`Current temperature in ${city} is ${temperature}°C`);
        console.log(`Weather condition: ${condition}`);
        
    } catch (error) {
        if (error.response) {
            console.log(`Error: Unable to fetch weather data for "${city}"`);
            console.log('Please check the city name and try again.');
        } else if (error.request) {
            console.log('Error: Unable to connect to weather service');
            console.log('Please check your internet connection and try again.');
        } else {
            console.log('Error: Something went wrong while fetching weather data');
        }
        process.exit(1);
    }
}

function showUsage() {
    console.log('Error: Please provide city name');
    console.log('Usage: node weather.js <city_name>');
    console.log("Example: node weather.js 'Khon Kaen'");
    console.log('Note: Use quotes for city names with spaces');
    process.exit(1);
}

async function main() {
    const city = process.argv[2];
    
    if (!city) {
        showUsage();
        return;
    }
    
    await getWeatherData(city);
}

main();