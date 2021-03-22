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

    deleteJob: function(id) {
        return axios.delete(`/api/jobs/${id}`);
    },

  deleteJob: function(id) {
    return axios.delete(`/api/jobs/${id}`);
  },

  updateJob: function(id, job) {
    return axios.put(`/api/jobs/${id}`, job);
  },
   
    searchJobs: function(title, location, jobBoard) {
        if (jobBoard === 'gh') {
            const descriptionQuery = title ? `description=${title}` : '';
            const locationQuery = location ? `&location=${location}` : '';
            const query = `${BASE_API_URL}/api/search?${descriptionQuery}${locationQuery}`;
            console.log(query);
            return axios.get(query);
        } else if (jobBoard === 'li') {
            const categoryQuery = title ? `category=${title}` : '';
            const locationQuery = location ? `&location=${location}` : '';
            const query = `${BASE_API_URL}/api/search/muse?${categoryQuery}${locationQuery}`;
            console.log(query);
            return axios.get(query);
        }
    },
}