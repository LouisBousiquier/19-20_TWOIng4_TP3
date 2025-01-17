// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
//const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER{
  constructor(){
    // l'utilisateur choisi la ville dans l'input
    var city;
    var city_input = document.getElementById("city-input"); //variable temporaire
    if(city_input.value != ""){
            city = city_input.value;
            
          }
          else {
            city = "paris";
          }
      this.city = city;
  }

  /*change_city(){
   
    this.city = city;
  }*/
  // Faire la requete à l'API openweathermap
  // Retourne une promise
  /*fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
  */
  //fonction qui retourne 3 jours
  getThreeDayForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&units=metric&cnt=4&appid=${API_KEY}`, {
      crossdomain: true
    })
  }

  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }
}