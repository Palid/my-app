"use server";

import { MyClientComponent } from "./ClientComponent";
import { getCounter } from "./Incrementor";

export async function MyServerPageComponent() {
  const counter = await getCounter();

  return <MyClientComponent counter={counter.counter} />;
}
