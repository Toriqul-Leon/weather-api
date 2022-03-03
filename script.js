const API_KEY = `20c43547b8a707e33a36f9738461e4c3`;

const searchTemp = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemp = (data) => {
  console.log(data);
  setInnerText("city", data.name);
  setInnerText("temp", data.main.temp);
  setInnerText("condition", data.weather[0].main);
  //  !Set weather icon
  const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("icon");
  imgIcon.setAttribute("src", url);
};
