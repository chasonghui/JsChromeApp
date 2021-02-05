const API_KEY="9283589f72c8b746d51c4c6d702c1a38";
const COORDS ='coords';

function saveCoords(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitude=position.coords.latitude;
  const longitude=position.coords.longitude;
  const coordsObj={
    latitude : latitude,
    longitude : longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError()
{
  console.log.("Cant access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
  const loadedCoords=localStorage.getItem(COORDS);
  if(loadedCoords===null){
    askForCoords();
  }else{
    //getweather
  }
}

function init()
{
  loadCoords();
}

init();