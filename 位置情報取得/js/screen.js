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

//登録ボタンを押したときの挙動
document.getElementById("register").addEventListener("click", () => {
    //日付取得
    let date = document.getElementById("date").value;
    //時間取得
    let time = document.getElementById("time").value;
    //時刻にする
    let timestamp = date + " " + time;
    //緯度経度取得
    let place = document.getElementById("lati-long").value;
    place = String(place).replace("緯度：","");
    place = String(place).replace("経度：","");
    place = String(place).replace("　","");
    place = String(place).split(",");
    let long = Number(place[0]);
    let lati = Number(place[1]);
    //カメラ個数取得
    let camera = document.getElementById("nw-camera").value;
    //残置線撤去本数取得
    let zantisen = document.getElementById("zantisen").value;
    let sub = document.getElementById("sub").value;
    sub = String(sub).split(" ");
    let sendData = {
        "時刻": timestamp,
        "緯度": long,
        "経度": lati,
        "カメラ": camera,
        "残置線撤去本数": zantisen,
        "補助者": sub
    }
    if(date == "" || time == "") {
        alert("日付か時間が取得できませんでした。リロードして再度登録ください。");
    } else if(long == null || lati == null) {
        alert("位置情報を取得できませんでした。");
    } else if(zantisen == "" || zantisen < 0) {
        alert("0以上の半角数字で正しく入力してください");
    } else {
        console.log(sendData);
        confirm("正しくデータを送信できました。");
    }
});

//ログアウト画面遷移
document.getElementById("logout").addEventListener("click", () => {
    location.href = "logout.html";
});