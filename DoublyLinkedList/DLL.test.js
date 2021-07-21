const DoublyLinkedList = require('./DLL')

describe('#insertAtHead', () => {
    test('should insert at head', () => {
        const ll = new DoublyLinkedList()
        ll.insertAtHead(10)
        expect(ll.head.value).toBe(10)
        expect(ll.length).toBe(1)
    });
});

describe('#ElementAtIndex', () => {
    describe('Index is less than 0', () => {
        test('should return null', () => {
            const ll = DoublyLinkedList.fromValues(10,20,30)
            expect(ll.ElementAtIndex(-1)).toBeNull
        });
    });
    describe('Index is greater than length', () => {
        test('should return null', () => {
            const ll = DoublyLinkedList.fromValues(10,20,30)
            expect(ll.ElementAtIndex(5)).toBeNull
        });
    });
    describe('Index is 0', () => {
        test('should return head', () => {
            const ll = DoublyLinkedList.fromValues(10,20,30)
            expect(ll.ElementAtIndex(0).value).toBe(10)
        });
    });
    describe('index in the middle', () => {
        test('should return that element', () => {
            const ll = DoublyLinkedList.fromValues(10,20,30)
            expect(ll.ElementAtIndex(1).value).toBe(20)
        });
    });
    
});

describe('#insertAtIndex', () => {
    describe('index is less than 0', () => {
        test('should not insert any element', () => {
            const ll = DoublyLinkedList.fromValues(10,20,30)
            ll.insertAtIndex(-1,12)
            expect(ll.length).toBe(3)
        });
    });
    describe('index is greater than length', () => {
        test('should not insert any element', () => {
            const ll = DoublyLinkedList.fromValues(10,20,30)
            ll.insertAtIndex(5,12)
            expect(ll.length).toBe(3)
        });
    });
    describe('index at 0', () => {
        test('should insert at head', () => {
            const ll = DoublyLinkedList.fromValues(10,20,30)
            ll.insertAtIndex(0,15)
            expect(ll.ElementAtIndex(0).value).toBe(15)
            expect(ll.head.value).toBe(15)
            expect(ll.length).toBe(4)
        });
    });
    describe('index in the middle', () => {
        test('should insert that element', () => {
            const ll = DoublyLinkedList.fromValues(10,20,30)
            ll.insertAtIndex(1,15)
            expect(ll.ElementAtIndex(1).value).toBe(15)
            expect(ll.ElementAtIndex(1).prev.value).toBe(10)
            expect(ll.ElementAtIndex(1).next.value).toBe(20)
            expect(ll.length).toBe(4)
        });
    });
});