async function postData(request,send={}) {
    url = "js/";
    return await fetch( url + request, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(send)
    })
    .then(response => {
        if(response.ok) {
            return response.json(); 
        }
    })
    .then(response => {
        if(response["処理結果"] != 0) {
            alert("エラーが発生しました。");
        }
    })
    .catch(err => {
        console.log(err);
    })
}