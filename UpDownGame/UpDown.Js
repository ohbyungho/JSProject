// 랜덤번호 지정
// 유저가 번호를 입력한다
// 만약에 유저가 랜덤번호를 맞추면, 정답
// 랜덤번호가 < 유저번호 Down
// 랜덤번호가 > 유저번호 Up
// reset 버튼 클릭 시 게임 리셋
// 5번 기회 다쓰면 게임 끝
// 유저가 1 ~ 100 범위 밖에 숫자를 입력하면 알려주고 기회 깍지않음
// 유저가 이미 입력한 숫자를 또 입력하면 기회 깍지않음

let computerNum = 0;
let playBtn = document.getElementById("playBtn");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let resetBtn = document.getElementById("resetBtn");
let cnt = 5;
let gameOver = false;
let changeArea = document.getElementById("changeArea");
let history = [];

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
});

function RandomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}


function play(){
    let userValue = userInput.value;
    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1 ~ 100 사이 숫자를 입력해주세요."
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다."
        return;
    }
    console.log(history);
    cnt--;
    changeArea.textContent = `남은기회 : ${cnt}번`
    if(userValue < computerNum){
        resultArea.textContent = "Up";
    }else if(userValue > computerNum){
        resultArea.textContent = "Down";
    }else{
        resultArea.textContent = "정답";
        playBtn.disabled = true;
    }

    history.push(userValue);
    
    if(cnt < 1){
        gameOver = true;
    }

    if(gameOver){
        playBtn.disabled = true;
    }
}

function reset(){
    // user input창이 깨끗하게 정리되고
    userInput.value = "";
    // 새로운 번호가 생성
    RandomNum();

    resultArea.textContent = "결과값이 여기 나옵니다!";
    playBtn.disabled = false;
    cnt = 5;
    changeArea.textContent = `남은기회 : ${cnt}번`;
    history.splice(0, history.length);
    gameOver = false;
    // location.reload();
};
RandomNum();