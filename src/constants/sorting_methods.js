import { timeout } from "./helpers";

export const bubbleSort = async (
  barsCopy,
  sortSpeed,
  setCurrentBars,
  setBars,
  setSortingInProgress
) => {
  for (let i = 0; i < barsCopy.length; i++) {
    for (let j = 0; j < barsCopy.length - i - 1; j++) {
      if (barsCopy[j] > barsCopy[j + 1]) {
        let temp = barsCopy[j];
        barsCopy[j] = barsCopy[j + 1];
        barsCopy[j + 1] = temp;
        setCurrentBars([j, j + 1]);
        setBars([...barsCopy]);
        await timeout(sortSpeed);
      }
    }
  }
  setSortingInProgress(false);
  setCurrentBars([]);
};

export const insertionSort = async (
  barsCopy,
  sortSpeed,
  setCurrentBars,
  setBars,
  setSortingInProgress
) => {
  for (let i = 1; i < barsCopy.length; i++) {
    let currentBar = barsCopy[i];
    let j = i - 1;

    while (j >= 0 && barsCopy[j] > currentBar) {
      barsCopy[j + 1] = barsCopy[j];
      j--;
    }

    barsCopy[j + 1] = currentBar;

    setCurrentBars([j, i]);
    setBars([...barsCopy]);
    await timeout(sortSpeed);
  }

  setSortingInProgress(false);
  setCurrentBars([]);
};

export const quickSort = async (
  barsCopy,
  sortSpeed,
  setCurrentBars,
  setBars,
  setSortingInProgress
) => {
  const sort = async (low, high) => {
    if (low < high) {
      const pivotIndex = await partition(low, high);
      await sort(low, pivotIndex - 1);
      await sort(pivotIndex + 1, high);
    }
  };

  const partition = async (low, high) => {
    const pivot = barsCopy[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (barsCopy[j] < pivot) {
        i++;
        await swap(i, j);
      }
    }

    await swap(i + 1, high);
    return i + 1;
  };

  const swap = async (i, j) => {
    const temp = barsCopy[i];
    barsCopy[i] = barsCopy[j];
    barsCopy[j] = temp;

    setCurrentBars([i, j]);
    setBars([...barsCopy]);
    await timeout(sortSpeed);
  };

  await sort(0, barsCopy.length - 1);
  setSortingInProgress(false);
  setCurrentBars([]);
};

export const treeSort = async (
  barsCopy,
  sortSpeed,
  setCurrentBars,
  setBars,
  setSortingInProgress
) => {
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  const insert = (root, value) => {
    if (root === null) {
      return new TreeNode(value);
    }

    if (value < root.value) {
      root.left = insert(root.left, value);
    } else {
      root.right = insert(root.right, value);
    }

    return root;
  };

  const inOrderTraversal = async (root, index) => {
    if (root !== null) {
      index = await inOrderTraversal(root.left, index);
      barsCopy[index] = root.value;
      await timeout(sortSpeed);
      setBars([...barsCopy]);
      setCurrentBars([index - 1, index]);
      index++;
      index = await inOrderTraversal(root.right, index);
    }
    return index;
  };

  let root = null;

  for (let i = 0; i < barsCopy.length; i++) {
    root = insert(root, barsCopy[i]);
  }

  await inOrderTraversal(root, 0);

  setSortingInProgress(false);
  setCurrentBars([]);
};

export const selectionSort = async (
  barsCopy,
  sortSpeed,
  setCurrentBars,
  setBars,
  setSortingInProgress
) => {
  for (let i = 0; i < barsCopy.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < barsCopy.length; j++) {
      if (barsCopy[j] < barsCopy[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = barsCopy[i];
      barsCopy[i] = barsCopy[minIndex];
      barsCopy[minIndex] = temp;
      setCurrentBars([i, minIndex]);
      setBars([...barsCopy]);
      await timeout(sortSpeed);
    }
  }

  setSortingInProgress(false);
  setCurrentBars([]);
};

export const heapSort = async (
  barsCopy,
  sortSpeed,
  setCurrentBars,
  setBars,
  setSortingInProgress
) => {
  const heapify = async (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      const temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      // Update setCurrentBars to highlight the bars being compared
      setCurrentBars([i, largest]);
      setBars([...arr]);
      await timeout(sortSpeed);

      await heapify(arr, n, largest);
    }
  };

  const sort = async () => {
    const n = barsCopy.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(barsCopy, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i >= 0; i--) {
      const temp = barsCopy[0];
      barsCopy[0] = barsCopy[i];
      barsCopy[i] = temp;

      // Update setCurrentBars to highlight the bars being compared
      setCurrentBars([0, i]);
      setBars([...barsCopy]);
      await timeout(sortSpeed);
      await heapify(barsCopy, i, 0);
    }
  };

  await sort();
  setSortingInProgress(false);
  setCurrentBars([]);
};
