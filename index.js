import { Node, LinkedList } from "./classes.js";

const exampleList = {
    value: 1,
    nextNode: {
        value: 2,
        nextNode: {
            value: 3,
            nextNode: null,
        },
    },
};
const linkedlist = new LinkedList();
linkedlist.HEAD = exampleList;

linkedlist.append(33);
console.log(linkedlist);
