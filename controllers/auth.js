const FbUser = require('../models/User')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const register = async(req, res) => {
    try {
        //genetate new password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = await FbUser({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        })
        const user = newUser.save()
        console.log('Successfully data sent')
        res.status(200).json({
            msg: "Successfully data sent..."
        })
    } catch (error) {
        console.log(error)
    }
}

const showData = async(req, res) => {
    try {
        const allData = await FbUser.find({}).sort('-date');
        res.json(allData)
        res.send(allData)
    } catch (error) {
        res.json(error)
    }
}

const login = async(req, res) => {
    try {
        const user = await FbUser.findOne({ email: req.body.email})
        !user && res.status(404).json('Please Enter your valid email')

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(404).json('Wrong Password')

        res.status(200).json(user)
    } catch (error) {
        res.json(error)
    }
}

module.exports = register;
module.exports = showData;
module.exports = login;