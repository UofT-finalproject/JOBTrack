// To get import statments working see reply from
// Natan Williams to this stackoverflow post:
// https://stackoverflow.com/questions/58613492/how-to-resolve-cannot-use-import-statement-outside-a-module-in-jest
import API from '../utils/API';
import axios from 'axios';

jest.mock('axios');

// Code adapted from: https://jestjs.io/docs/mock-functions
describe('Unit-tests for searchJobs()', () => {
    it('Test searchJobs() with Muse API', () => {
        const museJob = [{ timed_out: true }];
        const resp = { data: museJob };
        // use mocked axios module to return fake data
        axios.get.mockResolvedValue(resp);
        return API.searchJobs('Software Engineer', 'Toronto, Canada', 'li')
            .then(res => {
                expect(res.data).toEqual(museJob);
            })
    });
    it('Test searchJobs() with Muse API', () => {
        const ghJob = [{ id: 'abc-123' }];
        const resp = { data: ghJob };
        // use mocked axios module to return fake data
        axios.get.mockResolvedValue(resp);
        return API.searchJobs('Developer', 'Toronto', 'gh')
            .then(res => {
                expect(res.data).toEqual(ghJob);
            })
    });
});