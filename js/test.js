let birthYear = prompt("Введіть свій рік народження.");
if (birthYear === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
}
let city = prompt("Введіть місто, в якому Ви живете.");
if (city === null) {
    alert("Шкода, що Ви не захотіли ввести місто, в якому Ви живете.");
}
let favoriteSport = prompt("Введіь свій улюблений вид спорту.")
if (favoriteSport === null) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
}

let age;
switch (birthYear){
    case null:
    case '':
        age = "Ви не захотіли ввести свій рік народження";
        break;
    default:
        birthYear = parseInt(birthYear);
        const currentYear = 2023;
        age = currentYear - birthYear;
}

switch (city) {
    case 'київ':
    case 'Київ':
        city = "Ви живете у столиці України.";
        break;
    case 'вашингтон':
    case 'Вашингтон':
        city = "Ви живете у столиці США.";
        break;
    case 'лондон':
    case 'Лондон':
        city = "Ви живете у столиці Великобританії.";
        break;
    case '':
    case null:
        city =  "Ви не захотіли ввести місто, в якому Ви живете.";
        break;
    default:
        city = "Ви живете у місті " + city + ".";
}

switch (favoriteSport) {
    case 'футбол':
    case 'Футбол':
        favoriteSport = "Круто! Хочете стати Ліонелем Мессі.";
        break;
    case 'бокс':
    case 'Бокс':
        favoriteSport = "Круто! Хочете стати Віталієм Кличко.";
        break;
    case 'теніс':
    case 'Теніс':
        favoriteSport = "Круто! Хочете стати Марією Шараповою.";
        break;
    case '':
    case null:
        favoriteSport =  "Ви не захотіли ввести Ваш улюблений вид спорту";
        break;
    default:
        favoriteSport = "Ваш улюблений вид спорту " + favoriteSport + ".";
}
alert(age + ". " + city + " " + favoriteSport);