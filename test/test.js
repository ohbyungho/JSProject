let computerNum = 0;
let userInput = document.getElementById("userInput");
let playBtn = document.getElementById("playBtn");
let resultDiv = document.getElementById("resultDiv");
let cnt = 5;
let cntArea = document.getElementById("cntArea");
let resetBtn = document.getElementById("resetBtn");
let history = [];

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
})

function randomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;
    
    if(userValue < 1 || userValue > 100){
        resultDiv.textContent = "1 ~ 100사이에 숫자만 입력해주세요";
        return;
    }

    if(history.includes(userValue)){
        resultDiv.textContent = "이미 입력한 숫자입니다.";
        return;
    }
    cnt--;
    cntArea.textContent = `남은 기회는 ${cnt}번 입니다.`;
    console.log(cnt, "cnt 의 값?")
    
    if(computerNum > userValue){
        resultDiv.textContent = "Up";
    }else if(computerNum < userValue){
        resultDiv.textContent = "Down";
    }else{
        resultDiv.textContent = "정답";
        playBtn.disabled = true;
    }

    history.push(userValue);

    if(cnt < 1){
        playBtn.disabled = true;
        if(computerNum == userValue){
            resultDiv.textContent = "정답";
        }else{
            resultDiv.textContent = "기회가 끝났습니다.";
        }
    }
}

function reset(){
    location.reload();
}
randomNum();