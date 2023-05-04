// ExpensiveComponent.js
import React, { useState, useEffect } from "react";

function simulateFetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Some expensive data");
    }, 3000);
  });
}

export default function ExpensiveComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await simulateFetchData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>ExpensiveComponent</h1>
      <p>{data}</p>
    </div>
  );
}
