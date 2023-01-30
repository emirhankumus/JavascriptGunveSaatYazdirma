let userName = prompt("Adınızı Giriniz:");
let myName = document.querySelector("#myName");
myName.innerHTML = `${myName.innerHTML} ${userName}`;


const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function zaman() {
    let d = new Date();
    let saat = [d.getHours()+ ":" + d.getMinutes()+ ":" + d.getSeconds()];
    let day = days[d.getDay()];

    document.getElementById("myClock").innerHTML = saat+ ` `+day;
}
setInterval(zaman, 1000);




