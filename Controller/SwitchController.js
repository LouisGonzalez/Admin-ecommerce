var { Switch } = require('../Db');
const { Sequelize, Op } = require('sequelize');

//busca el controlador mediante el id
const findOne = async(req, res) => {
    try {
        const sw = await Switch.findOne({
            where: { id: req.params.id }
        })
        if(sw === null){
            return res.status(500).json({ error: "It has not been found " });
        } else {
            return res.status(200).json({ sw });
        }
    } catch(error){
        return res.status(500).send(error.message);
    }
}

//Crea un controlador
const create = async(req, res) => {
    try{
        const sw = await Switch.create({
            status: req.body.status
        });
        return res.status(200).json({ sw });
    } catch(error){
        return res.status(500).send(error.message);
    }
}

//Edita un controlador
const update = async(req, res) => {
    try {
        const sw = await Switch.update(req.body, {
            where: { id: req.params.id }
        })
        return res.status(200).json({ success: "Has been modified" });
    } catch(error){
        return res.status(500).send(error.message);
    }
}

module.exports = {
    findOne,
    create,
    update
}