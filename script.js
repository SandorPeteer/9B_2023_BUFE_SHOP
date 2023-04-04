var Rántotthús = 220;
var DuplaHamburger = 650;

function aktualis_ar() {
   document.getElementById('rantotthusi_').innerHTML = Rántotthús + " Ft";
   document.getElementById('duplahambi_').innerHTML = DuplaHamburger + " Ft";
}

function kosarba(termek, darab) {
    localStorage.setItem(termek, darab);
}