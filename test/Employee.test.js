const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should create an employee object with name, id, and email', () => {
        const employee = new Employee('Carol', 12, '123@test.com');

        expect(employee.name).toEqual('Carol');
        expect(employee.id).toEqual(12);
        expect(employee.email).toEqual('123@test.com');
    });

    describe('getName', () => {
        it('should return the name of the employee', () => {
            const employee = new Employee('Carol', 12, '123@test.com');
            expect(employee.getName()).toEqual(employee.name);          
        })
    });

    describe('getId', () => {
        it('should return the id of the employee', () => {
            const employee = new Employee('Carol', 12, '123@test.com');
            expect(employee.getId()).toEqual(employee.id);                        
        })
    });

    describe('getEmail', () => {
        it('should return the email of the employee', () => {
            const employee = new Employee('Carol', 12, '123@test.com');
            expect(employee.getEmail()).toEqual(employee.email);
        })
    });
    
    describe('getRole', () => {
        it('should return role as Employee', () => {
            const employee = new Employee('Carol', 12, '123@test.com');
            expect(employee.getRole()).toEqual('Employee');
        })
    });
})