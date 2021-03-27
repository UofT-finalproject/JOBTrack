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

    uploadFile: function initUpload(file){
        return new Promise( (resolve, reject) => {
            // const files = document.getElementById('file-input').files;
        // const file = files[0];
        // Function to carry out the actual PUT request to S3 using the signed request from the app.
        function uploadFile(file, signedRequest, url){
            const xhr = new XMLHttpRequest();
            xhr.open('PUT', signedRequest);
            xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    console.log('uploading file...');
                }
                else{
                alert('Could not upload file.');
                }
            }
            };
            xhr.send(file);
        }
        
        // Function to get the temporary signed request from the app.
        // If request successful, continue to upload the file using this signed
        // request.
        function getSignedRequest(file){
            console.log('sending request to server')
            const xhr = new XMLHttpRequest();
            const fileName = encodeURIComponent(file.name);
            const fileType = encodeURIComponent(file.type)
            xhr.open('GET', `/api/upload?file-name=${fileName}&file-type=${fileType}`);
            xhr.onreadystatechange = () => {
              if(xhr.readyState === 4){
                if(xhr.status === 200){
                  const response = JSON.parse(xhr.responseText);
                  uploadFile(file, response.signedRequest, response.url);
                  console.log('received url ', response.signedRequest, response.url)
                  resolve(response.url) 
                }
                else{
                  resolve('Could not get signed URL.');
                }
              }
            };
            xhr.send();
          }

        // Send request to upload file
        getSignedRequest(file);
    }
        )
    }    
}