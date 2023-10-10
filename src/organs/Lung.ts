import { Organ } from "./organ";

class Heart extends Organ {
  private chambers: number;

  constructor(name: string, chambers: number) {
    super(name);
    this.chambers = chambers;
  }

  getChambers() {
    return this.chambers;
  }

  pump() {
    console.log(`The ${this.getName()} is pumping blood.`);
  }
}
