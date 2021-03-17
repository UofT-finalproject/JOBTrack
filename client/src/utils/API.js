import axios from "axios";

export default {
    // Gets all saved jobs
  getSavedJobs: function() {
    return axios.get("/api/jobs");
  },
}