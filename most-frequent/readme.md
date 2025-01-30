# MinHeap Implementation & Most Frequent Elements Finder

This project implements a **MinHeap** data structure in JavaScript and uses it to solve the problem of finding the **k most frequent elements** in an array.

## Features

- **MinHeap Data Structure**: Implements basic heap operations such as insertion (`enqueue`), deletion (`dequeue`), and heap property maintenance (`bubbleUp` and `heapifyDown`).
- **Finding k Most Frequent Elements**: Uses MinHeap to efficiently determine the k most frequent elements in an array.

## Implementation Details

### MinHeap Class

The `MinHeap` class maintains a **min-heap** where elements are stored as `[value, frequency]` pairs.

- **enqueue(value)**: Adds a new element to the heap while maintaining the heap property.
- **dequeue()**: Removes and returns the smallest element (the one with the lowest frequency).
- **bubbleUp()**: Ensures the heap structure is maintained when an element is inserted.
- **heapifyDown(index)**: Ensures the heap structure is maintained when the root element is removed.
- **size()**: Returns the number of elements in the heap.
- **toArray()**: Returns the heap as an array.

### mostFrequent Function

The function `mostFrequent(array, k)` finds the `k` most frequent elements from the input array.

#### Steps:

1. **Count the Frequency**: Store element frequencies in a Map.
2. **Use MinHeap for Top k Elements**:
   - Insert elements into the heap.
   - If the heap size exceeds `k`, remove the smallest element.
3. **Extract Top k Elements**: Convert the heap into an array and return only the element values.

## Usage

```javascript
console.log(mostFrequent([1, 1, 1, 2, 2, 3, 3], 2)); // [1, 2]
console.log(mostFrequent([4, 4, 4, 4, 5, 5, 5, 6, 6, 7], 3)); // [4, 5, 6]
console.log(mostFrequent([10, 10, 20, 20, 30, 30, 30, 40], 2)); // [30, 20]
```

## Time Complexity

- Constructing the frequency map: **O(n)**
- Inserting elements into the MinHeap: **O(n log k)**
- Extracting elements from the heap: **O(k log k)**
- **Overall Complexity**: **O(n log k)** (since `k` is typically much smaller than `n`)

## License

This project is open-source and free to use under the MIT License.
