export class Organ {
  private name: string;
  private isVisible: Boolean;

  constructor(name: string) {
    this.name = name;
    this.isVisible = true;
  }

  getName() {
    return this.name;
  }

  getVisibility() {
    return this.isVisible;
  }

  setVisibility() {
    this.isVisible = !this.isVisible;
  }
}
