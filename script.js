var Sajtburger = 120;
var Cheddar = 650;
var Bbqhamburger = 300;
var Olaszoshamburger = 400;
var Minipizza = 250;
var Sultkrumpli = 100;
var Franciapiritos = 150;
var Lyonihotdog = 200;
var Newyorkhotdog = 460;
var Amerikaihotdog = 600;
var Simahotdog = 200;
var Csirkesszendvics = 750;
var Vegaszendvics = 400;
var Gyrosbagett = 800;
var Royalbagett = 650;
var MarsCsoki = 150;

function aktualis_ar() {
   document.getElementById('sajtburger_').innerHTML = Sajtburger + " Ft";
   document.getElementById('cheddar_').innerHTML = Cheddar + " Ft";
   document.getElementById('bbqhamburger_').innerHTML = Bbqhamburger + " Ft";
   document.getElementById('olaszoshamburger_').innerHTML = Olaszoshamburger + " Ft";
   document.getElementById('minipizza_').innerHTML = Minipizza + " Ft";
   document.getElementById('sultkrumpli_').innerHTML = Sultkrumpli + " Ft";
   document.getElementById('franciapiritos_').innerHTML = Franciapiritos + " Ft";
   document.getElementById('lyonihotdog_').innerHTML = Lyonihotdog + " Ft";
   document.getElementById('newyorkhotdog_').innerHTML = Newyorkhotdog + " Ft";
   document.getElementById('amerikaihotdog_').innerHTML = Amerikaihotdog + " Ft";
   document.getElementById('simahotdog_').innerHTML = Simahotdog + " Ft";
   document.getElementById('csirkesszendvics_').innerHTML = Csirkesszendvics + " Ft";
   document.getElementById('vegaszendvics_').innerHTML = Vegaszendvics + " Ft";
   document.getElementById('gyrosbagett_').innerHTML = Gyrosbagett + " Ft";
   document.getElementById('royalbagett_').innerHTML = Royalbagett + " Ft";
   document.getElementById('mars_csokika_').innerHTML = MarsCsoki + " Ft";



}

function kosarba(termek, darab) {
    localStorage.setItem(termek, darab);
}
