const key = "b86155febf4e7416656ad26119562ec3" ;
init();

// Functions

function init(){

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
    let cityName = document.getElementById('in').value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+key)
    .then(function(resp) {       
    console.log(cityName);
        return resp.json() }) // Convert data to json
	.then(function(data) {
        putData(data);

	})
	.catch(function() {
	});
}
function putData( indvidualDatum ) {
    let celcius = Math.round(parseFloat(indvidualDatum.main.temp)-273.15);	
    let description = indvidualDatum.weather[0].description; 
    console.log(indvidualDatum)
    let cityName = indvidualDatum.name;

    let country = indvidualDatum.sys.country;
  
      document.getElementById('weather').innerText = description ;
      document.getElementById('degree').innerHTML = '<b>'+celcius+'</b>';
      document.getElementById('city').innerHTML = '<b>' + cityName + ',</b>';
    //   console.log(cityName);
    //   console.log(description)
      document.getElementById('state').innerHTML = '<b>' + country + '</b>' ;  
      console.log(description)
      
      console.log(cityName); 
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
    // process();
    const celsius =26;
    document.getElementsByClassName("celsius")[0].style.color = "#000000";
    document.getElementsByClassName("fahrenheit")[0].style.color = "#1890f0";
    
    const fahrenheit= Math.floor(celsius*1.8+32)
    console.log(fahrenheit);
    document.getElementById("degree").innerHTML = "<b>"+fahrenheit+"</b>";
    
}
function inCelsius(){
    process();
    document.getElementsByClassName("celsius")[0].style.color = "#1890f0";
    document.getElementsByClassName("fahrenheit")[0].style.color = "#000000";
    if (arr.length >1 ){
        document.getElementById("degree").innerHTML = "<b>"+arr[0].degree+"</b>";
        }
    else{
        document.getElementById("degree").innerHTML = "<b>"+26+"</b>";
    }
}
