import axios from "axios";

export default {
    // Gets all saved jobs
    getSavedJobs: function(userId) {
        return axios.get(`/api/jobs?user=${userId}`);
    },

    saveJob: function(job) {
        return axios.post("/api/jobs", job);
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
            const query = `/api/search?${descriptionQuery}${locationQuery}`;
            return axios.get(query);
        } else if (jobBoard === 'li') {
            const categoryQuery = title ? `category=${title}` : '';
            const locationQuery = location ? `&location=${location}` : '';
            const query = `/api/search/muse?${categoryQuery}${locationQuery}`;
            return axios.get(query);
        }
    },
}