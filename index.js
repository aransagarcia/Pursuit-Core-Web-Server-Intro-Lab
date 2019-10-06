document.addEventListener('DOMContentLoaded', loadDataFromServer)




async function loadDataFromServer() {
    const myURL = "http://localhost:300"
    const response = await axios.get(myURL)
    console.log('this is working')
    displayingData(response.data)
}



// const displayDataFromServer = (data) => {
//     console.log(data)

//     const genderHeader = document.createElement("h1")
//     genderHeader.innerText = data.results[0].gender

//     const titleHeader = document.createElement('h2')
//     titleHeader.innerText = data.results[0].name.title;

//     const firstHeader = document.createElement('h2');
//     firstHeader.innerText = data.results[0].name.first;

//     const lastHeader = document.createElement('h2');
//     lastHeader.innerText = data.results[0].name.last;


//     document.body.append(genderHeader, titleHeader, firstHeader, lastHeader)
// }

const displayingData = (data) => {
    
    let personA= document.createElement('div')
    personA.id = "person"
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
        const genderA = document.createElement("h1")
        genderA.innerText = data.results[i].gender;
       console.log(i)

        const titleA = document.createElement("h1")
        titleA.innerText = data.results[i].name.title;
    

        const firstA = document.createElement("h1")
        firstA.innerText = data.results[i].name.first;
        //personA.appendChild(firstA)

        const lastA = document.createElement("h1")
        lastA.innerText = data.results[i].name.last;
        //personA.appendChild(lastA)

        personA.appendChild(genderA, titleA, firstA, lastA)
    }
    document.body.append(personA)
    //document.body.append(genderHeader, titleHeader, firstHeader, lastHeader)
}


const displayingDiv =(data) =>{
    let newDiv = document.createElement('div')
    newDiv.innerText = data.results[0].gender
    document.body.append(newDiv)
}