import { initBody } from "./body-functions/initBody";
import { Brain } from "./models/organs/Brain";
import { Gallbladder } from "./models/organs/Gallbladder";
import { Heart } from "./models/organs/Heart";
import { Kidney } from "./models/organs/Kidney";
import { Liver } from "./models/organs/Liver";
import { Lung } from "./models/organs/Lung";
import { Spleen } from "./models/organs/Spleen";

function runBodySystems(): void {
  const body = initBody();
  console.log(body);
}

function generateOrgans() {
  const heart = new Heart("full");
  const brain = new Brain();
  const gallbladder = new Gallbladder();
  const kidney = new Kidney();
  const liver = new Liver();
  const lung = new Lung();
  const spleen = new Spleen();
}

generateOrgans();
runBodySystems();
