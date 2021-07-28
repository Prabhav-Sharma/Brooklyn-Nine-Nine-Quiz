var readLine = require('readline-sync');
var chalk = require('chalk');

var userName = readLine.question("What's your name? ");
console.log(chalk.bgBlue('Welcome ' + userName + "! to Brooklyn Nine Nine Quiz \n \n Instruction: Please enter the option (A,B,C,D)"));
var score = 0;

function play(question, answer) {

  var userAnswer = readLine.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("That's right! Nine-Nine!!"))
    score++;
  } else {
    console.log(chalk.bgRed('Wrong Answer, are you really even a fan bruh?'));
    console.log(chalk.yellowBright('The answer is: ' + answer));
  }
  console.log(chalk.cyanBright('Score: ' + score));
}

var questions = [{
    question: "Let's start easy: What's Gina's last name? \n A.Peritti \n B.Lenetti \n C.Laretti \n D.Penitti \n",
    answer: "B"
  },
  {
    question: "What's the Pontiac Bandit's real name? \n A.Jeremy Figgis \n B.Doug Jude \n C.Doug Judy \n D.Jimmy Figgis \n",
    answer: "C"
  },
  {
    question: "This one's a bit harder. What's Charles' son's name? \n A.Nikolas \n B.Christopher \n C.Nikolaj \n D.Krystov \n ",
    answer: "C"
  },
  {
    question: "who has NOT won a Halloween Heist? \n A.Charles \n B.Rosa \n C.Amy \n D.Terry \n ",
    answer: "A"
  },
  {
    question: "What were Jake and Holt's names while living in Florida? \n A.Larry and Craig \n B.Craig and Greg \n C.Barry and Greg \n D.Larry and Greg \n",
    answer: "D"
  },
  {
    question: "How many kids does Terry have? \n A.One \n B.Two \n C.Three \n D.Four \n",
    answer: "C"
  },
  {
    question: "In Season 1, who wins the felony arrest bet? \n A.Jake \n B.Amy \n",
    answer: "A"
  },
  {
    question: "What does Rosa's landlord think her name is?  \n A.Alice Goldfinger \n B.Emily Goldfinger \n C.Emily Goldfinch \n D.Alice Goldfinch \n",
    answer: "C"
  },
  {
    question: "What does FOMOW stand for?  \n A.Fear of missing out on weekends \n B.Fear of missing out on work \n C.Fear of making out at work \n D.Fear of making omelets wrong \n",
    answer: "B"
  },
  {
    question: "In Season 7 we find out that Rosa has a dog. What's his name? \n A.Cheddar \n B.Andy \n C.Argyle \n D.Arlo \n",
    answer: "D"
  }
];


var counter = 0;
for (var i = 0; i < questions.length; i++) {
  if (i < 5) {
    play(questions[i].question, questions[i].answer);
  }
  if (i >= 5) {
    if (score > 3) {
      if (counter === 0) {
        counter++;
        console.log(chalk.cyanBright("Welcome to Round 2!!"));
      }
      play(questions[i].question, questions[i].answer);
    } else {
      console.log(chalk.redBright("It was fun, but it's over for us " + userName + ", you couldn't make it to round 2!"));
      printScoreCard();
      break;
    }
  }
  if (i === 9) {
    printScoreCard();
    checkForHighScore();
  }

  if (score === 10) {
    console.log(chalk.cyanBright('"You know Brooklyn nine nine better than all the other dum-dums" \n - Rosa Diaz"'));
  }
  var scoreCard = [{
    name: "Prakhar",
    score: 7
  }, {
    name: "Ankhil",
    score: 6
  }, {
    name: userName,
    score: score
  }];

};


function printScoreCard() {
  for (var i = 0; i < scoreCard.length; i++) {
    console.log(scoreCard[i]);
  }
  console.log("Send me a screenshot to save your score");
}

function checkForHighScore() {
  var counter2 = 0;
  for (var i = 0; i < scoreCard.length - 1; i++) {
    if (score > scoreCard[i].score) {
      if (counter2 === 0) {
        counter2++;
        console.log(chalk.yellowBright("Highscore!!!!"));
      }
    }
  }
}