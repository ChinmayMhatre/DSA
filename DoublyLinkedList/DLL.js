
class Node {
    constructor(value,prev,next){
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.length = 0
    }

    insertAtHead(value){
        const newNode = new Node(value,null,this.head)
        if(this.head){
            this.head.prev = newNode
        }
        this.head = newNode
        this.length++
    }

    ElementAtIndex(index){
        if(index < 0 || index > this.length){
            return null
        }
        let current = this.head
        for(let i = 0 ; i < index ; i++){
            current = current.next
        }
        return current
    }

    insertAtIndex(index,value){
        if(index < 0 || index > this.length){
            return null;
        }
        if(index === 0){
            return this.insertAtHead(value)
        }
        const oldNode = this.ElementAtIndex(index - 1)
        // console.log(oldNode)
        const newNode = new Node(value,oldNode,oldNode.next) 
        oldNode.next.prev = newNode
        oldNode.next = newNode
        this.length++
    }

}

DoublyLinkedList.fromValues = (...values)=>{
    const ll = new DoublyLinkedList()
    for (let i = values.length - 1; i >= 0 ; i--) {
        ll.insertAtHead(values[i]);
        
    }
    return ll
}



module.exports = DoublyLinkedList