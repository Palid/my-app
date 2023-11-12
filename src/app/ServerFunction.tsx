"use server";
import { increment, getCounter } from "./Incrementor";

export async function myServerFunction() {
  increment();
  return getCounter();
}
