var { Report } = require('../Db');
const { Sequelize, Op } = require('sequelize');
const { channel } = require('diagnostics_channel');

//lista todos los reportes
const showAll = async(req, res) => {
    try {
        const report = await Report.findAll();
        return res.status(200).json({ report });
    } catch(error){
        return res.status(500).send(error.message);
    }
}

//busca un reporte en especifico mediante el id
const findOne = async(req,res) => {
    try {
        const report = await Report.findOne({
            where: { id: req.params.id }
        })
        if(report === null){
            return res.status(500).json({ error: "It has not been found" });
        } else {
            return res.status(200).json({ report });
        }
    } catch(error){
        return res.status(500).send(error.message);
    }
}

//Crea un reporte
const create = async(req, res) => {
    try {
        const report = await Report.create({
            type: req.body.type,
            user: req.body.user,
            date: req.body.date,
            hour: req.body.hour,
            status: req.body.status
        });
        return res.status(200).json({ report });
    } catch(error){
        return res.status(500).send(error.message);
    }
}

//Edita un reporte previamente creado
const update = async(req, res) => {
    try {
        const report = await Report.update(req.body, {
            where: { id:req.params.id }
        })
        return res.status(200).json({ success: "Has been modified" });
    } catch(error){
        return res.status(500).send(error.message);
    }
}

//Elimina un reporte
const del = async(req, res) => {
    try {
        await Report.destroy({
            where: { id: req.params.id }
        }).then(x => {
            if(x === 1){
                return res.status(200).json({ success: "Report deleted succesfully" });
            } else {
                return res.status(500).json({ error: "A error has been ocurred" });
            }
        })
    } catch(error){
        return res.status(500).send(error.message);
    }
}

//Exportar
module.exports = {
    showAll,
    findOne,
    create,
    update,
    del
}