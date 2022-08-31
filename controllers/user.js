const { response: res, request: req } = require('express');


const usuariosGet = (req, res) => {

    const { page = 1 , limit = 10 } = req.query;

    res.status(403).json({
        msg: 'get API - controlador',
        list: {
            page: Number(page),
            limit: Number(limit)
        }
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.status(403).json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.status(403).json({
        msg: 'put API - controlador',
        id: Number(id)
    });
}

const usuariosDelete= (req, res) => {
    res.status(403).json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}