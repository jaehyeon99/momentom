const COORDS = 'coords';

function handleGeoSucces(position){
    console.log(position);
}
function hanldeGeoError(){
    console.log("Can't access geo location")
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,hanldeGeoError)
}
function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoords();
    }
}

function init(){


}
init();