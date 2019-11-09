const key = "b86155febf4e7416656ad26119562ec3" ;
let gData;
let celsius;
init();

// Functions

function getLocation() {

    if(navigator.geolocation) {
       
       // timeout at 60000 milliseconds (60 seconds)
       var options = {timeout:60000};
       navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
    } else {
       alert("Sorry, browser does not support geolocation!");
    }
 }
		
function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    alert("Latitude : " + latitude + " Longitude: " + longitude);
    codeLatLng(latitude, longitude);
 }

 function errorHandler(err) {
    if(err.code == 1) {
       alert("Error: Access is denied!");
    } else if( err.code == 2) {
       alert("Error: Position is unavailable!");
    }
 }

function init(){

    getData()
    date();

    // Event listeners
    var input = document.getElementById("in");
    input.addEventListener("keyup", function(event) {
        
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
    })

}

function getData(){
    let cityName = document.getElementById('in').value || "Bangalore";
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+key)
    .then(function(resp) {   
        return resp.json() }) // Convert data to json
	.then(function(data) {
        putData(data);

	})
	.catch(function() {
	});
}
function putData( indvidualDatum ) {
    let celcius = Math.round(parseFloat(indvidualDatum.main.temp)-273.15);
    celsius =  celcius;
    let descriptionInLowerCase = indvidualDatum.weather[0].description; 
    let description = descriptionInLowerCase.charAt(0).toUpperCase() + descriptionInLowerCase.slice(1)
    let cityName = indvidualDatum.name;
    let country = indvidualDatum.sys.country;
  
      document.getElementById('weather').innerText = description ;
      document.getElementById('degree').innerHTML = '<b>'+celcius+'</b>';
      document.getElementById('city').innerHTML = '<b>' + cityName + ',</b>';
      document.getElementById('state').innerHTML = '<b>' + country + '</b>' ;  
  }

function date(){
let date1= new Date();
    let dayInNum = date1.getDay();
    let dayArray =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayInStr = dayArray[dayInNum];
    let h = date1.getHours();
    
    let meridiem = 'am'
    if(h >= 13)
        {
            h -= 12;
            meridiem = 'pm';
        }
    let m = date1.getMinutes();
    let s = date1.getSeconds();
    m = digit(m);
    s = digit(s);
    function digit(i){
        if (i < 10) {i = "0" + i };
        return i;
    }    

    document.getElementsByClassName('date1')[0].innerHTML = dayInStr +" "+h+":"+m+":"+s+" "+meridiem;

    var t = setTimeout(date , 1000);
}

function inFahrenheit(){
    document.getElementsByClassName("celsius")[0].style.color = "#000000";
    document.getElementsByClassName("fahrenheit")[0].style.color = "#1890f0";
    let celsius = document.getElementById('degree').innerText
    
    let fahrenheit= Math.floor(celsius*1.8+32)
    document.getElementById("degree").innerHTML = "<b>"+fahrenheit+"</b>";
    
}
function inCelsius(){
    let fahrenheit = document.getElementById('degree').innerText;

    document.getElementsByClassName("celsius")[0].style.color = "#1890f0";
    document.getElementsByClassName("fahrenheit")[0].style.color = "#000000";
    document.getElementById("degree").innerHTML = "<b>"+celsius+"</b>";

}