/**
 * Calculate the total score from 7 questions and save it to local storage
 */
function calculateScore() {
    //gettting the values from input form from index.html
    var question1 = parseInt(document.querySelector('input[name="question1"]:checked').value);
    var question2 = parseInt(document.querySelector('input[name="question2"]:checked').value);
    var question3 = parseInt(document.querySelector('input[name="question3"]:checked').value);
    var question4 = parseInt(document.querySelector('input[name="question4"]:checked').value);
    var question5 = parseInt(document.querySelector('input[name="question5"]:checked').value);
    var question6 = parseInt(document.querySelector('input[name="question6"]:checked').value);
    var question7 = parseInt(document.querySelector('input[name="question7"]:checked').value);

    var totalScore = question1 + question2 + question3 + question4 + question5 + question6 + question7;

    //saving the values in local storage
    localStorage.setItem("totalScore", totalScore);
}

/**
 * Call window onload function right after the Calculate button submitted.
 * Find and set the total score and category for result page
 */
window.onload = function () {
    if (document.getElementById("totalScore")) {
        document.getElementById("totalScore").innerHTML = localStorage.getItem("totalScore");
        document.getElementById("score_category").innerHTML = findCategory(localStorage.getItem("totalScore"));
    }
};

/**
 * Find the category of the sleep difficulty based on total score
 * @param {Integer} score 
 * @returns {String} category
 */
function findCategory(score) {
    if (score >= 0 && score <= 7) {
        return "No clinically significant insomnia";
    } else if (score >= 8 && score <= 14) {
        return "Subthreshold insomnia";
    } else if (score >= 15 && score <= 21) {
        return "Clinical insomnia (moderate severity)";
    } else if (score >= 22 && score <= 28) {
        return "Clinical insomnia (moderate severity)";
    } else {
        return "";
    }
}