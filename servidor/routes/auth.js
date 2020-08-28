//Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const usuarioController  = require('../controllers/usuarioController');
const { check } = require('express-validator');
const authController= require('../controllers/authController')

//Crear un usuario
// api/auth

router.post('/',
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser mínimio de  6 caracteres').isLength({ min: 6})
    ], 
    authController.autenticarUsuario
);

module.exports = router;