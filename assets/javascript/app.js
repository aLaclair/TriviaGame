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
    }
    ]
    let questionCounter = 0
    $('.start').click(function startGame() {
        $('.start').remove()
        nextQuestion()
    })
    function nextQuestion() {    
        $('.main-game').append(questions[questionCounter].question + '<br<')
        for (key in questions[questionCounter].answers) {
            $('.main-game').append('<br><button class="btn" value="' + questions[questionCounter].answers[key] + '">' + questions[questionCounter].answers[key] + '</button>')
        }
    $('.btn').click(function clicked() {
        console.log(this)
    })
    }


})