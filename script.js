const API_KEY = `20c43547b8a707e33a36f9738461e4c3`;
const searchTemp = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
};
