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

    append(value) {
        this.HEAD = new Node(value, this.HEAD);
    }
}
