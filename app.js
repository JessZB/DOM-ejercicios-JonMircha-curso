import hamburguerMenu from "./js/menu_hamburguesa.js";
import { startClock, startAlarm } from "./js/reloj_alarma.js";
import { moveBall, shortCuts } from "./js/eventos_teclado.js";
import { countDown } from "./js/cuenta_regresiva.js";
import moveUp from "./js/boton_scroll.js";
import darkTheme from "./js/modo_oscuro.js";
import responsiveMedia from "./js/javascript_responsivo.js";
import responsiveTester from "./js/responsive_tester.js";
import userAgent from "./js/deteccion_dispositivos.js";
import isOnline from "./js/detectar_red.js";
import webCam from "./js/detectar_webcam.js";
import getGeolocation from "./js/detectar_ubicacion.js";
import searchItem from "./js/filtrar_busqueda.js";
import whoWins from "./js/sorteo_digital.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".open-button", ".panel", "panel-open");
  startClock(".startClock", ".stopClock", ".clockInfo");
  startAlarm(".startAlarm", ".stopAlarm", "assets/alarma.mp3");
  countDown(".countDown", "12/31/22", "Feliz Fin de año");
  moveUp(".up-button", "active");
  darkTheme(".dark-button", "dark-mode");
  responsiveMedia(
    "youtube",
    "(min-width:768px)",
    `<a href="https://www.youtube.com/embed/w-l4KWBHYWQ" target="_blank">Ver Vídeo</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/w-l4KWBHYWQ"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:768px)",
    `<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5650429064403!2d-63.547201821927665!3d8.145682978183538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dce862a669e5b7b%3A0xd96f2f60189fcd57!2sCdad.%20Bol%C3%ADvar%208001%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sve!4v1658861259405!5m2!1ses!2sve" target="_blank">Ver mapa</a>`,
    `<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5650429064403!2d-63.547201821927665!3d8.145682978183538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dce862a669e5b7b%3A0xd96f2f60189fcd57!2sCdad.%20Bol%C3%ADvar%208001%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sve!4v1658861259405!5m2!1ses!2sve"
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("section5-form");
  userAgent("userInfo")
  webCam("webCam")
  getGeolocation("ubication-info")
  searchItem("card-search", ".card")
  whoWins(".list-lottery" ,".checkList", ["JavaScript", "Java", "C", "Python", "Ruby", "Go","Visual Basic", "Rush", "Perl"])
});

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".area");
  // shortCuts(".area", ".item")
});

isOnline('online-message', "online", "offline")

