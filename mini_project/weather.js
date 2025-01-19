import readline from 'readline';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '0cd25737024bad9231fe9742a73e66bf';

const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  });


const getWeather = async (city) => {
  try {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      console.log("City not found! Please check the city name.");
      return;
    }
    const data = await response.json();
    //console.log(data); => Print complete data fetched by API
    console.log(`Current weather in ${data.sys.country}, ${data.name}`);
    //console.log(`Current weather in ${data.name}:`); // Print City Name
    console.log(`Current Wind Speed in ${data.name} => ${data.wind.speed}:`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Weather: ${data.weather[0].description}`);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const askCity = () => {
  rl.question('Enter city name: ', (city) => {
    rl.close();
    getWeather(city.trim());
  });
};

askCity();
