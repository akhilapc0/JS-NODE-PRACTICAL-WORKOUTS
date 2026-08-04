
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}

function isFulltree(root){
    if(root===null){
        return true
    }
    if(root.left===null && root.right===null){
        return true
    }
    if(root.left !==null && root.right!==null){
        return isFulltree(root.left) && isFulltree(root.right)
    }
    return false
}

let root=new Node(1)
root.left=new Node(2)
root.right=new Node(3)
root.left.left=new Node(4)
root.left.right=new Node(5)
root.right.left=new Node(6)
root.right.right=new Node(7)
console.log(isFulltree(root))