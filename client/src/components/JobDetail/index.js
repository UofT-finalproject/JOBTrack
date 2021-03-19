import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

const AppContext = React.createContext("");

async function getJobById(id, token) {
  let response;
  try {
    response = await axiosInstance.get(`/api/jobs/${id}/`, tokenConfig(token));
  } catch (error) {
    response = error.response;
  }
  return response.data;
}

export default function JobDetail() {
  const [job, setJob] = useState(null);
  const { token } = useContext(AppContext);
  let { jobid } = useParams();

  useEffect(() => {
    async function getJob() {
      const APIresponse = await getJobById(jobid, token);
      const { success, job, error } = APIresponse;
      if (success) {
        setJob(job);
      } else if (error) {
        console.log("Error loading job by id");
      }
    }
    getJob();
  }, [jobid, token]);

  return (
    <div>
      {job ? (
        <div className="mx-10 flex flex-col items-center">
          <div className="flex flex-col space-y-5 p-5">
            <div className="flex-1 flex flex-row border-t border-b p-2 border-blue-300 shadow">
              <h2 className="flex-grow text-3xl text-center font-playfair">
                {job.title}
              </h2>
            </div>
            <p className="flex-1 shadow border-t border-b border-blue-300 p-5">
              {job.description}
            </p>
            <div className="flex-1 flex flex-row border-t border-b px-4 py-2 border-blue-300 justify-between shadow">
              <p className="flex-1 text-left">{job.employer}</p>
              <p className="flex-1 text-right">
                {job.city}, {job.state}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
