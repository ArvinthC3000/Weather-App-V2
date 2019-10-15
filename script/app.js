const key = "b86155febf4e7416656ad26119562ec3" ;

function getData(){
    const cityName = document.getElementById('in').value;
    console.log(cityName);
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+key)
    .then(function(resp) { 
        console.log(json())
        return resp.json() }) // Convert data to json
	.then(function(data) {
        drawWeather(data);
        showFahrenheit(data)

	})
	.catch(function() {
	});
}
function drawWeather( d ) {
    let celcius = Math.round(parseFloat(d.main.temp)-273.15);	
    let description = d.weather[0].description; 
    console.log(d)
    let country = d.sys.country;
  
      console.log(description);
      document.getElementById('showDescription').innerHTML = description;
      document.getElementById('showDegree').innerHTML = celcius;
      document.getElementById('showCity').innerHTML = d.name;
      document.getElementById('showCountry').innerHTML = country;   
  }


// Event listeners
document.addEventListener(onload, date());

var input = document.getElementById("in");
input.addEventListener("keyup", function(event) {
    
  if (event.keyCode === 13) {
    document.getElementById("submit").click();
  }
})

// Functions
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



// function process(value){
//     arr = array.filter((i)=> {
//         array[i]
//         return i.city===value;})
//         if (arr.length >=1 ){
//         document.getElementsByClassName("city")[0].innerHTML = "<b>"+arr[0].city +", "+"</b>";
//         document.getElementsByClassName("state")[0].innerHTML = "<b>"+arr[0].state+"</b>";
//         document.getElementsByClassName("degree")[0].innerHTML = "<b>"+arr[0].degree+"</b>";
//         document.getElementsByClassName("weather")[0].innerHTML = arr[0].weather;
//         }

// }

function inFahrenheit(){
    process();
    const celsius = array[0].degree || array[0].degree ||26;
    document.getElementsByClassName("celsius")[0].style.color = "#000000";
    document.getElementsByClassName("fahrenheit")[0].style.color = "#1890f0";
    
    const fahrenheit= Math.floor(celsius*1.8+32)
    document.getElementsByClassName("degree")[0].innerHTML = "<b>"+fahrenheit+"</b>";
    
}
function inCelsius(){
    process();
    document.getElementsByClassName("celsius")[0].style.color = "#1890f0";
    document.getElementsByClassName("fahrenheit")[0].style.color = "#000000";
    if (arr.length >1 ){
        document.getElementsByClassName("degree")[0].innerHTML = "<b>"+arr[0].degree+"</b>";
        }
    else{
        document.getElementsByClassName("degree")[0].innerHTML = "<b>"+26+"</b>";
    }
}
