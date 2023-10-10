import { LargeIntestine } from "./LargeIntestine";
import { Organ } from "./Organ";

export class Stomach extends Organ {
  stomachContents = [];
  constructor() {
    super("stomach");
  }

  digest(food: Food) {
    if (food) {
      this.stomachContents.push(food);
      console.log(`Stomach is digesting ${food.name}`);
      setTimeout(() => this.processStomachContents(), 2000); // Simulate digestion time
    } else {
      console.log("Stomach can only digest food.");
    }
  }

  processStomachContents() {
    for (const food of this.stomachContents) {
      console.log(`Stomach has digested ${food.name}`);
      this.stomachContents.shift(); // Remove digested food
      const waste = new Waste(food.name);
      this.moveToIntestines(waste);
    }
  }

  moveToIntestines(waste) {
    LargeIntestine.receiveWaste(waste);
  }
}
