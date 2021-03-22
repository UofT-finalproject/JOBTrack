const axios = require('axios');

// Defining methods for the searchController
module.exports = {
    findAll: function(req, res) {
        // console.log('params here:',req.query);
        const { description, location } = req.query;
        const descriptionQuery = description ? `description=${description}` : '';
        const locationQuery = location ? `&location=${location}` : '';
        const query = `https://jobs.github.com/positions.json?${descriptionQuery}${locationQuery}`;
        // console.log('server:' , query);
        axios.get(query)
            .then(result => {
                res.json(result.data)
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    },
    findAllMuse: function(req, res) {
        // console.log('params here:',req.query);
        const { category, location } = req.query;
        const categoryQuery = category ? `category=${category}` : '';
        const locationQuery = location ? `&location=${location}` : '';
        const query = `https://www.themuse.com/api/public/jobs?page=1&${categoryQuery}${locationQuery}`;
        // console.log('server:' , query);
        axios.get(query)
            .then(result => {
                res.json(result.data)
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    },
};