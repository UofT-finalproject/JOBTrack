import axios from "axios";
const BASE_API_URL = 'http://localhost:3000';

export default {
    // Gets all saved jobs
  getSavedJobs: function() {
    return axios.get("/api/jobs");
  },

  saveJob: function(job) {
    return axios.post("/api/jobs", job);
  },

  searchJobs: function(title, location) {
    const descriptionQuery = title ? `description=${title}`: '';
    const locationQuery = location ? `&location=${location}` : '';
    const query = `${BASE_API_URL}/api/search?${descriptionQuery}${locationQuery}`;
    console.log(query);
    return axios.get(query);
  },
}