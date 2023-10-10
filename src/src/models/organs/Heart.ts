import { Organ } from "./Organ";

export class Heart extends Organ {
  private capacity: string;

  constructor(capacity: string) {
    super("heart");
    this.capacity = capacity;
  }

  getCapacity() {
    return this.capacity;
  }

  setCapacity(capacity: string) {
    this.capacity = capacity;
  }
}
