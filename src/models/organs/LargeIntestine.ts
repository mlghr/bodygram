import { Organ } from "./Organ";

export class LargeIntestine extends Organ {
  constructor() {
    super("large-intestine");
  }

  receiveStomachContents(stomachContents: ProcessedFood) {}
}
