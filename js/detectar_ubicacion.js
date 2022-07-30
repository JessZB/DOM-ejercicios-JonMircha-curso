const d = document,
  n = navigator;

export default function getGeolocation(id) {
  let $geoInfo = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
    };

  // @param {GeolocationPosition} position
  const geoposOK = (pos) => {
    console.log(pos);
    let lat = pos.coords.latitude,
      long = pos.coords.longitude,
      pres = pos.coords.accuracy;

    console.log(lat, long);
    $geoInfo.insertAdjacentHTML(
      "beforeend",
      `
        <ul style="list-style:none">
        <li>Su latitud es: ${lat}</li>
        <li>Su longitud es: ${long}</li>
        <li>La presición es:${pres}</li>
        </ul>`
    );
    $geoInfo.insertAdjacentHTML(
      "beforeend",                      
      `<a target="_blank" rel="noopener" href="https://www.google.com/maps/@${lat},${long},10z">Ver tu ubicación</a>`
    );
  };
  if ("geolocation" in n) {
    n.geolocation.getCurrentPosition(geoposOK, geoposKO, options);
  } else {
    console.log("No se encuentra disponicle la geolocalización");
  }

  function geoposKO(err) {}
}
