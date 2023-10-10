import { Organ } from "./Organ";

class Heart extends Organ {
  private capacity: string;

  constructor(name: string, capacity: string) {
    super(name);
    this.capacity = capacity;
  }

  getCapacity() {
    return this.capacity;
  }

  breathe() {}
}
