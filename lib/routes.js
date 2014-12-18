var Joi = require('joi');

var radiosHandler = {

    description: 'Returns all listed Radios',

    handler: function(req, res) {

        res('ALL THE THINGS!!!');
    }
}

var radioGetHandler = {

    description: 'Get an individual radio by ID',

    validate: {
        params: {
            radioId: Joi.number().required().description('ID for the Radio to be returned')
        }
    },

    handler: function(req, res) {

       res(req.params.radioId);
    }
};

var radioPutHandler = function(req, res) {

    res('You\'re changing a radio! Huzzah!');
};

var readingPost = {
    description: 'Add a reading into your db.',
    validate: {
        params: {
            radioId: Joi.number().greater(5).required().description('radio ID'),
            sensorId: Joi.number().greater(0).required().description('sensor ID')
        },
        payload: {
            reading: Joi.string().alphanum().required()
        }
    },
    handler: function(req, res) {
        res('huzzah!');
    }
};

module.exports = [
    {
        path: '/radios',
        method: 'GET',
        config: radiosHandler
    },
    {
        path: '/radio/{radioId}',
        method: 'GET',
        config: radioGetHandler
    },
    {
        path: '/radio/{radioId}',
        method: 'PUT',
        handler: radioPutHandler
    },
    {
        path: '/radio/{radioId}/sensor/{sensorId}/reading',
        method: 'POST',
        config: readingPost
    }
];
