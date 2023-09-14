import React from "react";

import { Header } from "../components/Header";
import WordFilterForm from "../components/WordFilterForm";

const WordFilter = () => {
  return (
    <>
      <Header title={"Word filter"} />
      <WordFilterForm />
    </>
  );
};

export default WordFilter;
