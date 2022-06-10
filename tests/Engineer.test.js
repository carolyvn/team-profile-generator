const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should create an engineer object with name, id, email, github', () => {
        const enginner = new Engineer('Carol', 12, '123@test.com', 'carolyvn');
        // expect(enginner.name).toEqual('Carol');
        expect(enginner.github).toEqual('carolyvn');
    });

    describe('getRole', () => {
        it('should return the role as Engineer', () => {
            const enginner = new Engineer('Carol', 12, '123@test.com', 'carolyvn');
            expect(enginner.getRole()).toEqual('Engineer');
        });     
    });
    
    describe('getGithub', () => {
        it('should return the github name of the engineer', () => {
            const enginner = new Engineer('Carol', 12, '123@test.com', 'carolyvn');
            expect(enginner.getGithub()).toEqual(enginner.github);
        });
    });
})