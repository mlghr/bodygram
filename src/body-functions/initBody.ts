import { Abdomen } from "../models/body-parts/Abdomen";
import { Body } from "../models/body-parts/Body";
import { Head } from "../models/body-parts/Head";
import { LeftArm } from "../models/body-parts/LeftArm";
import { LeftLeg } from "../models/body-parts/LeftLeg";
import { RightArm } from "../models/body-parts/RightArm";
import { RightLeg } from "../models/body-parts/RightLeg";
import { Torso } from "../models/body-parts/Torso";

export function initBody() {
  const head = new Head();
  const torso = new Torso();
  const abdomen = new Abdomen();
  const leftArm = new LeftArm();
  const leftLeg = new LeftLeg();
  const rightArm = new RightArm();
  const rightLeg = new RightLeg();

  return new Body(head, torso, abdomen, leftArm, leftLeg, rightArm, rightLeg);
}
