//This project is a Cards against humanity generator
// Returning random number
let generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

// to store completed 
let complete = [];
// arrays to select from
const questionCards = { cards: ["What is Batman's guilty pleasure?", "A successful job interview starts with a firm handshake and ends with:", "What's my secret power?", "What makes life worth living?", "The healing process began when I joined a support group for victims of:", "My plan for world domination begins with:", "The class field trip was completely ruined by:"] };
const answerCards = { cards: ["A saxophone solo.", "Passive-aggressive post-it notes.", "German Chancellor Angela Merkel.", "Mom.", "Going night-night.", "Not contributing to society in a meaningful way.", "A micropig wearing a tiny raincoat and booties."] };

//Selecting Question
let selectQuestion = () => {
    let index = generateRandomNumber(questionCards.cards.length);
    if(index >= 0 && index < questionCards.cards.length){
        const question = questionCards.cards[index];
        return question;
    } else {
        console.log('incorrect');
    }
};

//Selecting Answer
let selectAnswer = () => {
    let index = generateRandomNumber(answerCards.cards.length);
    if(index >= 0 && index < answerCards.cards.length){
        const answer = answerCards.cards[index];
        return answer;
    } else {
        console.log('not good, no no');
    }
};


//finishing up


let yourCards = () => {
    complete.push(selectQuestion());
    complete.push(selectAnswer());
    const yourCards = complete.join(" \n ");
    console.log(yourCards);

};
//logging result
yourCards();
//and done
