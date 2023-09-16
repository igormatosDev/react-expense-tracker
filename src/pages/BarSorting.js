import React, { useEffect, useState } from "react";
import RainbowSubHeader from "../components/RainbowSubHeader";
import Bar from "../components/Bar";
import { bubbleSort, insertionSort, quickSort, treeSort, selectionSort, heapSort } from "../constants/sorting_methods";

const BarSorting = () => {
  const BARS_DEFAULT_QUANTITY = 10;
  const [count, setCount] = useState(0);
  const [bars, setBars] = useState([]);
  const [sortType, setSortType] = useState("bubble-sort");
  const [sortSpeed, setSortSpeed] = useState("1000");
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [currentBars, setCurrentBars] = useState([]);

  useEffect(() => {
    handleCountChange(BARS_DEFAULT_QUANTITY);
  }, []);


  const handleCountChange = (value) => {
    if (value >= 1 && value <= 40) {
      setCount(value);
      const randomNumbers = [];
      for (let i = 1; i <= value; i++) {
        randomNumbers.push(i);
      }
      randomNumbers.sort(() => Math.random() - 0.5);
      setBars(randomNumbers);
    }
  };

  const handlePlay = () => {
    if (!sortingInProgress) {
      setSortingInProgress(true);
      let barsCopy = [...bars];
      switch (sortType) {
        case "bubble-sort":
          return bubbleSort(barsCopy, sortSpeed, setCurrentBars, setBars, setSortingInProgress);
        case "insertion-sort":
          return insertionSort(barsCopy, sortSpeed, setCurrentBars, setBars, setSortingInProgress);
        case "quick-sort":
          return quickSort(barsCopy, sortSpeed, setCurrentBars, setBars, setSortingInProgress);
        case "tree-sort":
          return treeSort(barsCopy, sortSpeed, setCurrentBars, setBars, setSortingInProgress);
        case "selection-sort":
          return selectionSort(barsCopy, sortSpeed, setCurrentBars, setBars, setSortingInProgress);
        case "heap-sort":
          return heapSort(barsCopy, sortSpeed, setCurrentBars, setBars, setSortingInProgress);
        default:
          return alert("Not implemented sorting method.");
      }
    }
  };

  return (
    <>
      <div className="barsorting">
        <RainbowSubHeader key="head" title="Bar sorter App" />
        <div className="barsorting__form">
          <input
            disabled={sortingInProgress}
            type="number"
            name="count"
            min="1"
            max="40"
            placeholder="Bar count (1 ~ 40)"
            value={count}
            onChange={(e) => {
              handleCountChange(e.target.value);
            }}
          />
          <select
            disabled={sortingInProgress}
            name="sort_type"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="bubble-sort">Bubble sort</option>
            <option value="insertion-sort">Insertion sort</option>
            <option value="quick-sort">Quick sort</option>
            <option value="selection-sort">Selection sort</option>
            <option value="heap-sort">Heap sort</option>
            <option value="tree-sort">Tree sort</option>
          </select>

          <select
            disabled={sortingInProgress}
            name="sort_speed"
            onChange={(e) => setSortSpeed(e.target.value)}
          >
            <option value="1000">1x</option>
            <option value="500">2x</option>
            <option value="250">4x</option>
            <option value="100">10x</option>
          </select>

          <button
            disabled={sortingInProgress}
            className="btn-default"
            onClick={handlePlay}
          >
            {sortingInProgress ? "Sorting..." : "Play"}
          </button>
        </div>

        <div className="barsorting__container">
          {bars.map((number, index) => {
            const isActive = currentBars.includes(index);
            return (
              <Bar key={number} number={number} len={count} active={isActive} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BarSorting;
