var currentq = 0;
var userans=[];


function getans() {
    //for taking answer from user
    var radios = document.getElementsByName('answer');
    var decision;

    for (i = 0; i < radios.length; i++) {

        if (radios[i].checked) {
            var decision = i;
        }

    }

    userans[currentq] = decision;
    console.log(userans)
}





function loadJSON() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            // Parse the JSON data structure contained in xmlhttp.responseText using the JSON.parse function.
            var JSONObject = JSON.parse(xmlhttp.responseText);

            // The JSONObject variable now contains the data structure and can be accessed as JSONObject.firstName and
            // JSONObject.lastName. Assign the object members to the DOM elements FirstName and LastName so that they get
            // displayed on the page
            document.getElementById("ques").innerHTML = JSONObject[currentq].question;

            var choice = 1;
            for (var i = 0; i < 4; i++) {
                document.getElementById("choice" + choice).value = JSONObject[currentq].choices[i];
                document.getElementById("option" + choice).innerHTML = JSONObject[currentq].choices[i];
                choice++;
            }



        }
    }
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
}





function next_click() {
var score=0;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var JSONObject = JSON.parse(xmlhttp.responseText);
getans();
            currentq++;
            //no error if option is selected
            document.getElementById('error').innerHTML = null;
            //check if option is selected
            if (!document.querySelector('input[name="answer"]:checked')) {
                currentq--;
                document.getElementById('error').innerHTML = "Please select a option below";
            }



            //stop the counter if question are finished in the json file
            if (currentq >= JSONObject.length) {
            	 for (i = 0; i < JSONObject.length; i++) {
        if (userans[i] == JSONObject[i].answer) {
            score++;

        }
    }

    console.log(score);
    alert("your score is :"+score);
        
                           currentq--;
            }
  if (currentq >= JSONObject.length-1) {
document.getElementById('next').innerHTML = "<strong>RESULT</strong>";	

            }




            //load the  question
            document.getElementById("ques").innerHTML = JSONObject[currentq].question;
            //load the answers
            var choice = 1;
            for (var i = 0; i < 4; i++) {
                document.getElementById("choice" + choice).value = JSONObject[currentq].choices[i];
                document.getElementById("option" + choice).innerHTML = JSONObject[currentq].choices[i];
                choice++;
            }

            //clear radio button selection 
            var radList = document.getElementsByName('answer');
            for (i = 0; i < radList.length; i++) {
                if (radList[i].checked) {
                    radList[i].checked = false;
                }
            }

//restoring values
document.getElementsByName('answer')[userans[currentq]].checked = true;
        }
    }
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
}









function prev_click() {


document.getElementById('next').innerHTML = "<strong>NEXT</strong>";	
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var JSONObject = JSON.parse(xmlhttp.responseText);

            currentq--;


            //stop counter if index is 0
            if (currentq < 0) {
                currentq++;

            }

            //load the question
            document.getElementById("ques").innerHTML = JSONObject[currentq].question;
            //load the answers
            var choice = 1;
            for (var i = 0; i < 4; i++) {
                document.getElementById("choice" + choice).value = JSONObject[currentq].choices[i];
                document.getElementById("option" + choice).innerHTML = JSONObject[currentq].choices[i];
                choice++;
            }

//restoring values
document.getElementsByName('answer')[userans[currentq]].checked = true;

        }
    }
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
}