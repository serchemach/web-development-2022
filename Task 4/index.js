const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

function LoginPageHandler(req, res){
    res.sendFile(__dirname + "/public/index.html")
}

function LoginFormHandler(req, res){
    function FileWriteErrorHandler(error){
        if(error){
            console.log('Error', error)
        }
        else{
            console.log("User added")
        }
    }

    function FileReadHandler(error, data){
        if(error){
            console.log('Error', error)
        }
        else{
            let response = "";
            let usersList = data.split('\n')
            for(let i = 0; i < usersList.length && !response; i++)
            {
                let userParams = usersList[i].split(' ')
                if(userParams[0] == req.body.username)
                {
                    if(userParams[1] == req.body.password.replace("\n", ''))
                        response = "Long time no see, " + req.body.username  
                    else
                        response = "Wrong password"
                }
            }
            if(!response)
            {
                response = "It looks like you are new here, " + req.body.username;
                fs.appendFile(__dirname + "/users.txt", req.body.username + ' ' + req.body.password + '\n', FileWriteErrorHandler)
            }
            res.send(response)
        }
    }

    fs.readFile(__dirname + "/users.txt", 'utf8', FileReadHandler)
}

function AdminHandler(req, res){
    function FileReadHandler(error, data){
        if(error){
            console.log('Error', error)
        }
        else{
            let response = "Since you're an admin, here is the full list of users:\n";
            let usersList = data.split('\n')
            for(let i = 0; i < usersList.length; i++)
            {
                let userParams = usersList[i].split(' ')
                response += userParams[0] + '\n'
            }
            res.send(response)
        }
    }
    if(req.headers.secret == 'I know the secret')
    {
        fs.readFile(__dirname + "/users.txt", 'utf8', FileReadHandler)
    }
    else
    {
        res.sendStatus(403);
    }
}

app.get('/login', LoginPageHandler)
app.post('/login', LoginFormHandler)
app.get('/admin', AdminHandler)

app.listen(3000)
