var questions = [{
        question: 'Python created by',
        choices: [
            'Guido van Rossum',
            'Yukihiro Matsumoto',
            ' James Gosling',
            'Dennis Ritchie'
        ],
        correctAnswer: 0
    },
    {
        question: 'Ruby created by',
        choices: [
            'Larry Wall',
            ' Bjarne Stroustrup',
            'Rasmus Lerdorf',
            'Yukihiro Matsumoto'
        ],
        correctAnswer: 3
    },
    {
        question: 'Java created by',
        choices: [
            'Dennis Ritchie',
            'James Gosling',
            'John McCarthy',
            'Niklaus Wirth'
        ],
        correctAnswer: 1
    },
    {
        question: 'C created by',
        choices: [
            'Rasmus Lerdorf',
            'Dennis Ritchie',
            'Bjarne Stroustrup',
            'Guido van Rossum'
        ],
        correctAnswer: 1
    },
    {
        question: 'C++ created by',
        choices: [
            'Brendan Eich',
            'Niklaus Wirth',
            'Bjarne Stroustrup',
            'Dennis Ritchie'
        ],
        correctAnswer: 2
    },
    {
        question: 'PHP created by',
        choices: [
            'Guido van Rossum',
            'Yukihiro Matsumoto',
            'Bjarne Stroustrup',
            'Rasmus Lerdorf'
        ],
        correctAnswer: 3
    },
    {
        question: 'Perl created by',
        choices: ['Larry Wall', 'John McCarthy', 'Dennis Ritchie', 'Brendan Eich'],
        correctAnswer: 0
    },
    {
        question: 'JavaScript created by',
        choices: [
            'Niklaus Wirth',
            'Brendan Eich',
            'Rasmus Lerdorf',
            'Yukihiro Matsumoto'
        ],
        correctAnswer: 1
    },
    {
        question: 'Pascal created by',
        choices: [
            'John McCarthy',
            'Guido van Rossum',
            'James Gosling',
            'Niklaus Wirth'
        ],
        correctAnswer: 3
    },
    {
        question: 'Lisp created by',
        choices: [
            'Bjarne Stroustrup',
            'Rasmus Lerdorf',
            'John McCarthy',
            'Larry Wall'
        ],
        correctAnswer: 2
    }
];

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

displayCurrentQuestion();
$(document).find('.quizMessage').hide();
$(document)
    .find('.nextButton')
    .on('click', function() {
        if (!quizOver) {
            value = $('input[type="radio"]:checked').val();
            if (value == undefined) {
                $(document).find('.quizMessage').text('Please select an answer');
                $(document).find('.quizMessage').show();
            } else {
                $(document).find('.quizMessage').hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find('.nextButton').text('Play Again?');
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find('.nextButton').text('Next Question');
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

function displayCurrentQuestion() {
    console.log('In display current question');

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find('.quizContainer > .question');
    var choiceList = $(document).find('.quizContainer > .choiceList');
    var numChoices = questions[currentQuestion].choices.length;
    console.log(choiceList);

    $(questionClass).text(question);

    $(choiceList).find('li').remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $(
            '<li><input type="radio" value=' +
            i +
            ' name=dynradio />' +
            choice +
            '</li>'
        ).appendTo(choiceList);
    }
}

function displayScore() {
    $(document)
        .find('.quizContainer > .result')
        .text('You Scored: ' + correctAnswers + ' out of: ' + questions.length);
    $(document).find('.result').show();
}

function hideScore() {
    $(document).find('.result').fadeOut(500);
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}