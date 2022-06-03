const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const errorHandler = require('../utils/errorHandler');

const jwtKey = 'dev-jwt';
//вход по логину
module.exports.login = async function (req, res) {
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
        // пользователь существует, проверка пароля
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            //генерация токена, пароли совпали
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, jwtKey, { expiresIn: 60 * 60 });

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: 'Пароль не верный!!!'
            })
        }
    }
    else {
        //пользователь не существует
        res.status(404).json({
            message: 'Email не существует!!!'
        })
    }
}

//регистрация
module.exports.register = async function (req, res) {
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
        // пользователь существует, это ошибка
        res.status(409).json({
            message: 'Email занят!!!'
        })
    } else {
        //нужно создать пользователя
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;

        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })

        try {
            await user.save().then(() => console.log('User created'))
            res.status(201).json(user)
        } catch (e) {
            //обработать ошибка
            errorHandler(res, e)
        }
    }
}