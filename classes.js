export class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor(HEAD = null) {
        this.HEAD = HEAD;
    }

    prepend(value) {
        this.HEAD = new Node(value, this.HEAD);
    }

    append(value) {
        let currentNode = this.HEAD;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node(value);
    }
}
