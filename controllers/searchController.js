const axios = require('axios');

// Defining methods for the searchController
module.exports = {
  findAll: function(req, res) {
    console.log('params here:',req.query);
    const { description, location } = req.query;
    const descriptionQuery = description ? `description=${description}`: '';
    const locationQuery = location ? `&location=${location}` : '';
    const query = `https://jobs.github.com/positions.json?${descriptionQuery}${locationQuery}`;
    console.log('server:' , query);
    axios.get(query)
    .then(result => {
      res.json(result.data)
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err)});
  },
  // findById: function(req, res) {
  //   db.Job
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

};
