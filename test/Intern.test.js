const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create an intern object with name, id, email, school', () => {
        const intern = new Intern('Carol', 12, '123@test.com', 'UW');
        expect(intern.school).toEqual('UW');
    });

    describe('getRole', () => {
        it('should return the role as Intern', () => {
            const intern = new Intern('Carol', 12, '123@test.com', 'UW');
            expect(intern.getRole()).toEqual('Intern');
        });      
    });

    describe('getSchool', () => {
        it('should return the school of the intern', () => {
            const intern = new Intern('Carol', 12, '123@test.com', 'UW');
            expect(intern.getSchool()).toEqual(intern.school);
        });
    });
})