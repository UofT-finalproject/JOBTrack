import API from '../utils/API';
import axios from 'axios';

jest.mock('axios');

// Code adapted from: https://jestjs.io/docs/mock-functions
describe('Unit-tests for client API calls', () => {
    it('Test axios.get() in searchJobs() with Muse API', () => {
        const museJob = [{ timed_out: true }];
        const resp = { data: museJob };
        // use mock'd axios module to return fake data
        axios.get.mockResolvedValue(resp);
        return API.searchJobs('Software Engineer', 'Toronto, Canada', 'li')
            .then(res => {
                const query = `/api/search/muse?category=Software Engineer&location=Toronto, Canada`;
                // Validate URL passed to AXIOS
                expect(axios.get).toHaveBeenCalledWith(
                    query,
                );
                // Check that fake data is returned 
                expect(res.data).toEqual(museJob);
            })
    });
    it('Test axios.get() in searchJobs() with GitHub API', () => {
        const ghJob = [{ id: 'abc-123' }];
        const resp = { data: ghJob };
        // use mock'd axios module to return fake data
        axios.get.mockResolvedValue(resp);
        return API.searchJobs('Developer', 'Toronto', 'gh')
            .then(res => {
                const query = `/api/search?description=Developer&location=Toronto`;
                // Validate URL passed to AXIOS
                expect(axios.get).toHaveBeenCalledWith(
                    query,
                );
                // Check that fake data is returned 
                expect(res.data).toEqual(ghJob);
            })
    });
    it('Test axios.get() in getSavedJobs()', () => {
        const userId = 'user123';
        const resp = {};
        // use mock'd axios module to return empty data
        axios.get.mockResolvedValue(resp);
        return API.getSavedJobs(userId)
            .then(res => {
                // Validate route passed to AXIOS
                expect(axios.get).toHaveBeenCalledWith('/api/jobs?user=user123');
            })
    });
    it('Test axios.delete() in deleteJob()', () => {
        const jobId = 'software_engineer123';
        const resp = {};
        // use mock'd axios module to return empty data
        axios.delete.mockResolvedValue(resp);
        return API.deleteJob(jobId)
            .then(res => {
                // Validate route passed to AXIOS
                expect(axios.delete).toHaveBeenCalledWith('/api/jobs/software_engineer123');
            })
    });
    it('Test axios.post() in saveJob()', () => {
        const job = { name: 'software engineer', company: 'google' };
        const resp = {};
        // use mock'd axios module to return empty data
        axios.post.mockResolvedValue(resp);
        return API.saveJob(job)
            .then(res => {
                // Validate route passed to AXIOS
                expect(axios.post).toHaveBeenCalledWith('/api/jobs', { name: 'software engineer', company: 'google' });
            })
    });
});