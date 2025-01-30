class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Parent va bolalar indexlarini hisoblash
  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChildIndex(i) {
    return 2 * i + 1;
  }
  rightChildIndex(i) {
    return 2 * i + 2;
  }

  // Heapga element qo'shish (bubble up)
  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIdx = this.parentIndex(index);
      if (this.heap[parentIdx][1] <= this.heap[index][1]) break;

      // Swap
      [this.heap[parentIdx], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIdx],
      ];
      index = parentIdx;
    }
  }

  // Eng kichik elementni chiqarish (heapify down)
  dequeue() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(index) {
    let smallest = index;
    let left = this.leftChildIndex(index);
    let right = this.rightChildIndex(index);
    let length = this.heap.length;

    if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
      smallest = left;
    }
    if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.heapifyDown(smallest);
    }
  }

  size() {
    return this.heap.length;
  }

  toArray() {
    return this.heap.slice();
  }
}

const mostFrequent = (array, k) => {
  if (!array.length) return [];

  const map = new Map();

  // 1. Elementlar chastotasini hisoblash
  for (const num of array) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 2. Min-Heap yaratish
  const minHeap = new MinHeap();

  for (const [num, freq] of map.entries()) {
    minHeap.enqueue([num, freq]);
    if (minHeap.size() > k) minHeap.dequeue(); // K dan ortiq bo'lsa, eng kichik elementni o‘chirib tashlaymiz
  }

  // 3. Heapdagi elementlarni natijaga o‘tkazish
  return minHeap.toArray().map((entry) => entry[0]);
};

// Test qilish
console.log(mostFrequent([1, 1, 1, 2, 2, 3, 3], 2)); // [1, 2]
console.log(mostFrequent([4, 4, 4, 4, 5, 5, 5, 6, 6, 7], 3)); // [4, 5, 6]
console.log(mostFrequent([10, 10, 20, 20, 30, 30, 30, 40], 2)); // [30, 20]
