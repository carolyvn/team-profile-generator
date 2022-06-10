const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should create a manager object with name, id, email, office number', () => {
        const manager = new Manager('Carol', 12, '123@test.com', 7);
        expect(manager.officeNumber).toEqual(7);
    })

    describe('getRole', () => {
        it('should return the role as Manager', () => {
            const manager = new Manager('Carol', 12, '123@test.com', 4);
            expect(manager.getRole()).toEqual('Manager');           
        });      
    });

    describe('getOfficeNumber', () => {
        it('should return the office number of the manager', () => {
            const manager = new Manager('Carol', 12, '123@test.com', 4);
            expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
        });
    });
})