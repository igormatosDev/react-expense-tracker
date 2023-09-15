import React, { useEffect, useState } from "react";
import RainbowSubHeader from "../components/RainbowSubHeader";
import Bar from "../components/Bar";

const BarSorting = () => {
  const [count, setCount] = useState(0);
  const [bars, setBars] = useState([]);

  useEffect(() => {
    setCount(25);
  }, []);

  useEffect(() => {
    if (bars.length >= 2) {
      setTimeout(() => {
        const barsCopy = [...bars];
        barsCopy[0] = bars[1];
        barsCopy[1] = bars[0];
        console.log(bars);
        setBars(barsCopy);
      }, 1000);
    }
  }, [bars]);

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

  return (
    <>
      <div className="barsorting">
        <RainbowSubHeader key="head" title="Bar sorter App" />
        <div className="barsorting__form">
          <input
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
          <select name="sort_type">
            <option value="bubble-sort">Bubble sort</option>
            <option value="insertion-sort">Insertion sort</option>
            <option value="selection-sort">Selection</option>
            <option value="tree-sort">Tree sort</option>
            <option value="quick-sort">Quick sort</option>
          </select>

          <button className="btn-default">Play</button>
        </div>

        <div className="barsorting__container">
          {bars.map((number, index) => {
            return (
              <Bar key={Math.random() * 10000} number={number} len={count} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BarSorting;
