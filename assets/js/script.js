/* menu */
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () => {
   navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
   navMenu.classList.remove('show-menu')
})

/* about */
const about = document.getElementById('about'),
   aboutBtn = document.getElementById('btn-about'),
   aboutClose = document.getElementById('about-close')

aboutBtn.addEventListener('click', () => {
   about.classList.add('show-about')
})

aboutClose.addEventListener('click', () => {
   about.classList.remove('show-about')
})

/* contact */
const contactModal = document.getElementById('contact'),
   contactBtn = document.getElementById('btn-contact'),
   contactClose = document.getElementById('contact-close')

contactBtn.addEventListener('click', () => {
   contactModal.classList.add('show-contact')
})

contactClose.addEventListener('click', () => {
   contactModal.classList.remove('show-contact')
})


/* modal info */
const info = document.getElementById('info'),
   infoBtn = document.getElementById('btn-info'),
   infoClose = document.getElementById('info-close')

infoBtn.addEventListener('click', () => {
   info.classList.add('show-info')
})

infoClose.addEventListener('click', () => {
   info.classList.remove('show-info')
})

//konversi C to F
function btn_konversi() {
   var C = document.getElementById("celcius").value.trim();

   if (C == "") {
      document.getElementById("fahrenheit").value = "";
      document.getElementById("formula").value = "";
      return;
   }

   var F = (C * 9/5) + 32;
   document.getElementById("fahrenheit").value = F.toFixed(2);
   document.getElementById("formula").value = `(${C} °C x 9/5) + 32 = ${F.toFixed(2)} °F`;

}

//reset C to F
function btn_reset() {
   document.getElementById("celcius").value = "";
   document.getElementById("fahrenheit").value = "";
   document.getElementById("formula").value = "";
}

// konversi F to C
function btn_konversi_reverse() {
   var F = document.getElementById("fahrenheit-1").value.trim();

   if (F == "") {
      document.getElementById("celcius-1").value = "";
      document.getElementById("formula-1").value = "";
      return;
   }

   var C = (F - 32) * 5/9;
   document.getElementById("celcius-1").value = C.toFixed(2);
   document.getElementById("formula-1").value = `${F} °F - 32 = ${F - 32}   ${F - 32} × 5/9 = ${C.toFixed(2)} °C`;
}

// reset F to C
function btn_reset_reverse() {
   document.getElementById("fahrenheit-1").value = "";
   document.getElementById("celcius-1").value = "";
   document.getElementById("formula-1").value = "";
}

