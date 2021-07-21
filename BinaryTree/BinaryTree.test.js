const {BinaryTree,Node,invertTree, levelOrderTraversal} = require("./BinaryTree")

let tree = new BinaryTree(1)
tree.root.left=new Node(2)
tree.root.left.left= new Node(3)
tree.root.left.left.left= new Node(7)
tree.root.left.right= new Node(5)
tree.root.right= new Node(4)
tree.root.right.left= new Node(6)

describe('#traversal', () => {
    describe('#preorder', () => {
        test('should print 1-2-3-7-5-4-6-', () => {
            expect(tree.traversal("preorder")).toBe("1 - 2 - 3 - 7 - 5 - 4 - 6 - ")
        });
    });
    describe('#inorder', () => {
        test('should print 7 - 3 - 2 - 5 - 1 - 6 - 4 - ', () => {
            expect(tree.traversal("inorder")).toBe("7 - 3 - 2 - 5 - 1 - 6 - 4 - ")
        });
    });
    describe('#postorder', () => {
        test('should print 7 - 3 - 5 - 2 - 6 - 4 - 1 - ', () => {
            expect(tree.traversal("postorder")).toBe("7 - 3 - 5 - 2 - 6 - 4 - 1 - ")
        });
    });
});

describe('#invertTree', () => {
    test('should invert tree', () => {
        invertTree(tree.root);
        expect(tree.traversal("preorder")).toBe("1 - 4 - 6 - 2 - 5 - 3 - 7 - ")
        expect(tree.traversal("inorder")).toBe("4 - 6 - 1 - 5 - 2 - 3 - 7 - ")
        expect(tree.traversal("postorder")).toBe("6 - 4 - 5 - 7 - 3 - 2 - 1 - ")
    });
});

describe('#levelOrderTraversal', () => {
    test('should print 1 - 2 - 4 - 3 - 5 - 6 - 7 - ', () => {
        expect(levelOrderTraversal(tree.root,"")).toBe("1 - 2 - 4 - 3 - 5 - 6 - 7 - ")
    });
});