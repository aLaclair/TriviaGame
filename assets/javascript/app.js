$('document').ready(function() {
    const questions = [{
        question: 'Who was the director of famous Horror Flicks "Us" and "Get Out"?',
        answers: {
            hitch: "Alfred Hitchcock",
            peele: "Jordan Peele",
            king: "Stephen King",
            burton: "Tim Burton",
        },
        correct: "Jordan Peele"
    },{
        question: "What was Rob Zombie's occupation before making movies?",
        answers: {
            tax: "Tax Preparer",
            teacher: "Teacher",
            web: "Web Developer",
            music: "Musician",
        },
        correct: "Musician"
    },{
        question: "Edgar Allan Poe was born on what day?",
        answers: {
            jan5: "January 5th",
            feb5: "February 5th",
            jan19: "January 19th",
            hallo: "October 31st",
        },
        correct: "January 19th"
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
            $('.main-game').empty().append('Foolish Mortal').append('<br> The correct answer was ' + questions[questionCounter].correct)
            questionCounter++
            timeout++
            setTimeout(nextQuestion, 4000)
            clearInterval(timer)
            $('.timer').hide()
        }
        }, 1000);  
        sec = 15
        $('.main-game').empty() // empty the div, and append new question and answers
        $('.main-game').append('<br>' + questions[questionCounter].question + '<br<')
        for (key in questions[questionCounter].answers) {
            $('.main-game').append('<br><button class="btn" value="' + questions[questionCounter].answers[key] + '">' + questions[questionCounter].answers[key] + '</button>')
        }
    $('.btn').click(function clicked() { // add click events to each answer button
        if ($(this).val() == questions[questionCounter].correct) { //if correct then display nice job mortal. Set interval for 5 seconds and move on 
        $('.main-game').empty().append('Nice Job Mortal')
        questionCounter++
        correct++ //increase correct by for end game screen
        setTimeout(nextQuestion, 4000)
        clearInterval(timer)
        $('.timer').hide()
        }
        else { // if incorrect then display incorrect and correct answer. incorrect +1 for end game screen
        $('.main-game').empty().append('Foolish Mortal').append('<br> The correct answer was ' + questions[questionCounter].correct)
        questionCounter++
        incorrect++ //increase incorrect by 1 for end game screen
        setTimeout(nextQuestion, 4000)
        clearInterval(timer)
        $('.timer').hide()
        }
    })
}}
})