const {BinaryTree,Node, invertTree,levelOrderTraversal} = require("./BinaryTree")

let tree = new BinaryTree(1)
tree.root.left=new Node(2)
tree.root.left.left= new Node(3)
tree.root.left.left.left= new Node(7)
tree.root.left.right= new Node(5)
tree.root.right= new Node(4)
tree.root.right.left= new Node(6)


levelOrderTraversal(tree.root)
// console.log(tree.traversal("preorder"));