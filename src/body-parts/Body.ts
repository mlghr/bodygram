import { Abdomen } from "./Abdomen";
import { Head } from "./Head";
import { LeftArm } from "./LeftArm";
import { LeftLeg } from "./LeftLeg";
import { RightArm } from "./RightArm";
import { RightLeg } from "./RightLeg";
import { Torso } from "./Torso";

export class Body {
  constructor(
    head: Head,
    torso: Torso,
    abdomen: Abdomen,
    leftLeg: LeftLeg,
    leftArm: LeftArm,
    rightLeg: RightLeg,
    rightArm: RightArm
  ) {
    this.head = head;
    this.torso = torso;
    this.abdomen = abdomen;
    this.leftLeg = leftLeg;
    this.rightLeg = RightLeg;
    this.rightArm = rightArm;
  }

  head: Head;
  torso: Torso;
  abdomen: Abdomen;
  leftArm: LeftArm;
  rightArm: RightArm;
  leftLeg: LeftLeg;
  rightLeg: RightLeg;
}
