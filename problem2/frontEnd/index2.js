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
    let option4 = document.createElement('option')
    console.log("the array we are working with", selectedQuestion)


    option1.innerText = selectedQuestion.incorrect_answers[0]
    option2.innerText = selectedQuestion.incorrect_answers[1]
    option3.innerText = selectedQuestion.incorrect_answers[2]
    option4.innerText = selectedQuestion.correct_answer



    selectBox.appendChild(option1)
    selectBox.appendChild(option2)
    selectBox.appendChild(option3)
    selectBox.appendChild(option4)

    selectBox.id = "answerChoices"
    selectBox.value = "answer Choices"
    document.body.append(selectBox)

    let arrayOfChoices = [option1, option2, option3, option4]
    console.log(arrayOfChoices)

}
const selectingChoice = (arrayOfChoices) => {
    dropdown.addEventListener('change', (event) => {
        let response = document.createElement('p')
        for (let i = 0; i < arrayOfChoices.length; i++) {
            if (arrayOfChoices[0] || arrayOfChoices[1] || arrayOfChoices[2]) {
                response.innerText = "incorrect answer"
                document.body.append(response)
            } else {
                response.innerText = "correct answer"
                document.body.append(response)
            }
        }
    })
}