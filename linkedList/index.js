console.log("linked list script");

// Linked List Class
class linkedList {
  constructor(value) {
    this.linkedList = new Node(value);
  }

  prepend(value) {
    let newNodeToPrepend = new Node(value);
    console.log(newNodeToPrepend.nextNode);
    newNodeToPrepend.nextNode = this.linkedList;
    console.log(newNodeToPrepend, this.linkedList);
    this.linkedList = newNodeToPrepend;
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
    const size = this.size();
    let currentIndex = 0;
    let linkedList = this.linkedList;

    if (index > size) {
      console.log("the lined list size is ", size);
      return;
    }

    if (index === 1) {
      console.log("ajj");
    }

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

  // insert a new node with the provided value at the given index
  insertAt(value, index) {
    const size = this.size();
    let currentIndex = 0;
    let linkedList = this.linkedList;
    let newNodeToInsert = new Node(value);

    if (index > size) {
      const lastNode = this.tail();
      lastNode.nextNode = newNodeToInsert;
      return;
    }

    if (index === 0) {
      newNodeToInsert.nextNode = linkedList;
      this.linkedList = newNodeToInsert;
      return;
    }

    if (index !== 1) {
      while (index - currentIndex !== 1) {
        linkedList = linkedList.nextNode;
        currentIndex++;
      }
    }

    let tempNode = linkedList.nextNode;
    linkedList.nextNode = newNodeToInsert;
    newNodeToInsert.nextNode = tempNode;

    if (tempNode.nextNode !== null) {
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

// Visualize linked list functionality on DOM

const newLinkedList = new linkedList("HEAD");

newLinkedList.append("A");
newLinkedList.append("B");
newLinkedList.append("C");
newLinkedList.removeAt(1);

const linkedListDiv = document.querySelector(".linked-list");
const linkedListSizeText = document.querySelector(".linked-list-size");
const linkedListHeadText = document.querySelector(".linked-list-head");
const linkedListTailText = document.querySelector(".linked-list-tail");
const linkedListFindNodeValueAtIndexText = document.querySelector(
  ".linked-list-find-node-value-at-index"
);
const linkedListContainsValueText = document.querySelector(
  ".linked-list-contains-value"
);

const appendValueBtn = document.querySelector(".append-node-btn");
const appendValueInput = document.querySelector(".append-node-value-input");
const prependValueBtn = document.querySelector(".prepend-node-btn");
const prependValueInput = document.querySelector(".prepend-node-value-input");
const findNodeAtBtn = document.querySelector(".find-node-at-btn");
const findNodeAtValueInput = document.querySelector(
  ".find-node-at-value-input"
);
const removeLastNodeBtn = document.querySelector(".remove-last-node-btn");
const containsValueBtn = document.querySelector(".contains-value-btn");
const containsValueInput = document.querySelector(".contains-value-input");
const insertNewNodeAtBtn = document.querySelector(".insert-new-node-at-btn");
const insertNewNodeValueInput = document.querySelector(
  ".insert-new-node-value-input"
);
const insertNewNodeIndexInput = document.querySelector(
  ".insert-new-node-index-input"
);
const removeAtNodeBtn = document.querySelector(".remove-node-at-btn");
const removeAtInput = document.querySelector(".remove-at-input");
linkedListData();

function linkedListData() {
  linkedListDiv.textContent = newLinkedList.toString();
  linkedListSizeText.textContent = newLinkedList.size();
  linkedListHeadText.textContent = "(" + newLinkedList.head().value + ")";
  linkedListTailText.textContent = "(" + newLinkedList.tail().value + ")";
}

appendValueBtn.addEventListener("click", function () {
  newLinkedList.append(appendValueInput.value);
  linkedListData();
  appendValueInput.value = "";
});

prependValueBtn.addEventListener("click", function () {
  newLinkedList.prepend(prependValueInput.value);
  linkedListData();
  prependValueInput.value = "";
});

findNodeAtBtn.addEventListener("click", function () {
  linkedListFindNodeValueAtIndexText.textContent = newLinkedList.find(
    findNodeAtValueInput.value
  );
  findNodeAtValueInput.value = "";
});

removeLastNodeBtn.addEventListener("click", function () {
  newLinkedList.pop();
  linkedListData();
});

containsValueBtn.addEventListener("click", function () {
  const containsValue =
    newLinkedList.contains(containsValueInput.value) === true ? "YES" : "NO";
  linkedListContainsValueText.textContent =
    "Is value " + containsValueInput.value + " present? " + containsValue;
  containsValueInput.value = "";
});

insertNewNodeAtBtn.addEventListener("click", function () {
  newLinkedList.insertAt(
    insertNewNodeValueInput.value,
    insertNewNodeIndexInput.value
  );
  //linkedListData();
  insertNewNodeValueInput.value = "";
  insertNewNodeIndexInput.value = "";
});

removeAtNodeBtn.addEventListener("click", function () {
  newLinkedList.removeAt(removeAtInput.value);
  linkedListData();
  removeAtInput.value = "";
});

//console.log(newLinkedList.toString());
//newLinkedList.insertAt("D", 0);
//console.log(newLinkedList);
/*
newLinkedList.insertAt("P", 9);
console.log(newLinkedList);
console.log(newLinkedList.toString());
*/
/*

//newLinkedList.tail();

console.log(newLinkedList);

//console.log(newLinkedList.size());
//console.log(newLinkedList.head());
console.log(newLinkedList.toString());

newLinkedList.removeAt(3);

//newLinkedList.removeHead()

console.log(newLinkedList.toString());

newLinkedList.insertAt("D", 0)

//console.log(newLinkedList.insertAt("D", 2));

//console.log(newLinkedList.shift());
*/
