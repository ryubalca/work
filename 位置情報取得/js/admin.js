//個人実績データをダウンロード
function downloadPersonCsv(obj,filename) {
    let personData = samplePerson["個人"];
    let users = Object.keys(personData[obj]);
    let result = [];
    for(let i = 0; i < users.length; i++) {
        let userData = personData[obj][users[i]];
        let sendData = {
            "ユーザー名": users[i],
            "目標": userData["目標"],
            "進捗本数": userData["進捗本数"],
            "進捗割合": userData["進捗割合"],
            "順位": userData["順位"]
        }
        result[i] = sendData;
    }
    // console.log(result);
    exportCSV(result,filename);
}
// downloadPersonCsv("カメラ");

//チーム全体実績
function downloadTeamCsv(obj,filename) {
    let team = sampleTeam["チーム"];
    let teamId = Object.keys(team[obj]);
    let result = [];
    for(let i = 0; i < teamId.length; i++) {
        let teamData = team[obj][teamId[i]];
        let sendData = {
            "チームID": teamId[i],
            "目標": teamData["目標"],
            "進捗本数": teamData["進捗本数"],
            "進捗割合": teamData["進捗割合"],
            "順位": teamData["順位"]
        }
        result[i] = sendData;
    }
    exportCSV(result,filename);
}

//所属チーム内個人実績
function downloadTeamPersonCsv(obj,filename) {
    let data = sampleTeam["個人"];
    let personId = Object.keys(data);
    let result = [];
    for(let i = 0; i < personId.length; i++) {
        let personData = data[personId[i]][obj];
        let sendData = {
            "チームID": personData["チームID"],
            "ユーザー": personId[i],
            "目標": personData["目標"],
            "進捗本数":personData["進捗本数"],
            "進捗割合": personData["進捗割合"],
            "順位": personData["順位"],
            "貢献度": personData["貢献度"]
        }
        result[i] = sendData;
    }
    exportCSV(result,filename);
}

//jsonをcsv文字列に編集する
function jsonToCsv(json) {
    let header = Object.keys(json[0]).join(",") + "\n";
    let body = json.map(function(d){
        return Object.keys(d).map(function(key) {
            return d[key];
        }).join(",");
    }).join("\n");
    return header + body;
}

//csv変換
function exportCSV(json,filename) {

    //文字列に変換する
    let csv = jsonToCsv(json);

    //拡張子
    let extention = "csv";

    //出力ファイル名
    let exportedFilenmae = filename + '.' + extention;

    //文字化け対策
    let bom = new Uint8Array([0xEF, 0xBB, 0xBF]);

    //BLOBに変換
    let blob = new Blob([bom,csv], { type: 'text/csv;charset=utf-8;' });

    let link = document.createElement("a");
    var url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", exportedFilenmae);
    link.click();
    
}

