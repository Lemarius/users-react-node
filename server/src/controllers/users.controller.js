const controller = {}
const path = require('path');
const usersFile = path.resolve(__dirname, '../../data/users.json');
const fs = require('fs/promises');
const {v4} = require('uuid');

controller.getUsers =  async (req, res) => {

    console.log('Hola')

    try {
        const data = await fs.readFile(usersFile)
        const jsonData = await JSON.parse(data); 
        res.send(jsonData)
    } catch (err) {
        res.send('Error al leer el archivo')
    }
    
};

controller.writeUser = async (req, res) => {
    const randomNumber = Math.floor(Math.random()* 99 + 1)
    console.log(req.body)
    try {
        const newUser = {
            "userId" : v4(),
            "title": req.body.title,
            "name": req.body.name,
            "age": req.body.age,
            "username": req.body.username,
            "email": req.body.email,
            "profileImage": `https://randomuser.me/api/portraits/${randomNumber < 50 ? 'men' : 'women'}/${randomNumber}.jpg`,
            "active": true
        }
        const data = await fs.readFile(usersFile)
        const jsonData = await JSON.parse(data); 

        const newData = [...jsonData, newUser]

        fs.writeFile(usersFile, JSON.stringify(newData))
        
       res.send(newData)
        
    } catch (err) {
        res.send('Error al crear el usuario')
    }
};

module.exports = controller;