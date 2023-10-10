import { initBody } from "./body-functions/initBody";
import { Brain } from "./models/organs/Brain";
import { Heart } from "./models/organs/Heart";

function runBodySystems(): void {
  const body = initBody();
  console.log(body);
}

function generateOrgans() {
  const heart = new Heart("full");
  const brain = new Brain();
}

generateOrgans();
runBodySystems();
