function changeProfile(heroPicture) {
  const heroProfile = document.getElementById("heroProfile");
  heroProfile.setAttribute("src", `./assets/${heroPicture}.png`);
}

function getComputerChoice() {
  const RPSOptions = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return RPSOptions[randomNumber];
}

function onClickRPS() {
  const RPSGame = document.querySelectorAll(".RPS");
  const handChosenByPlayerPicture = document.getElementById("handChosen");
  const randomHandByRobotPicture = document.getElementById("randomHandByRobot");
  const scoreAnnoucement = document.getElementById("scoreAnnoucement");
  const playerScoreAnnoucement = document.getElementById("playerResult");
  const robotScoreAnnoucement = document.getElementById("robotResult");
  var playerScore = 0;
  var robotScore = 0;

  RPSGame.forEach((hands) => {
    hands.onclick = () => {
      const randomHandByRobot = getComputerChoice();
      var handChosenByPlayerValue = hands.value;
      handChosenByPlayerPicture.setAttribute(
        "src",
        `./assets/${handChosenByPlayerValue}.png`
      );

      randomHandByRobotPicture.setAttribute(
        "src",
        `./assets/${randomHandByRobot}.png`
      );

      if (handChosenByPlayerValue == randomHandByRobot) {
        scoreAnnoucement.innerText = "No winners this time.";
      } else if (
        handChosenByPlayerValue == "rock" &&
        randomHandByRobot == "scissors"
      ) {
        scoreAnnoucement.innerText = "You smashed his scissors!";
        playerScore++;
        playerScoreAnnoucement.innerText = playerScore;
      } else if (
        handChosenByPlayerValue == "rock" &&
        randomHandByRobot == "paper"
      ) {
        scoreAnnoucement.innerText = "You were covered!";
        robotScore++;
        robotScoreAnnoucement.innerText = robotScore;
      } else if (
        handChosenByPlayerValue == "paper" &&
        randomHandByRobot == "rock"
      ) {
        scoreAnnoucement.innerText = "You got him covered!";
        playerScore++;
        playerScoreAnnoucement.innerText = playerScore;
      } else if (
        handChosenByPlayerValue == "paper" &&
        randomHandByRobot == "scissors"
      ) {
        scoreAnnoucement.innerText = "You just got cut!";
        robotScore++;
        robotScoreAnnoucement.innerText = robotScore;
      } else if (
        handChosenByPlayerValue == "scissors" &&
        randomHandByRobot == "paper"
      ) {
        scoreAnnoucement.innerText = "You got him cut!";
        playerScore++;
        playerScoreAnnoucement.innerText = playerScore;
      } else if (
        handChosenByPlayerValue == "scissors" &&
        randomHandByRobot == "rock"
      ) {
        scoreAnnoucement.innerText = "You are smashed!";
        robotScore++;
        robotScoreAnnoucement.innerText = robotScore;
      }
    };
  });
}
