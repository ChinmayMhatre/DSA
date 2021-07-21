
class Node{
    constructor(val){
        this.val  = val
        this.left = this.right = null
    }
}

class BinaryTree{
    constructor(root){
        this.root = new Node(root)
        this.traversal = this.traversal.bind(this)
    }

    traversal(type){
        switch (type) {
            case "preorder":
                return this.preorder(this.root,"")
            case "inorder":
                return this.inorder(this.root,"")
            case "postorder":
                return this.postorder(this.root,"")
        
            default:
                break;
        }
    }

    preorder(start,traversal){
        if(start){
            traversal += String(start.val) + " - "
            traversal = this.preorder(start.left,traversal)
            traversal = this.preorder(start.right,traversal)
        }
            return traversal
        
    }

    inorder(start,traversal){
        if(start){
            traversal = this.inorder(start.left,traversal)
            traversal += String(start.val) + " - "
            traversal = this.inorder(start.right,traversal)
        }
            return traversal
        
    }

    postorder(start,traversal){
        if(start){
            traversal = this.postorder(start.left,traversal)
            traversal = this.postorder(start.right,traversal)
            traversal += String(start.val) + " - "
        }
            return traversal
        
    }


}

const invertTree = (node) => {
    if(!node){
        return
    }
    const temp = node.left
    node.left  = node.right
    node.right = temp
    invertTree(node.left)
    invertTree(node.right)
}

const levelOrderTraversal = (root,traversal)=>{

    let height = (node)=>{
        if(!node){
            return 0
        }else{
            l = height(node.left)
            r = height(node.right)

            if(l>r){
                return l+1
            }else{
                return r+1
            }
        }
    }

    let printLevel = (node , level) => {
        if (!node){
            return
        }
        if (level == 1){
            console.log(node.val)
        }else if(level > 1){
            printLevel(node.left, level-1)
            printLevel(node.right, level-1)
        }
    }


    let h = height(root)
    for (let i = 1; i <= h+1; i++) {
        traversal += printLevel(root, i)+" - "
    }

 return traversal
}

module.exports = {BinaryTree,Node,invertTree, levelOrderTraversal}