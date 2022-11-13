//zanti.html切り替え
document.getElementById("camera").addEventListener("click", () => {
    location.href = "index.html";
});

//個人残置線実績
function zantiPersonTaget() {
    let cameraData = samplePerson["個人"]["残置線"]["user1"];
    let person = document.getElementById("zanti-person-target");
    let contents = `
    <h2 class="subtitle">個人残置線撤去実績</h2>
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
    let teamId = sampleTeam["チーム"]["残置線"];
    teamId = Object.keys(teamId);
    let id = document.getElementById("team-id");
    let contents = `
        <h2 class="subtitle">所属チームID</h2>
        <p>${teamId[1]}</p>
    `;
    id.innerHTML = contents; 
}

//チーム実績表示
function zantiTeamScore() {
    let teamScore = sampleTeam["チーム"]["残置線"]["B"];
    let team = document.getElementById("zanti-team-score");
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
function zantiTeamPerson() {
    let person = sampleTeam["個人"]["user2"]["残置線"];
    let score = document.getElementById("zanti-team-person");
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
    zantiPersonTaget();
} else if(id == 1) {
    teamId();
    zantiTeamScore();
    zantiTeamPerson();
}