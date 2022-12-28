import { Node, LinkedList } from "./classes.js";

const linkedlist = new LinkedList(1);

linkedlist.append(2);
linkedlist.append(33);
linkedlist.append(33);
console.log(linkedlist.toString());
linkedlist.pop();
console.log(linkedlist.toString());
