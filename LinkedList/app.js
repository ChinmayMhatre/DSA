const LinkedList = require("./LinkedList")
// import LinkedList from './LinkedList.js'

const ll = new LinkedList()
ll.insertStart(11)
ll.insertStart(12)
ll.insertStart(13)

ll.iterativeReverse()

console.log(ll.printList()) 
