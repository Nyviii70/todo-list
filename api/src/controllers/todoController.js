const asyncHandler = require('express-async-handler');
const models = require('../database/models');

const getLists = asyncHandler(async (req, res) => {
    try
    {
        const lists = await models.Lists.findAll({
            include: [
                {
                    model: models.Icons,
                    as: "Icons"
                },
                {
                    model: models.Colors,
                    as: "Colors"
                }
            ]
          });        
        return res.status(200).json({data: lists});
    }
    catch(error)
    {
        return res.status(500).json({ error: error.message});
    }    
});

const getListById = asyncHandler(async (req, res) => {
    try
    {
        const { listId } = req.params;
        const list = await models.Lists.findOne({
            where: { id: listId },
            include: [
                {
                    model: models.Todos,
                    as: "Todos"
                },
                {
                    model: models.Icons,
                    as: "Icons"
                },
                {
                    model: models.Colors,
                    as: "Colors"
                }
            ]
            });

            if (list) {
                return res.status(200).json({ data: list });
            }
            return res.status(404).json(`List [ ${listId} ] don't exists`);
        }
        catch(error){
            return res.status(500).json({ error: error.message });
        }
});

const addList = asyncHandler (async (req, res) => {
    try
    {
        const list = await models.Lists.create(req.body);
        return res.status(201).json( { list });
    }
    catch(error)
    {
        return res.status(500).json({ error: error.message});
    }
});

module.exports = {
    getLists,
    getListById,
    addList
};