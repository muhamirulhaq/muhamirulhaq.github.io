var nama = prompt("Siapa namamu?")
var yaTidak = prompt("Apakah kamu suka dengan kota Makassar?");

var users = {
            name: nama,
            yesNo: yaTidak,
};

if(users.yesNo === "ya") {
       alert("Selamat datang " + users.name + "! ini adalah website yang tepat untukmu, Selamat Menikmati!");
} else if(users.yesNo === "Ya") {
       alert("Selamat datang " + users.name + "! ini adalah website yang tepat untukmu, Selamat Menikmati!");
} else if(users.yesNo === "YA") {
       alert("Selamat datang " + users.name + "! ini adalah website yang tepat untukmu, Selamat Menikmati!");


} else if(users.yesNo === "iya") {
       alert("Selamat datang " + users.name + "! ini adalah website yang tepat untukmu, Selamat Menikmati!");
} else if(users.yesNo === "Iya") {
       alert("Selamat datang " + users.name + "! ini adalah website yang tepat untukmu, Selamat Menikmati!");
} else if(users.yesNo === "IYA") {
       alert("Selamat datang " + users.name + "! ini adalah website yang tepat untukmu, Selamat Menikmati!");


} else if(users.yesNo === "suka") {
       alert("Selamat datang " + users.name + "! ini adalah website yang tepat untukmu, Selamat Menikmati!");
} else if(users.yesNo === "Suka") {
       alert("Selamat datang " + users.name + "! ini adalah website yang tepat untukmu, Selamat Menikmati!");
} else if(users.yesNo === "SUKA") {
       alert("Selamat datang " + users.name + "! ini adalah website yang tepat untukmu, Selamat Menikmati!");


} else if(users.yesNo === "tidak") {
       alert("Sayang sekali " + users.name + ", kami sangat menyarankan anda untuk mengenal kota Makassar lebih jauh :)");
} else if(users.yesNo === "Tidak") {
       alert("Sayang sekali " + users.name + ", kami sangat menyarankan anda untuk mengenal kota Makassar lebih jauh :)");
} else if(users.yesNo === "TIDAK") {
       alert("Sayang sekali " + users.name + ", kami sangat menyarankan anda untuk mengenal kota Makassar lebih jauh :)");


} else {
       alert("Maaf, jawaban anda tidak dikenali");
}

function gambarBesar() {
document.getElementById("fotoku").style.height = "185px";
document.getElementById("fotoku").style.width = "185px";
document.getElementById("fotoku").style.borderColor = "white";
document.getElementById("fotoku").style.boxShadow = "0px 1px 10px #000000";
document.getElementById("tulisanMengecil").style.fontSize = "6.3px";
}

function gambarKecil() {
document.getElementById("fotoku").style.height = "162px";
document.getElementById("fotoku").style.width = "162px";
document.getElementById("fotoku").style.borderColor = "black";
document.getElementById("fotoku").style.boxShadow = "none";
document.getElementById("tulisanMengecil").style.fontSize = "13px";
}

function modeGelap() {
document.getElementById("tubuhGelap").style.backgroundColor = "black";
document.getElementById("tubuhGelap").style.color = "white";
document.getElementById("borderGlow").style.borderColor = "white";
document.getElementById("content").style.borderColor = "white";
document.getElementById("makassar").style.borderColor = "white";
}

function modeTerang() {
document.getElementById("tubuhGelap").style.backgroundColor = "white";
document.getElementById("tubuhGelap").style.color = "black";
document.getElementById("borderGlow").style.borderColor = "black";
document.getElementById("content").style.borderColor = "black";
document.getElementById("makassar").style.borderColor = "black";
}

function borderWhiteFb() {
document.getElementById("fb").style.borderColor = "white";
}

function borderWhiteIg() {
document.getElementById("ig").style.borderColor = "white";
}

function borderBlackFb() {
document.getElementById("fb").style.borderColor = "black";
}

function borderBlackIg() {
document.getElementById("ig").style.borderColor = "black";
}
