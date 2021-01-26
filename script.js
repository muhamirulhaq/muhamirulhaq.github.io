function cariKPK(a, b) {
  let kpk = 0;
  for(let i = 1; true; i++) {
    if(a * i % b === 0) {
      kpk = a * i;
      break;
    }
  }
  return kpk;
}

function cariFPB(a, b) {
  let fpb = 0;
  for(let i = 1; true; i++) {
    if(b % (a / i) === 0) {
      fpb = a / i;
      break;
    }
  }
  return fpb;
}

function result() {
  let a = document.querySelector("#angka1").value; 
  let b = document.querySelector("#angka2").value;
  document.querySelector("#angka1").value = "";
  document.querySelector("#angka2").value = "";
  if(isNaN(a) || isNaN(b) || a === "" || b === "") {
    document.querySelector(".kpk").innerHTML = "Bukan angka!";
    document.querySelector(".fpb").innerHTML = "Inputan harus berupa angka.";
    return;
  }
  document.querySelector(".kpk").innerHTML = "<b>KPK :</b> " + cariKPK(a, b);
  document.querySelector(".fpb").innerHTML = "<b>FPB :</b> " + cariFPB(a, b);
}
try {
  document.querySelector("button").onclick = result;
} catch(e) {
  console.log("Error");
}


// MENU DISPLAY
let isDisplay = false;

function menuDisplay() {
  isDisplay = true;
  const navDisplayed = document.querySelector(".navDisplayed");
  navDisplayed.style.display = "block";
  let i = 0;
  document.querySelector(".menu").innerHTML = "&times;";
  const x = setInterval(function() {
    navDisplayed.style.height = i + "px";
    if(i == 120) clearInterval(x);
    i+=2;
  },1);
}

function menuNone() {
  isDisplay = false;
  const navDisplayed = document.querySelector(".navDisplayed");
  let i = 120;
  document.querySelector(".menu").innerHTML = "&equiv;";
  const x = setInterval(function() {
    navDisplayed.style.height = i + "px";
    if(i == 0) {
      navDisplayed.style.display = "none";
      clearInterval(x);
    }
    i-=2;
  },1);
}

document.querySelector(".menu").addEventListener("click", isDisplaying);

function isDisplaying() {
  if(isDisplay) menuNone();
  else menuDisplay();
}
