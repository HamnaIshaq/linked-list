console.log("linked list script");

// Linked List Class
class linkedList {
  constructor(value) {
    this.linkedList = new Node(value);
  }

  prepend(value) {
    this.linkedList.value = value;
  }

  append(value) {
    const tail = this.tail();
    tail.nextNode = new Node(value);
  }

  head() {
    return this.linkedList;
  }

  // recursively find the tail of the linked list
  tail(linkedList = this.linkedList) {
    if (linkedList.nextNode === null) {
      return linkedList;
    } else {
      return this.tail(linkedList.nextNode);
    }
  }

  // total number of nodes
  size(linkedList = this.linkedList, size = 0) {
    if (linkedList.nextNode === null) {
      size++;
      return size;
    } else {
      size++;
      return this.size(linkedList.nextNode, size);
    }
  }

  at(index, linkedList = this.linkedList, currentIndex = 0) {
    if (index === currentIndex) {
      return linkedList;
    } else if (linkedList.nextNode === null && index !== currentIndex) {
      return `Node at index ${index} does not exist`;
    } else {
      currentIndex++;
      return this.at(index, linkedList.nextNode, currentIndex);
    }
  }

  // remove last element from list
  pop(linkedList = this.linkedList) {
    if (linkedList.nextNode.nextNode === null) {
      linkedList.nextNode = null;
      return linkedList;
    } else {
      return this.pop(linkedList.nextNode);
    }
  }

  // remove first element from list
  shift() {
    const newHeadLinkedList = this.linkedList.nextNode;
    this.linkedList = newHeadLinkedList;
    return this.linkedList;
  }

  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value, linkedList = this.linkedList) {
    if (linkedList.value === value) {
      return true;
    } else if (linkedList.nextNode === null && linkedList.value !== value) {
      return `${value} is not present in the linked list`;
    } else {
      return this.contains(value, linkedList.nextNode);
    }
  }

  //returns the index of the node containing value, or null if not found.
  find(value, linkedList = this.linkedList, currentIndex = 0) {
    if (linkedList.value === value) {
      return currentIndex;
    } else if (linkedList.nextNode === null && linkedList.value !== value) {
      return `${value} is not present in the linked list`;
    } else {
      currentIndex++;
      return this.find(value, linkedList.nextNode, currentIndex);
    }
  }

  //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString(list = "", linkedList = this.linkedList) {
    if (linkedList.nextNode === null) {
      list += `(${linkedList.value}) -> null`;
      return list;
    } else {
      list += `(${linkedList.value}) -> `;
      return this.toString(list, linkedList.nextNode);
    }
  }

  // remove head node
  removeHead() {
    let newHead = this.linkedList.nextNode;
    this.linkedList = newHead;
  }

  // remove node at index from linked list
  removeAt(index) {
    let currentIndex = 0;
    let linkedList = this.linkedList;

    if (index !== 1) {
      while (index - currentIndex !== 1) {
        linkedList = linkedList.nextNode;
        currentIndex++;
      }
    }

    let nodeToRemove = linkedList.nextNode;
    if (nodeToRemove.nextNode !== null) {
      linkedList.nextNode = nodeToRemove.nextNode;
      index === 1
        ? (this.linkedList = linkedList)
        : (this.linkedList.nextNode = linkedList);
      return;
    }

    linkedList.nextNode = null;
    index === 1
      ? (this.linkedList = linkedList)
      : (this.linkedList.nextNode = linkedList);
  }
}

// Node Class
class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

const ll = new linkedList("value");
ll.append("A");
ll.append("B");
ll.append("C");
ll.prepend("HEAD");
//ll.tail();

console.log(ll);

//console.log(ll.size());
//console.log(ll.head());
console.log(ll.toString());

ll.removeAt(3);

//ll.removeHead()

console.log(ll.toString());

//console.log(ll.insertAt("D", 2));

//console.log(ll.shift());
