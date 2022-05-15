const modelOrders = require('../models/Orden');
const express = require('express');


exports.addOrder = async (request, response) => {
    try {
        const results = await modelOrders.Orden.create(request.body);
        response.status(201).json(results);
    } catch (error) {
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }
};

exports.updateOrder = async (request, response) => {
    try {
        const results = await modelOrders.Orden.update(request.body, {
            where: {
                idOrden: request.params.id
            }
        });
        response.status(201).json(results);
    } catch (error) {
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }
};

exports.deleteOrder = async (request, response) => {
    try {
        const results = await modelOrders.Orden.destroy({
            where: {
                idOrden: request.params.id
            }
        });
        response.status(201).json(results);
    } catch (error) {
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }

};

exports.getOrders = async (request, response) => {
    try {
        const results = await modelOrders.Orden.findAll();
        response.status(201).json(results);
    } catch (error) {
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }

};