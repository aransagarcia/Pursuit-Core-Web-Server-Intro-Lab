document.addEventListener("DOMContentLoaded", loadDataFromServer)
let dataArr = []
async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const response = await axios.get(myURL)
    console.log("Listening to port 3000")
    dataArr = response.data.results
    // console.log("data", dataArr[7])
    displayData(dataArr)
}

displayData=(dataArr)=>{
    let selectedQuestion = []
    let question1 = document.createElement("p");
    selectedQuestion = dataArr[Math.floor(Math.random() * dataArr.length)]
    question1.innerText = selectedQuestion.question
    //console.log(question1)
    console.log(dataArr)
    console.log("question", question1)
    document.body.append(question1)


    let selectBox = document.createElement('select')
    let option1 = document.createElement('option')
    let option2 = document.createElement('option')
    let opttion3 = document.createElement('option')
    
selectBox.id = "answerChoices"
document.body.append(selectBox)



}

