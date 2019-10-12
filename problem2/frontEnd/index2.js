document.addEventListener("DOMContentLoaded", loadDataFromServer)
let dataArr = []
async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const response = await axios.get(myURL)
    console.log("Listening to port 3000")
    dataArr = response.data.results
    // console.log("data", dataArr[7])
    displayData(dataArr)
    console.log(dataArr)
}



displayData = (dataArr) => {
    let selectedQuestion = []
    let question1 = document.createElement("p");
    selectedQuestion = dataArr[Math.floor(Math.random() * dataArr.length)]
    question1.innerText = selectedQuestion.question
    //console.log(question1)
    console.log(dataArr)
    console.log("question", question1)
    document.body.append(question1)
    makeChoices(selectedQuestion)
}



makeChoices = (selectedQuestion) => {
    let selectBox = document.createElement('select')
    let option1 = document.createElement('option')
    let option2 = document.createElement('option')
    let option3 = document.createElement('option')

    //console.log("the array we are working with", selectedQuestion)

    //option1.innerText = selectedQuestion.incorrect_answers[0]
    option1.value = 'hello'
    option1.appendChild.selectBox
    option2.innerText = selectedQuestion.incorrect_answers[1]
    option3.innerText = selectedQuestion.incorrect_answers[2]


    //option4.innerText = selectedQuestion.correct_answer

    console.log(selectBox);
    console.log(option1);



    selectBox.appendChild.option1
    selectBox.id = "answerChoices"
    document.body.append(selectBox)
}

