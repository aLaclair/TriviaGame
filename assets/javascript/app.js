$('document').ready(function() {
    const questions = [{
        question: 'Who was the director of famous Horror Flicks "Us" and "Get Out"?',
        answers: {
            hitch: "Alfred Hitchcock",
            peele: "Jordan Peele",
            king: "Stephen King",
            burton: "Tim Burton",
        },
        correct: "Jordan Peele",
        image: '<img src="./assets/images/getout.gif">'
    },{
        question: "What was Rob Zombie's occupation before making movies?",
        answers: {
            tax: "Tax Preparer",
            teacher: "Teacher",
            web: "Web Developer",
            music: "Musician",
        },
        correct: "Musician",
        image: '<img src="./assets/images/zombie.gif">'
    },{
        question: "Edgar Allan Poe was born on what day?",
        answers: {
            jan5: "January 5th",
            feb5: "February 5th",
            jan19: "January 19th",
            hallo: "October 31st",
        },
        correct: "January 19th",
        image: '<img src="./assets/images/raven.gif">'
    },{
        question: "What was the name of Stephen King's famous clown?",
        answers: {
            penny: "Pennywise",
            tiwsty: "Twisty",
            cap: "Captain Spaulding",
            krust: "Krusty"
        },
        correct: "Pennywise",
        image: '<img src="./assets/images/penny.gif">'
    },{
        question: 'What is the name of the large shadow monster in "Stranger Things"?',
        answers: {
            dem: "Demogorgon",
            mind: "Mind Flayer",
            thing: "The Thing",
            upside: "Upside Down"
        },
        correct: "Mind Flayer",
        image: '<img src="./assets/images/mind.gif">'
    },{
        question: 'Which of the following lists are original Universal Classic Monsters?',
        answers: {
            list1: "Creature, Dracula, Freddy, Jason",
            list2: "Norman Bates, Leatherface, Frankenstein, Michael Meyers",
            list3: "Freddy, Jason, Leatherface, Michael Meyers",
            list4: "Dracula, Frankenstein, Creature, The Mummy"
        },
        correct: "Dracula, Frankenstein, Creature, The Mummy",
        image: '<img src="./assets/images/creature.gif">'
    }
    ]
    let questionCounter = 0
    let correct = 0
    let incorrect = 0
    let timeout = 0
    let sec
    $('.start').click(function startGame() {
        $('.start').remove()
        nextQuestion()
    })
    function nextQuestion() {
        if (questionCounter == questions.length) { // if there are no more questions left, display game over screen
        $('.main-game').empty().append('Game Over').append('<br>Correct Guesses: ' + correct).append('<br>Incorrect Guesses: ' + incorrect).append('<br>Timeouts: ' + timeout)
        $('.main-game').append('<br><button class="restart">Restart</button>')
        $('.restart').click(function restartGame() { // restart button resets value and starts from question 1
            questionCounter = 0
            correct = 0
            incorrect = 0
            timeout = 0
            nextQuestion()
        })
        }
        else {
        let timer = setInterval(() => {
        $('.timer').show()
        $('.timer').text(sec--)
        if(sec < 0) { // if no answer is selected within 15 seconds, show correct answer and continue game, increase timeout variable by 1 for end game screen
            $('.main-game').empty().append('Foolish Mortal').append('<br> The correct answer was ' + questions[questionCounter].correct + '<br>')
            $('.main-game').append(questions[questionCounter].image)
            questionCounter++
            timeout++
            setTimeout(nextQuestion, 4000)
            clearInterval(timer)
            $('.timer').hide()
        }
        }, 1000);  
        sec = 10
        $('.main-game').empty() // empty the div, and append new question and answers
        $('.main-game').append('<br><p>' + questions[questionCounter].question + '</p>')
        $('.main-game').append('<div class="buttons"></div>')
        for (key in questions[questionCounter].answers) {
            $('.buttons').append('<br><button class="btn" value="' + questions[questionCounter].answers[key] + '">' + questions[questionCounter].answers[key] + '</button>')
        }
    $('.btn').click(function clicked() { // add click events to each answer button
        if ($(this).val() == questions[questionCounter].correct) { //if correct then display nice job mortal. Set interval for 5 seconds and move on 
        $('.main-game').empty().append('Nice Job Mortal<br>')
        $('.main-game').append(questions[questionCounter].image)
        questionCounter++
        correct++ //increase correct by for end game screen
        setTimeout(nextQuestion, 4000)
        clearInterval(timer)
        $('.timer').hide()
        
        }
        else { // if incorrect then display incorrect and correct answer. incorrect +1 for end game screen
        $('.main-game').empty().append('Foolish Mortal').append('<br> The correct answer was ' + questions[questionCounter].correct + '<br>')
        $('.main-game').append(questions[questionCounter].image)
        questionCounter++
        incorrect++ //increase incorrect by 1 for end game screen
        setTimeout(nextQuestion, 4000)
        clearInterval(timer)
        $('.timer').hide()
        }
    })
}}
})