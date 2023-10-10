import { Body } from "./body-parts/Body";

export function createBody() {
  const body = new Body();

  console.log(JSON.stringify(body));
}
