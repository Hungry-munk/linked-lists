export class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor(HEAD = null) {
        this.HEAD = new Node();
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

    contains(value) {
        let currentNode = this.HEAD;
        while (currentNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }



    get size() {
        let depthCount = 1;
        let currentNode = this.HEAD;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
            depthCount++;
        }
        return depthCount;
    }

    get head() {
        return this.HEAD;
    }

    get tail() {
        let currentNode = this.HEAD;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }
}
