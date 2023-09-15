import React, { useEffect, useState } from "react";

import TextBlock from "../components/TextBlock";
import RainbowSubHeader from "../components/RainbowSubHeader";


import { motivationalSentences } from "../constants/const_motivational_senteces";
import { getRandomColor } from "../constants/helpers";

const WordFilterForm = () => {
  const [search, setSearch] = useState("");
  const [sentences, setSentences] = useState([]);

  useEffect(() => {
    let s = motivationalSentences
      .map((sentence) => {
        return {
          id: parseInt(Math.random() * 10000000),
          color: getRandomColor(),
          message: sentence,
        };
      })
      .sort((a, b) => a.id - b.id);

    setSentences(s);
  }, []);

  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Type here to filter..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <RainbowSubHeader title="MOTIVATIONAL &nbsp; SENTENCES" />

      {sentences
        .filter((sentence) => {
          return (
            search === "" ||
            sentence.message.toLowerCase().indexOf(search.toLowerCase()) !== -1
          );
        })
        .sort((a, b) => a.id - b.id)
        .map((sentence) => {
          return (
            <TextBlock
              key={sentence.id}
              borderColor={sentence.color}
              sentence={sentence.message}
            />
          );
        })}
    </>
  );
};

export default WordFilterForm;
