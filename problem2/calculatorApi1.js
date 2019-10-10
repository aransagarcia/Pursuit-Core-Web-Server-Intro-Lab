const express = require("express")


const app = express();
const port = 9090;

app.get("/add", (resquest, response) =>{
    response.send("This is the homepage at /")
});
app.get("/add", (resquest, response) =>{
    response.send("This is the homepage at /")
});
app.get("/add", (resquest, response) =>{
    response.send("This is the homepage at /")
});
app.get("/add", (resquest, response) =>{
    response.send("This is the homepage at /")
});

app.get("/login", (resquest, response) =>{
    response.set("Content-Type", "text/html");
    response.status(200);
    response.send(`
    <http>
    <body>
    <h1> The login page of the server for 6.2 is still under construction but you can log-in! </h1>
    <input placeholder = "username"/>
    <input placeholder = "password" type="password"/>
    <button> login </button>
    </body>
    </html?=>
    `);
});


app.get('/users/:userID',(request, response)=> {
    let users = ["Amy", "Bob", "Cat"]
    let userID = request.params.userID
    let data  = {
        userID : userID,
        username : users[userID]
    };

    response.status(200)
    response.json(data);

    
    response.set('Content-Type', "application/json")
    response.send(JSON.stringify(data));
})

app.post('/',(request, response)=>{
response.send("server saw the POST request coming at /")
});




app.listen(port, () =>{
console.log(`Server is listening to port 8080 http://localhost:${8080}`)
});

