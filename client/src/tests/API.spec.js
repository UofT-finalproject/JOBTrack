// To get import statments working see reply from
// Natan Williams to this stackoverflow post:
// https://stackoverflow.com/questions/58613492/how-to-resolve-cannot-use-import-statement-outside-a-module-in-jest
import API from '../utils/API';

describe('test searchJobs with The Muse API', () => {
    it('Check for time-out', () => {
        return API.searchJobs('Software Engineer', 'Toronto, Canada', 'li')
            .then(res => {
                expect(res.data.timed_out).toBeFalsy();
            })
    });
});

describe('test searchJobs with GitHub API', () => {
    it('Check for time-out', () => {
        return API.searchJobs('Software Engineer', 'San Francisco', 'gh')
            .then(res => {
                res.data.forEach((job) => {
                    const pattern = /\D/g;
                    // check if ID returned is alpha-numeric
                    expect(pattern.test(job.id)).toBeTruthy();
                })
            })
    });
});