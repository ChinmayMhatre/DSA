const LinkedList = require("./LinkedList")

describe('#insertStart', () => {
    test('should insert element at start', () => {
        const ll = new LinkedList()
        ll.insertStart(10)
        const oldHead = ll.head
        ll.insertStart(20)
        expect(ll.head.value).toBe(20)
        expect(oldHead.value).toBe(10)
    })
    
})

describe("#getByIndex",()=>{
    describe("when index is less than 0",()=>{
        test("it returns null",()=>{
            const ll = LinkedList.fromValues(10,20)
            expect(ll.getByIndex(-1)).toBeNull()
        })
    })
    describe("when index is greater than length",()=>{
        test("it returns null",()=>{
            const ll = LinkedList.fromValues(10,20)
            expect(ll.getByIndex(5)).toBeNull()
        })
    })
    describe("with index 0",()=>{
        test("returns head",()=>{
            const ll = LinkedList.fromValues(10,20)
            expect(ll.getByIndex(0).value).toBe(10)
        })
    })
    describe("with index in the middle",()=>{
        test("returns that element",()=>{
            const ll = LinkedList.fromValues(10,20,30,40)
            expect(ll.getByIndex(2).value).toBe(30)
        })
    })
})

describe('#insertAtIndex', () => {
    describe('when index is less than 0', () => {
        test('does not insert any value', () => {
            const ll = LinkedList.fromValues(10,20,30)
            ll.insertAtIndex(-1,15)
            expect(ll.length).toBe(3)
        });
    });
    describe('when index is greater than length', () => {
        test('does not insert any value', () => {
            const ll = LinkedList.fromValues(10,20,30)
            ll.insertAtIndex(5,15)
            expect(ll.length).toBe(3)
        });
    });
    describe('when index is 0', () => {
        test('should insert at head', () => {
            const ll = LinkedList.fromValues(10,20,30)
            ll.insertAtIndex(0,15)
            expect(ll.head.value).toBe(15)
            expect(ll.head.next.value).toBe(10)
            expect(ll.length).toBe(4)
        });
    });

    describe('when index is in the middle', () => {
        test('should return that element', () => {
            const ll = LinkedList.fromValues(10,20,30)
            ll.insertAtIndex(2,15)
            expect(ll.getByIndex(2).value).toBe(15)
            expect(ll.getByIndex(2).next.value).toBe(30)
        });
    });
   
});

describe('#removeHead', () => {
    test('should remove head element', () => {
        const ll = LinkedList.fromValues(10,20,30,40)
        ll.removeHead()
        expect(ll.head.value).toBe(20)
        expect(ll.head.next.value).toBe(30)
    });
});

describe('#removeAtIndex', () => {
    describe('If Index is less than 0', () => {
        test('should not remove anything', () => {
            const ll = LinkedList.fromValues(10,20,30,40)
            ll.removeAtIndex(-1)
            expect(ll.length).toBe(4) 
        });
        
    });
    describe('If Index is greater than length', () => {
        test('should not remove anything', () => {
            const ll = LinkedList.fromValues(10,20,30,40)
            ll.removeAtIndex(5)
            expect(ll.length).toBe(4)
        });  
    });
    describe('remove at index 0', () => {
        test('should remove head', () => {
            const ll = LinkedList.fromValues(10,20,30,40)
            ll.removeAtIndex(0)
            expect(ll.head.value).toBe(20)
            expect(ll.length).toBe(3)
        });
        
    });
    describe('remove at index in the middle', () => {
        test('should remove element at the index', () => {
            const ll = LinkedList.fromValues(10,20,30,40)
            ll.removeAtIndex(2)
            expect(ll.getByIndex(2).value).toBe(40)
            expect(ll.length).toBe(3)
        });
        
    });
});

describe('#iterativeReverse', () => {
    test('should reverse the linked list', () => {
        const ll = LinkedList.fromValues(10,20,30,40,50)
        ll.iterativeReverse()
        expect(ll.printList()).toBe(" 50 => 40 => 30 => 20 => 10 => null")
    });
});
