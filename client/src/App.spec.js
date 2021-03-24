// To get import statments working see reply from
// Natan Williams to this stackoverflow post:
// https://stackoverflow.com/questions/58613492/how-to-resolve-cannot-use-import-statement-outside-a-module-in-jest
import API from './utils/API';

describe('test searchJobs with The Muse API', () => {
    it('Check for time-out', () => {
        API.searchJobs('Software Engineer', 'Toronto', 'li')
            .then(res => {
                expect(res.data.timed_out).toBeFalsy();
            })
    });
});