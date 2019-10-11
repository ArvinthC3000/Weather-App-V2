// Golbal variables & Data
const array = [
    {city:'Bangalore',
    state:'Karnataka',
    degree :26,
    weather:'Partly Cloudy ☁️',
    image:'images/cloudy.svg'},
    {city:'Chennai',
    state:'TamilNadu',
    degree :34,
    weather:'Sunny ☀️',
    image:'images/sunny.svg'},
    {city:'Coimbatore',
    state:'TamilNadu',
    degree :26,
    weather:'Partly Cloudy ☁️',
    image:'images/cloudy.svg'},
    {city:'Noida',
    state:'Delhi',
    degree :23,
    weather:'Thunder 🌩️',
    image:'images/thunder.svg'},
    {city:'Patna',
    state:'Bihar',
    degree :30,
    weather:'Humidity',
    image:'image/humid.svg'},
    {city:'Gurugram',
    state:'Haryana',
    degree :34,
    weather:'Sunny ☀️',
    image:'images/sunny.svg'},
    {city:'Mumbai',
    state:'Maharashtra',
    degree :20,
    weather:'Rainy 🌧️',
    image:'images/rainy.svg'},
    {city:'Amaravati',
    state:'Andra Pradesh',
    degree :23,
    weather:'Humidity',
    image:'image/humid.svg'},
    {city:'Jaipur',
    state:'Rajasthan',
    degree :32,
    weather:'Sunny ☀️',
    image:'images/sunny.svg'},
    {city:'Panaji',
    state:'Goa',
    degree :22,
    weather:'Rainy 🌧️',
    image:'images/rainy.svg'},
    {city:'Mysore',
    state:'Karnataka',
    degree :24,
    weather:'Partly Cloudy ☁️',
    image:'images/cloudy.svg'},
    {city:'Madurai',
    state:'TamilNadu',
    degree :35,
    weather:'Sunny ☀️',
    image:'images/sunny.svg'},
    {city:'Alleppey',
    state:'Kerala',
    degree :20,
    weather:'Rainy 🌧️',
    image:'images/rainy.svg'}   
];


let arr = [];


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



function process(value){
    arr = array.filter((i)=> {
        array[i]
        return i.city===value;})
        if (arr.length >=1 ){
        document.getElementsByClassName("city")[0].innerHTML = "<b>"+arr[0].city +", "+ arr[0].state+"</b>";
        document.getElementsByClassName("degree")[0].innerHTML = "<b>"+arr[0].degree+"</b>";
        document.getElementsByClassName("weather")[0].innerHTML = arr[0].weather;
        }

}

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
