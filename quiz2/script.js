var choice = 0;
var counter = 0; //for current question index
var i;
var useranswer = [];
var score = 0;


function onld() {


    document.getElementById('prev').style.display = "none";
    document.getElementById('ques').innerHTML = questions[counter].question;
    choice = 0;
    for (i = 1; i < 5; i++) {

        document.getElementById('option' + i).innerHTML = questions[counter].choices[choice];
        document.getElementById('choice' + i).value = questions[counter].choices[choice];
        choice++;
    }
}

function getans() {

    var radios = document.getElementsByName('answer');
    var decision;

    for (i = 0; i < radios.length; i++) {

        if (radios[i].checked) {
            var decision = i;
        }

    }

    useranswer[counter] = decision;
    console.log(useranswer);
}









// function sub() {
//     for (i = 0; i < questions.length; i++) {
//         if (useranswer[i] == questions[i].answer) {
//             score++;

//         }
//     }

//     console.log(score);
// }







function next_question(obj) {

    getans();

    document.getElementById('error').innerHTML = null;
    counter++;

    //check if radio button is checked 
    if (!document.querySelector('input[name="answer"]:checked')) {
        counter--;
        document.getElementById('error').innerHTML = "Please select a option below";
    }


    //to enabled previous button if counter of question is more than 0

    if (counter > 0) {
        document.getElementById('prev').style.display = "block";
    }
    //to enable result

    if (counter >= questions.length - 1) {
        document.getElementById('next').innerHTML = "<strong>RESULT</strong>";


    };




    //to disable next button if all question in array have been displayed  and display score   
    if (counter >= questions.length) {
        for (i = 0; i < questions.length; i++) {
            if (useranswer[i] == questions[i].answer) {
                score++;

            }
        }

        console.log(score);
        alert("your score is :" + score);
        counter--;
    }

    //load the question and choices
    document.getElementById('ques').innerHTML = questions[counter].question;
    choice = 0;
    for (i = 1; i < 5; i++) {

        document.getElementById('option' + i).innerHTML = questions[counter].choices[choice];
        document.getElementById('choice' + i).value = questions[counter].choices[choice];
        choice++;

    }


    //clear radio button selection 
    var radList = document.getElementsByName('answer');
    for (i = 0; i < radList.length; i++) {
        if (radList[i].checked) {
            radList[i].checked = false;
        }
    }

    //restoring previous answer

    document.getElementsByName('answer')[useranswer[counter]].checked = true;


}

function prev_question(obj) {

    //
    document.getElementById('next').innerHTML = "<strong>NEXT</strong>";
    document.getElementById('next').style.display = "block";
    counter--;
    //to disable previous button if counter of question is less than 1
    if (counter < 1) {
        counter = 0;
        document.getElementById('prev').style.display = "none";
    }
    //to enable next button
    if (counter <= questions.length) {
        document.getElementById('next').style.display = "block";
    }
    document.getElementById('ques').innerHTML = questions[counter].question;


    choice = 3;
    //change value and text of answers
    for (i = 4; i > 0; i--) {

        document.getElementById('option' + i).innerHTML = questions[counter].choices[choice];
        document.getElementById('choice' + i).value = questions[counter].choices[choice];
        choice--;
    }
    document.getElementsByName('answer')[useranswer[counter]].checked = true;
}









var questions = [{
        "question": "Question 1",
        "choices": ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        "answer": "2"
    },

    {
        "question": "Question 2",
        "choices": ["Answer 5", "Answer 6", "Answer 7", "Answer 8"],
        "answer": "2"
    },

    {
        "question": "Question 3",
        "choices": ["Answer 9", "Answer 10", "Answer 11", "Answer 12"],
        "answer": "2"
    },

    {
        "question": "Question 4",
        "choices": ["Answer 13", "Answer 14", "Answer 15", "Answer 16"],
        "answer": "2"
    },

    {
        "question": "Question 5",
        "choices": ["Answer 17", "Answer 18", "Answer 19", "Answer 20"],
        "answer": "2"
    },

    {
        "question": "Question 6",
        "choices": ["Answer 21", "Answer 22", "Answer 23", "Answer 24"],
        "answer": "2"
    },

    {
        "question": "Question 7",
        "choices": ["Answer 25", "Answer 26", "Answer 27", "Answer 28"],
        "answer": "2"
    },

    {
        "question": "Question 8",
        "choices": ["Answer 29", "Answer 30", "Answer 31", "Answer 32"],
        "answer": "2"
    },

    {
        "question": "Question 9",
        "choices": ["Answer 33", "Answer 34", "Answer 35", "Answer 36"],
        "answer": "2"
    },

    {
        "question": "Question 10",
        "choices": ["Answer 37", "Answer 38", "Answer 39", "Answer 40"],
        "answer": "2"
    }

]