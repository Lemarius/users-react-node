const express = require('express') // siempre traernos express
const userRoutes = express.Router()

const controller = require('../controllers/users.controller')


userRoutes.get('/', controller.getUsers);


userRoutes.post('/writeUser', controller.writeUser)


module.exports = userRoutes;