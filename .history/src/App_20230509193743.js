import React, { useState } from "react";
import Counter from "./components/Counter";

export default function App() {
  const [total, setTotal] = useState(0);

  const handleClickTotal = () => {
    setTotal((prev) => prev + 1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <p>Total Count : {total}</p>
      <Counter total={total} handleClickTotal={handleClickTotal} />
      <Counter total={total} handleClickTotal={handleClickTotal} />
    </div>
  );
}
