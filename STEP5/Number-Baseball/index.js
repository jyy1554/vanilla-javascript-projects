const $startButton = document.querySelector(".start-button");
const $gameBox = document.querySelector(".game-box");
const $form = document.querySelector(".input-form");
const $firstInput = document.querySelector("input"); //첫번째 Input 칸
const $inputs = document.querySelectorAll("input");
const $scores = document.querySelectorAll(".score"); //BSO
const $remainGameNums = document.querySelector(".remainGameNums");

let randomNum = "";
let maxGameNums = 10;
let numberOfGames = 1;
const maxInputLength = 1;

//game 화면 안보이게 하기
$gameBox.style.display = "none";

//랜덤 세자리 숫자를 만드는 함수
const makeRandomNumber = () => {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    randomNum = "";

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * (10 - i)); //처음엔 0이상 10미만, 두번째는 0이상 9 미만, ..
        randomNum += nums.splice(randomIndex, 1); //splice(시작인덱스, 지울 개수) : return값으로 지워진 요소 반환
    }
};

//input칸의 숫자를 지우는 함수
const resetInputs = () => {
    for (const input of $inputs) {
        input.value = "";
    }
};

//Ball, Strike, Out 숫자를 나타내는 함수
const showScore = (arr) => {
    for (const [i, score] of $scores.entries()) {
        score.textContent = arr[i];
    }
};

//몇번째 게임인지 보여주는 함수
const showGameNums = (num) => {
    $remainGameNums.textContent = num;
};

//입력되는 input값을 1자리 수로 제한하는 함수
const handleMaxLength = (e) => {
    if (e.target.value.length > maxInputLength) {
        e.target.value = e.target.value.slice(0, maxInputLength);
    }
};

const gameStart = () => {
    $startButton.style.display = "none";
    $gameBox.style.display = "block";

    showScore([0, 0, 0]);
    numberOfGames = 1;
    showGameNums(numberOfGames);
    resetInputs();
    makeRandomNumber();
};

const endGame = () => {
    $gameBox.style.display = "none";
    $startButton.textContent = "Restart";
    $startButton.style.display = "block";
};

//정답 체크 함수
const checkAnswer = (e) => {
    e.preventDefault();
    numberOfGames++;

    let userInput = "";
    //사용자가 입력한 input들을 userInput변수에 문자열로 넣어줌
    for (const input of $inputs) {
        userInput += input.value;
    }

    const BSO = [0, 0, 0]; //Ball, Strike, Out
    //userInput과 정답인 randomNum과 비교하여 BSO값을 리턴
    for (let i = 0; i < 3; i++) {
        const input = userInput[i];

        if (randomNum[i] === input) {
            //strike인 경우
            BSO[1] += 1;
        } else if (randomNum.indexOf(input) !== -1) {
            //ball인 경우
            BSO[0] += 1;
        }
    }
    //out인 경우
    if (BSO[0] + BSO[1] === 0) {
        BSO[2] = 1;
    }

    //정답, 실패 여부 확인 및 10번째에도 못 맞힌 경우 체크
    if (BSO[1] === 3) {
        //정답을 맞힌 경우
        alert("정답입니다!");
        endGame();
    } else if (numberOfGames > maxGameNums) {
        //10번째에도 못 맞힌 경우
        alert("실패!");
        endGame();
    } else {
        //정답을 맞히지 못했지만 게임횟수가 10회 이내인 경우
        showScore(BSO);
        resetInputs();
        showGameNums(numberOfGames);
        $firstInput.focus(); //첫번째 input칸으로 커서를 옮기기 위해
    }
};

$startButton.addEventListener("click", gameStart);
$form.addEventListener("input", handleMaxLength);
$form.addEventListener("submit", checkAnswer);
