//日付自動表示
window.addEventListener("load", () => {
    let date = new Date();
    let year = date.getFullYear();
    let dateMonth = date.getMonth() + 1;
    let dateDate = date.getDate();
    let getDate = document.getElementById("date");
    let contents = year + "-" + dateMonth + "-" + dateDate;
    getDate.value = contents;
})

//時刻自動表示
window.addEventListener("load", () => {
    let time = new Date();
    let hour = time.getHours();
    hour = ("00" + hour).slice(-2);
    let minutes = time.getMinutes();
    minutes = ("00" + minutes).slice(-2);
    let timeVal = document.getElementById("time");
    let contents = hour + ":" + minutes;
    timeVal.value = contents;
})

//緯度経度自動表示　
window.addEventListener("load", displayLatiLong);

//緯度経度表示
function displayLatiLong() {
    navigator.geolocation.getCurrentPosition(getLangLati);
}

//緯度経度取得
function getLangLati(position) {
    let lati = "緯度：" + position.coords.latitude;
    let long = "経度：" +  position.coords.longitude;
    let lati_long = document.getElementById("lati-long");
    let contents = lati + ",　" + long;
    lati_long.value = contents;
}

//更新ボタンを押してリロード
document.getElementById("reload").addEventListener("click", () => {
    window.location.reload;
});

