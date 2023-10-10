import { initBody } from "./body-functions/initBody";
import { AdrenalGland } from "./models/organs/AdrenalGland";
import { Bladder } from "./models/organs/Bladder";
import { Brain } from "./models/organs/Brain";
import { Eyes } from "./models/organs/Eyes";
import { Gallbladder } from "./models/organs/Gallbladder";
import { Heart } from "./models/organs/Heart";
import { Kidney } from "./models/organs/Kidney";
import { LargeIntestine } from "./models/organs/LargeIntestine";
import { Liver } from "./models/organs/Liver";
import { Lung } from "./models/organs/Lung";
import { Pancreas } from "./models/organs/Pancreas";
import { Penis } from "./models/organs/Penis";
import { Spleen } from "./models/organs/Spleen";
import { Stomach } from "./models/organs/Stomach";
import { Thymus } from "./models/organs/Thymus";
import { Tongue } from "./models/organs/Tongue";
import { Vagina } from "./models/organs/Vagina";

function runBodySystems(): void {
  const body = initBody();
  console.log(body);
}

function generateOrgans(biologicalSex: BiologicalSex) {
  const adrenalGland = new AdrenalGland();
  const bladder = new Bladder();
  const brain = new Brain();
  const eyes = new Eyes();
  const gallbladder = new Gallbladder();
  // determine biological sex
  const genitals = biologicalSex === "male" ? new Penis() : new Vagina();
  const heart = new Heart("full");
  const kidney = new Kidney();
  const largeIntestine = new LargeIntestine();
  const liver = new Liver();
  const lung = new Lung();
  const pancreas = new Pancreas();
  const spleen = new Spleen();
  const stomach = new Stomach();
  const thymus = new Thymus();
  const tongue = new Tongue();

  return [
    adrenalGland,
    bladder,
    brain,
    gallbladder,
    genitals,
    heart,
    kidney,
    largeIntestine,
    liver,
    lung,
    pancreas,
    spleen,
    stomach,
    thymus,
    tongue,
  ];
}

const organs = generateOrgans("male");
runBodySystems();

console.log("Organs: ", organs);
