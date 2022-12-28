export class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor(headValue) {
        this.HEAD = new Node(headValue);
    }

    prepend(value) {
        this.HEAD = new Node(value, this.HEAD);
    }

    append(value) {
        let currentNode = this.HEAD;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node(value);
    }

    contains(value) {
        let currentNode = this.HEAD;
        while (currentNode) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    pop() {
        let currentNode = this.HEAD;
        let previousNode = this.HEAD;
        while (currentNode.nextNode) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        if (currentNode == this.HEAD) {
            this.HEAD.value = null;
        } else {
            previousNode.nextNode = null;
        }
    }

    find(value) {
        let currentNode = this.HEAD;
        let depthCount = 0;
        while (currentNode) {
            if (currentNode.value === value) return depthCount;
            currentNode = currentNode.nextNode;
            depthCount++;
        }
        return null;
    }

    toString() {
        let currentNode = this.HEAD;
        let string = `( ${currentNode.value} )`;
        currentNode = currentNode.nextNode;
        while (currentNode) {
            string += ` -> ( ${currentNode.value} )`;
            if (!currentNode.nextNode) {
                string += ` -> ${currentNode.nextNode}`;
            }
            currentNode = currentNode.nextNode;
        }
        return string;
    }

    insertAt(value, index) {
        let currentNode = this.HEAD;
        let previousNode = this.HEAD;
        let depthCount = 0;

        while (currentNode) {
            if (depthCount === index) {
                previousNode.nextNode = new Node(value, currentNode);
                return;
            }
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            depthCount++;
        }
        console.error(new Error("range error bro"));
    }

    removeAt(index) {
        let currentNode = this.HEAD;
        let previousNode = this.HEAD;
        let depthCount = 0;

        if (index === 0) {
            if (currentNode.nextNode) {
                this.HEAD = this.HEAD.nextNode;
            } else {
                this.HEAD.value = null;
                this.HEAD.nextNode = null;
            }
            return;
        }

        while (currentNode) {
            if (depthCount === index) {
                previousNode.nextNode = currentNode.nextNode;
                return;
            }
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            depthCount++;
        }
        console.error(new Error("range error bro"));
    }

    get size() {
        let depthCount = 0;
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
