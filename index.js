let temp=document.getElementById("temp-in-c");
let phraseVal=document.getElementById("phraseVal");
let region=document.getElementById("region");
let area=document.getElementById("area");
let humidity=document.getElementById("humidity");
let pressure=document.getElementById("pressure");
let visbile=document.getElementById("visbile");
let uv_index=document.getElementById("uv-index");
let wind_dir=document.getElementById("wind-dir");
let wind_speed=document.getElementById("wind-speed");
let feelLike=document.getElementById("feelLike")









let search=document.getElementById("search");
search.addEventListener("click",()=>{
  
 let nameCity=document.getElementById("city").value;
  console.log(nameCity)
  let getApi=async()=>{
    let response= await fetch(`https://api.weatherapi.com/v1/current.json?key=181912f2df02408e9e0112608240502&q=${nameCity}`);

let data=await response.json();
console.log(data)
temp.innerText=data.current.temp_c+"°C"
phraseVal.innerText=data.current.condition.text;
region.innerText=`${data.location.name}, ${data.location.region}, ${data.location.country}`;
area.innerHTML=`<h1>Today in ${data.location.name}, ${data.location.region}, ${data.location.country}</h1>`;
humidity.innerText=`--/${data.current.humidity}°`
pressure.innerText=`${data.current.pressure_mb}mb`
visbile.innerText=`${data.current.vis_km}km`;
uv_index.innerText=`${data.current.uv} of 11`
wind_speed.innerText=`${data.current.wind_kph} kmph`
wind_dir.innerText=`${data.current.wind_dir}°`
feelLike.innerText=`${data.current.feelslike_c}°C`

}
getApi();
})


let nameCity=document.getElementById("city").value;
let getApi=async()=>{
  let response= await fetch(`https://api.weatherapi.com/v1/current.json?key=181912f2df02408e9e0112608240502&q=${nameCity}`);
  
  let data=await response.json();
  console.log(data)
  temp.innerText=data.current.temp_c+"°C"
  phraseVal.innerText=data.current.condition.text;
  region.innerText=`${data.location.name}, ${data.location.region}, ${data.location.country}`
  area.innerHTML=`<h1>Today in ${data.location.name}, ${data.location.region}, ${data.location.country}</h1>`;
  humidity.innerText=`--/${data.current.humidity}°`
  pressure.innerText=`${data.current.pressure_mb}mb`
  visbile.innerText=`${data.current.vis_km}km`;
  uv_index.innerText=`${data.current.uv} of 11`
  wind_speed.innerText=`${data.current.wind_kph} kmph`
  wind_dir.innerText=`${data.current.wind_dir}°`
  feelLike.innerText=`${data.current.feelslike_c}°C`


}
getApi();