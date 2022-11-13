//zanti.html切り替え
document.getElementById("zanti").addEventListener("click", () => {
    location.href = "zanti.html";
})

//個人実績表示
function nwPersonTaget() {
    // postData("persontarget.json")
    // .then(res => {
    //     let data = res["個人"]["カメラ"]["user1"];
    //     const person = document.getElementById("nw-person-target");
    //     const contents = `
    //     <h2 class="subtitle">個人実績</h2>
    //     <table class="table">
    //         <tr>
    //             <th>目標</th>
    //             <td>${data["目標"]}</td>
    //         </tr>
    //         <tr>
    //             <th>進捗本数</th>
    //             <td>${data["進捗本数"]}</td>
    //         </tr>
    //         <tr>
    //             <th>進捗割合</th>
    //             <td>${data["進捗割合"]}</td>
    //         </tr>
    //         <tr>
    //             <th>順位</th>
    //             <td>${data["順位"]}</td>
    //         </tr>
    //     </table>`;
    //     person.innerHTML = contents;
    // })
    let cameraData = samplePerson["個人"]["カメラ"]["user1"];
    let person = document.getElementById("nw-person-target");
    let contents = `
    <h2 class="subtitle">個人カメラ設置実績</h2>
         <table class="table">
             <tr>
                 <th>目標</th>
                 <td>${cameraData["目標"]}個</td>
             </tr>
             <tr>
                 <th>進捗本数</th>
                 <td>${cameraData["進捗本数"]}個</td>
             </tr>
             <tr>
                 <th>進捗割合</th>
                 <td>${cameraData["進捗割合"]}%</td>
             </tr>
             <tr>
                 <th>順位</th>
                 <td>${cameraData["順位"]}位</td>
             </tr>
         </table>`;
    person.innerHTML = contents;
}

//所属チーム表示
function teamId() {
    let teamId = sampleTeam["チーム"]["カメラ"];
    teamId = Object.keys(teamId);
    let id = document.getElementById("team-id");
    let contents = `
        <h2 class="subtitle">所属チームID</h2>
        <p>${teamId[0]}</p>
    `;
    id.innerHTML = contents; 
} 

//チーム実績表示
function cameraTeamScore() {
    let teamScore = sampleTeam["チーム"]["カメラ"]["A"];
    let team = document.getElementById("nw-team-score");
    let contents = `
        <h2 class="subtitle">カメラ設置チーム目標 </h2>
        <table class="table">
            <tr>
                <th>目標</th>
                <td>${teamScore["目標"]}</td>
            </tr>
            <tr>
                <th>進捗本数</th>
                <td>${teamScore["進捗本数"]}</td>
            </tr>
            <tr>
                <th>進捗割合</th>
                <td>${teamScore["進捗割合"]}</td>
            </tr>
            <tr>
                <th>順位</th>
                <td>${teamScore["順位"]}</td>
            </tr>
        </table>
    `;
    team.innerHTML = contents;
}

//所属チーム内個人実績
function cameraTeamPerson() {
    let person = sampleTeam["個人"]["user1"]["カメラ"];
    let score = document.getElementById("nw-team-person");
    let contents = `
    <h2 class="subtitle">所属チーム個人実績</h2>
    <table class="table">
        <tr>
            <th>目標</th>
            <td>${person["目標"]}</td>
        </tr>
        <tr>
            <th>進捗個数</th>
            <td>${person["進捗本数"]}</td>
        </tr>
        <tr>
            <th>進捗割合</th>
            <td>${person["進捗割合"]}</td>
        </tr>
        <tr>
            <th>順位</th>
            <td>${person["順位"]}</td>
        </tr>
        <tr>
            <th>貢献度</th>
            <td>${person["貢献度"]}</td>
        </tr>
    </table>`;
    score.innerHTML = contents;
}


//個人とチーム切り替え
if(id == 0) {
    nwPersonTaget();
} else if(id == 1) {
    teamId();
    cameraTeamScore();
    cameraTeamPerson();
}

