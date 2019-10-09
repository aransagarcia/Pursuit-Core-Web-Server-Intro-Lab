document.addEventListener('DOMContentLoaded', loadDataFromServer)

async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const response = await axios.get(myURL)
    console.log('this is working: I am listening to port 3000')
    console.log(response.data.results)
    displayingData(response.data)
  //  makeCard(data.results)
}




const displayingData = (data) => {

    //let personA = document.createElement('div')
   // personA.id = "person"
    //console.log(data)
    for (let i = 0; i < data.results.length; i++) {
        let personDiv =document.createElement('div')
        personDiv.class = "person"
        const genderA = document.createElement("p")
        genderA.innerText = data.results[i].gender;
        

        const titleA = document.createElement("h2")
        titleA.innerText = data.results[i].name.title;
        

    //     const firstA = document.createElement("p")
    //     firstA.innerText = data.results[i].name.first;
    //    // person.appendChild(firstA)

    //     const lastA = document.createElement("p")
    //     lastA.innerText = data.results[i].name.last;

        const name = document.createElement('p')
        name.innerText = data.results[i].name.first + ' ' + data.results[i].name.last
       // person.appendChild(lastA)

    
       personDiv.appendChild(titleA)  
       //personDiv.appendChild(firstA) 
       //personDiv.appendChild(lastA) 
       personDiv.appendChild(name)
       personDiv.appendChild(genderA) 
       document.body.append(personDiv)
       makeCard(personDiv)
    }
   // document.body.append(personDiv)
//makeCard(personDiv)
} 

const makeCard =(data)=>{
console.log(data)
console.log('recieving Div')
}


    //document.body.append(genderHeader, titleHeader, firstHeader, lastHeader)



// const displayingDiv = (data) => {
//     let newDiv = document.createElement('div')
//     newDiv.innerText = data.results[0].gender
//     document.body.append(newDiv)
// }

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