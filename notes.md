# project planning

The main goal of this project is to implement linked list using class/ factory.

I wanted to get some more practice with classes, so I will use classes here

Reading the (project description)[https://www.theodinproject.com/lessons/javascript-linked-lists#assignment] tells us that we would need 2 classes for the follwing

1. LinkedList - represent the full list
2. Node - single element of list containing value property and link to nextNode (by default both are null)

insertAt functionality logic

insertAt("D", 1)

(HEAD) -> (A) -> (B) -> (C) -> null
0 1 2 3

does the linked list have any elements?
if yes -> make a new node, with the provided value as (D) -> null
traverse the existing linked list and check its index value
index is 0 for the first node and increments with each node in the linked list
check to see if the result of (indexToInsertAt - currentIndex) is 1
this means that the index that we want to insert new node at is 1 step ahead of
the current node
so we can point current node to this new node as

(HEAD) -> (D) -> null

however this will make us loose access to the rest of the node

before inserting this new node, we first need to save the node that we are going to move

temp = (A) -> (B) -> (C) -> null

now we wont loose access to the rest of the list

after inserting new node we make it point to temp to complete insertion

(Head) -> (D) -> (A) -> (B) -> (C) -> null
