"use client";
import { useEffect, useState } from "react";
import { myServerFunction } from "./ServerFunction";

export function MyClientComponent({ counter }: { counter: number }) {
  const [updatedCounter, setUpdatedCounter] = useState(counter);
  useEffect(() => {
    setUpdatedCounter(counter);
  }, [counter]);
  return (
    <button
      onClick={async () => {
        const res = await myServerFunction();
        setUpdatedCounter(res.counter);
      }}
    >
      haha guzik {updatedCounter}
    </button>
  );
}
